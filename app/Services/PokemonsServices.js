import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosServices.js"



class PokemonsServices {
    async setActivePokemon(pokemonName) {
        const res = await pokeApi.get(`/${pokemonName}`)
        appState.pokemon = new Pokemon(res.data)
        
    }

    async getPokemons() {
        const res = await pokeApi.get()
        appState.pokemons = res.data.results
    } 

}


export const pokemonsServices = new PokemonsServices()
