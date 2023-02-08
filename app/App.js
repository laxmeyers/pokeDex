import { PokemonsController } from "./Controllers/PokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  pokemonsController = new PokemonsController()
}

window["app"] = new App();
