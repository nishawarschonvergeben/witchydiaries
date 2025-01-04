import db from "$lib/db.js";

export async function load() {
  return {
    characters: await db.getCharacters()
  };
 
}
