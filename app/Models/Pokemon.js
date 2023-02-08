

export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.sprites.front_default
        this.weight = 69
        this.height = 7
        this.types = data.types
    }

    static PokedexTemplate(pokemon) {
        return `
        <button class="btn btn-outline-danger fw-bold fs-3 text-center w-100 mb-3" onclick="app.pokemonsController.setActivePokemon('${pokemon.name}')">${pokemon.name}</button>
        `
    }

 }
