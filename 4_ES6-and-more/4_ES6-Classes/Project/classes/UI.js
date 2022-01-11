export default class UI {
	static addPokemonToTable(pokemon) {
		const list = document.getElementById('pokemonList');
		const row = document.createElement('tr');
	
		row.innerHTML = `
			<td><a href="#" class="text-danger text-decoration-none fw-bold deleteX">X</a></td>
			<td>${pokemon.id}</td>
			<td>${pokemon.name}</td>
			<td>${pokemon.type}</td>
			<td>${pokemon.power}</td>
			<td>${pokemon.summary}</td>
		`;
		list.appendChild(row);
	}
  
	static showToast(message, className) {
		const toast = document.getElementById('toast');
		const classList = [className, 'd-block', 'p-2'];

		toast.classList.add(...classList);
		toast.textContent = message;
	
		setTimeout(() => {
			toast.classList.remove(...classList);
			toast.textContent = '';
		}, 3000);
	}
  
	static deletePokemon(target) {
		if (target.classList.contains('deleteX'))
			target.parentElement.parentElement.remove();
	}
  
	static clearFields() {
		document.getElementById('name').value = '';
		document.getElementById('type').value = '';
		document.getElementById('power').value = '';
	}
}