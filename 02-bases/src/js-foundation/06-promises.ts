import { http } from '../plugins/Index';


export const getRickById = async (id: number) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const rick = await http.get(url)
    return rick.name
    // const resp = await fetch(url)
    // const rick = await resp.json()
    // return rick.name
    // fetch(url)
    //     .then((resp) => resp.json())
    //     .then((pokemon) => pokemon.name)
}
