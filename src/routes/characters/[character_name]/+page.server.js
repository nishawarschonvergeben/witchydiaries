import db from "$lib/db.js";

export async function load({ params }) {
   const characterName = params.character_name; // Name aus der URL holen
  // Charakterdaten aus der Datenbank holen
  const character = await db.getCharacterWithIdeas(characterName);

    // Error Kontrolle
    console.log("Lade Daten für Charakter:", characterName);
    if (!character) {
      throw new Error(`Character "${characterName}" not found.`);
    } 
  
  // Daten an die Svelte-Komponente zurückgeben
  return {
    character,
  };

}


