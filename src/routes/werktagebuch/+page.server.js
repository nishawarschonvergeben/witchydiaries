import db from "$lib/db";

export async function load() {
  const entries = await db.getEntries();
  console.log("Found entry, db:", entries); // Debugging, cuz it (yet again) did not work mit de child siete 
  return {
    entries
  }
}
