import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosServices.js"



class PokemonsServices {
    async getPokemons() {
        const res = await pokeApi.get()
        appState.pokemons = res.data.results
        console.log(appState.pokemons);
    } 

}


export const pokemonsServices = new PokemonsServices()
