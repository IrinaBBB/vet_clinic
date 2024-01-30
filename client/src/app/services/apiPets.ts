import supabase from "./supabase.ts";

export async function getPets() {
    let { data, error } = await supabase.from('animals').select('*')
    if (error) {
        console.log(error)
        throw new Error('Pets could not be loaded')
    }

    return data
}