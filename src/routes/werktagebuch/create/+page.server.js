import db from '$lib/db.js';

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        //console.log(data);
        let entry = {
            date: data.get("date"),
            content: data.get("content"),
            feels: data.get("feels"),
            location: data.get("location"),
            duration: data.get("duration"),
        }
        await db.createEntry(entry);
        return { success: true }
    }
}