import { sandBoxService } from "../Services/SandBoxService.js"
import { Pop } from "../Utils/Pop.js"

export class SandBoxController{

    async catchPokemon() {
        try {
            await sandBoxService.catchPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }
}