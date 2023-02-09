import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { sandBoxService } from "../Services/SandBoxService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawMyPokemon() {
    let template = ''
    appState.myPokemon.forEach(p => template += Pokemon.PokedexTemplate(p))
    setHTML('myPokedexBody', template)
}

export class SandBoxController{

    constructor() {
        _drawMyPokemon()
        appState.on('myPokemon', _drawMyPokemon)
        this.getMyPokemon()
    }

    async catchPokemon() {
        try {
            await sandBoxService.catchPokemon()
        } catch (error) {
            Pop.error(error)
            console.log(error.message);
        }
    }

    async getMyPokemon() {
        try {
            await sandBoxService.getMyPokemon()
        } catch (error) {
            Pop.error(error)
            console.log(error.message);
        }
    }
}