import { PokemonsController } from "./Controllers/PokemonsController.js";
import { SandBoxController } from "./Controllers/sandboxController.js";

class App {
  pokemonsController = new PokemonsController()
  sandBoxController = new SandBoxController()
}

window["app"] = new App();
