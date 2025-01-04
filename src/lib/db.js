import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("reverie"); // Verbindung zur Datenbank "reverie"

//////////////////////////////////////////
// Characters
//////////////////////////////////////////

// Alle Charaktere abrufen
async function getCharacters() {
  let characters = [];
  try {
    const collection = db.collection("characters"); // Verbindung zur Collection "characters"

    // Leere Abfrage für alle Dokumente
    const query = {};

    // Alle Objekte, die mit der Abfrage übereinstimmen, abrufen
    characters = await collection.find(query).toArray();

    // ObjectId in String konvertieren
    characters.forEach((character) => {
      character._id = character._id.toString();
    });
  } catch (error) {
    console.log("Fehler beim Abrufen der Charaktere:", error);
  }
  return characters;
}

/////////////////////////////////////////
// Einzelnen Charakter nach Name abrufen
async function getCharacterByName(name) {
  try {
    // Verbindung zur Collection
    const collection = db.collection("characters");

    // Suche nach dem Charakter basierend auf dem Namen
    const character = await collection.findOne({ name: name });

    // Falls der Charakter nicht gefunden wird
    if (!character) {
      console.warn(`Kein Charakter mit dem Namen "${name}" gefunden.`);
      return null;
    }
    // Prüfe, ob der Charakter korrekt geladen wurde
    console.log("Gfunde im Server:", character);

    // Konvertiere ObjectId zu String und gib den Charakter zurück (ChatGPT)
    return {
      ...character,
      _id: character._id.toString(),
    };
  } catch (error) {
    console.error("Fehler beim Abrufen des Charakters:", error);
    return null; // Fehler, daher null zurückgeben
  }
}

/////////////////////
// Für die M:N Beziehung zwischen Charakteren und Ideen (Chat GPT hat geholfen!!! Habe erst zu spät realisiert, dass man das nicht machen muss)
// Einzelnen Charakter mit verknüpften Ideen abrufen
async function getCharacterWithIdeas(characterName) {
  const collection = db.collection("characters");

  // MongoDB-Query
  const result = await collection.aggregate([
    { $match: { name: characterName } },
    {
      $lookup: {
        from: "ideas",
        localField: "_id",
        foreignField: "character",
        as: "potentialIdeas",
      },
    },
  ]).toArray();

  if (result.length === 0) {
    console.log(`No character found with name "${characterName}"`);
    return null;
  }

  const character = result[0];
  character._id = character._id.toString(); // ObjectId in String umwandeln 
  character.potentialIdeas = character.potentialIdeas.map((idea) => ({
    ...idea,
    _id: idea._id.toString(), // Konvertiere ObjectId zu String
    character: idea.character.map((charId) => charId.toString()), // Konvertiere alle ObjectIds im Array zu Strings
  }));


  return character;
}


////////////////////////
// Ideas
////////////////////////

// Get all!! ideas -- learning 30 min spöter, es wird uf de oberste siete ahzeiget, will mir ja dete eh uflistig vo allne wönd.. find ungleich findOne
async function getIdeas() {
  let ideas = [];
  try {
    const collection = db.collection("ideas");

    // You can specify a query // chatgpt
    const query = {};
    const projection = { character: 0 }; // Exclude the 'character' field -> chatgpt 

    // Get all objects that match the query
    ideas = await collection.find(query, { projection }).toArray();
    ideas.forEach((idea) => {
      idea._id = idea._id.toString(); // convert ObjectId to String
    });

  }


  catch (error) {
    // TODO: errorhandling
  }
  return ideas;
}

// Get an idea by id
async function getIdea(id) {
  let idea = null;
  try {
    const collection = db.collection("ideas");
    const query = { _id: new ObjectId(id) }; // filter by id
    const projection = { character: 0 };

    idea = await collection.findOne(query, { projection });

    if (!idea) {
      console.log("No idea with id " + id);
      // TODO: errorhandling
    } else {
      idea._id = idea._id.toString(); // convert ObjectId to String
      console.log("Found idea:", idea); // 
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return idea;
}

// create an idea
async function createIdea(idea) {
  try {
    const collection = db.collection("ideas");
    const result = await collection.insertOne(idea);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update idea
// returns: id of the updated idea or null, if idea could not be updated
async function updateIdea(idea) {
  try {
    let id = idea._id;
    delete idea._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("ideas");
    const projection = { character: 0 };
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: idea }); // für mongodb

    if (result.matchedCount === 0) {
      console.log("No ideas with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Idea with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}
// delete idea by id
// returns: id of the deleted artist or null, if idea could not be deleted
async function deleteIdea(id) {
  try {
    const collection = db.collection("ideas");
    const query = { _id: new ObjectId(id) }; // übergibst die id der Idee, die gelöscht werden soll.
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No object with id " + id);
    } else {
      console.log("Object with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// werktagebuch entries gemacht, weil ich die Aufgabenstellung nicht komplett auf Anhieb verstanden habe
//////////////////////////////////////////

// Get all entries
async function getEntries() {
  let entries = [];
  try {
    const collection = db.collection("entries");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    entries = await collection.find(query).toArray();
    // artists isch collection name 
    entries.forEach((entry) => {
      entry._id = entry._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    // TODO: errorhandling
  }
  return entries;
}

// Get entry by id
async function getEntry(id) {
  let entry = null;
  try {
    const collection = db.collection("entries");
    const query = { _id: new ObjectId(id) }; // filter by id
    entry = await collection.findOne(query);

    if (!entry) {
      console.log("No entry with id " + id);
      // TODO: errorhandling
    } else {
      entry._id = entry._id.toString(); // convert ObjectId to String
      console.log("Found entry, db:", entry); // 
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return entry;
}

// create an entry
async function createEntry(entry) {
  try {
    const collection = db.collection("entries");
    const result = await collection.insertOne(entry);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// chronicles gemacht, weil ich die Aufgabenstellung nicht komplett auf Anhieb verstanden habe
//////////////////////////////////////////

// Get all chronicles
async function getChronicles() {
  let chronicles = [];
  try {
    const collection = db.collection("chronicles");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    chronicles = await collection.find(query).toArray();
    // chronicles isch collection name 
    chronicles.forEach((chronicle) => {
      chronicle._id = chronicle._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    // TODO: errorhandling
  }
  return chronicles;
}


/////////////////////
/////////////////////
/////////////////////


// Exportiere die Funktionen
export default {
  getCharacters,
  getCharacterByName,
  getCharacterWithIdeas, // Nicht im Unterricht gehabt -hatte hilfe von ChatGPT; nicht benotbar 
  deleteIdea,
  updateIdea,
  createIdea,
  getIdea,
  getIdeas,
  createEntry,
  getEntry,
  getEntries,
  getChronicles
};
