import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosServices.js"





class SandBoxService{
    async getMyPokemon() {
        const res = await sandboxApi.get('andrewmeyers/pokemon')
        console.log(res.data);
        console.log('hello', res.data[1].name);
        appState.myPokemon = res.data
        console.log('mypokemon', appState.myPokemon);
    }
    async catchPokemon() {
        debugger
        const res = await sandboxApi.post('andrewmeyers/pokemon', appState.pokemon)
        console.log(res.data);
        appState.myPokemon.push(new Pokemon(res.data))
        appState.emit('myPokemon')
    }

}

export const sandBoxService = new SandBoxService()