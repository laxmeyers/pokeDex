

export class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = []
        if (data.types.length >= 1) {
            for (let i = 0; i < data.types.length; i++){
                this.types.push(data.types[i].type.name)
            }
        }
    }

    static PokedexTemplate(pokemon) {
        return `
        <button class="btn btn-outline-danger fw-bold fs-3 text-center w-100 mb-3" onclick="app.pokemonsController.setActivePokemon('${pokemon.name}')">${pokemon.name}</button>
        `
    }

    get ActivePokemon() {
        return `
        <div class="col-8 bg-light m-auto text-center">
          <h1>${this.name.toUpperCase()}</h1>
          <div><img class="w-25" src="${this.img}" alt=""></div>
          <div class="row">
            <div class="col-6 mb-5 text-center">
              <h4>height: ${this.height}</h4>
            </div>
            <div class="col-6 mb-5 text-center">
              <h4>weight: ${this.weight}</h4>
            </div>
            <div class="col-6 mb-5 text-center">
              <h4>Types: ${this.types}</h4>
            </div>
          </div>
          <div class="d-flex justify-items-between">
          </div>          
          <button class="btn btn-danger mb-3 w-50" onclick="app.sandBoxController.catchPokemon()">Catch!</button>
        </div>
        `
    }

 }
