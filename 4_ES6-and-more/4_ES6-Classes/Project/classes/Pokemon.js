import StorageCtrl from './StorageCtrl.js';

export default class Pokemon {
	constructor(name, type, power) {
		const pokemonDB = StorageCtrl.getPokemons();

		this.name = String(name);
		this.type = String(type);
		this.power = parseInt(power);
		this.summary = this.getSummary();
		this.id = pokemonDB.length > 0 ? pokemonDB[pokemonDB.length - 1].id + 1 : 0;
	}

	getSummary() {
		return `Pokemon's name is ${this.name.toUpperCase()} with the type of ${this.type.toUpperCase()}
		and a power of ${this.power}.`;
	}
}