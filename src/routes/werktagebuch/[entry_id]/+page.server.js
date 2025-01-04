import db from "$lib/db.js";

export async function load({ params }) {
  return {
    entry: await db.getEntry(params.entry_id),
  };
}