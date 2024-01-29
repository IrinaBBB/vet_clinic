import supabase from './supabase.js'

export async function getVets() {
    let { data, error } = await supabase.from('veterinarians').select('*')
    if (error) {
        console.log(error)
        throw new Error('Vets could not be loaded')
    }

    return data
}