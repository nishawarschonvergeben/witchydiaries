import db from '$lib/db.js';

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        //console.log(data);
        let idea = {
            title: data.get("title"),
            tag: data.get("tag"),
            chapter: data.get("chapter"),
            setting: data.get("setting"),
            plot: data.get("plot"),
            conflict: data.get("conflict"),
            character_growth: data.get("character_growth"),
        }
        await db.createIdea(idea);
        return { 
            success: true
        }
    }
}
