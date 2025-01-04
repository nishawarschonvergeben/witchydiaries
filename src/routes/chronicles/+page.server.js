import db from "$lib/db";

export async function load() {
  const chronicles = await db.getChronicles();
  const count = chronicles.length; 

  return {
    chronicles,
    count
  };
}