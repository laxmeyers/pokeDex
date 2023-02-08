import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonsServices } from "../Services/PokemonsServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPokedex() {
    let template = ''
    appState.pokemons.forEach(p => template += Pokemon.PokedexTemplate(p))
    setHTML('pokedex-body', template)
}

export class PokemonsController {
    constructor() {
        console.log("poke controller");
        this.getPokemons()
        appState.on('pokemons', _drawPokedex)
    }

    async getPokemons() {
        try {
            await pokemonsServices.getPokemons()
        } catch (error) {
            Pop.error(error)
        }
    }
 }
