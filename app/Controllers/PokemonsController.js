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

function _drawPokemon() {
    if (appState.pokemon) {
        setHTML('pokemon', appState.pokemon.ActivePokemon)
    }
}

export class PokemonsController {
    constructor() {
        this.getPokemons()
        appState.on('pokemons', _drawPokedex)
        appState.on('pokemon', _drawPokemon)
    }

    async getPokemons() {
        try {
            await pokemonsServices.getPokemons()
        } catch (error) {
            Pop.error(error)
        }
    }

    async setActivePokemon(pokemonName) {
        try {
            await pokemonsServices.setActivePokemon(pokemonName)
        } catch (error) {
            Pop.error(error)
        }
    }
 }
