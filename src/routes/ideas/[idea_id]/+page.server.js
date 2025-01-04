import db from "$lib/db.js";

export async function load({ params }) {
  return {
    idea: await db.getIdea(params.idea_id),
  };
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();
    //console.log(data);
    let idea = {
      _id: data.get("_id"),
      tag: data.get("tag"),
      setting: data.get("setting"),
      plot: data.get("plot"),
      conflict: data.get("conflict"),
      character_growth: data.get("character_growth"),
    };
    await db.updateIdea(idea);
    return { success: true };
  },
};
