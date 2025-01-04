import db from "$lib/db";

export async function load() {
  return {
    ideas: await db.getIdeas(),
  }
}
export const actions = {
  delete: async ({request}) => {
      const data = await request.formData();
      // console.log(data);
      await db.deleteIdea(data.get("id"));
  }
}

