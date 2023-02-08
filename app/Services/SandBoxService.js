import { appState } from "../AppState.js"
import { sandboxApi } from "./AxiosServices.js"





class SandBoxService{
    async catchPokemon() {
        const res = await sandboxApi.post('andrew/pokemon', appState.pokemon)
        console.log(res.data);
        appState.myPokemon.push(res.data)
    }

}

export const sandBoxService = new SandBoxService()