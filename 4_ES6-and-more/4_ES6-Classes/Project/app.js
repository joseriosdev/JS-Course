/*using bootstrap...
Build an app with 4 classes:
	* UI
	* StorageCtrl
	* Pokemon
		- name
		- type
		- power
		- summary
	* App
The app should allow the user to save pokemons and list them on the ui.
Also, should have and alert whenever is successfully saved on local storage
another message for errors and another for input validation
a button for deleting pokemons

use modules!!
*/

import Pokemon from './classes/Pokemon.js';
import UI from './classes/UI.js';
import StorageCtrl from './classes/StorageCtrl.js';

class App {
	static init() {
		document.addEventListener('DOMContentLoaded', StorageCtrl.displayPokemons);

		const form = document.querySelector('form');
		const pokeList = document.getElementById('pokemonList');

		form.addEventListener('submit', App.formSubmitted);
		pokeList.addEventListener('click', App.removePokemon);
	}

	static formSubmitted(evt) {
		evt.preventDefault();

		const inputName = document.getElementById('name').value;
		const inputType = document.getElementById('type').value;
		const inputPower = document.getElementById('power').value;
		const pokemon = new Pokemon(inputName, inputType, inputPower);

		if(inputName==='' || inputType==='' || inputPower==='') {
			UI.showToast('Please fill up the form', 'bg-danger');
		} else {
			UI.addPokemonToTable(pokemon);
			StorageCtrl.addPokemon(pokemon);
			UI.showToast('Pokemon Added', 'bg-success');
			UI.clearFields();
		}
	}

	static removePokemon(evt) {
		evt.preventDefault();

		if (evt.target.textContent === 'X') {
			UI.deletePokemon(evt.target);
			StorageCtrl.removePokemon(evt.target.parentElement.nextElementSibling.textContent, evt.target);
			UI.showToast('Pokemon removed', 'bg-success');
		}
	}
}

App.init();

