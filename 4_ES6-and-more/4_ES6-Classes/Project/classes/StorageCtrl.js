import UI from './UI.js';

export default class StorageCtrl {
	static getPokemons() {
		const pokemons = localStorage.getItem('pokemons') === null ? [] : JSON.parse(localStorage.getItem('pokemons'));
		return pokemons;
	}

	static displayPokemons() {
		const pokemons = StorageCtrl.getPokemons();
		pokemons.forEach(pokemon => UI.addPokemonToTable(pokemon));
	}

	static addPokemon(pokemon) {
		const pokemons = StorageCtrl.getPokemons();
		pokemons.push(pokemon);
		localStorage.setItem('pokemons', JSON.stringify(pokemons));
	}

	static removePokemon(id, target) {
		if (!target.classList.contains('deleteX'))
			return;

		const pokemons = StorageCtrl.getPokemons();

		pokemons.forEach((pokemon, index) => {
		if(pokemon.id === parseInt(id))
			pokemons.splice(index, 1);
		});
		localStorage.setItem('pokemons', JSON.stringify(pokemons));
	}
}