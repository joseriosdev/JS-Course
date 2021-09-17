// var sum = 5 + 6;
// var rest = 2 - 9;
// var multiplication = 1 * 10;
// var division = 50 / 5;
// var mod = 11 % 5;

// console.log(sum);
// console.log(rest);
// console.log(multiplication);
// console.log(division);
// console.log(mod);

class Persona {
	constructor(nuevoNombre, nuevaEdad) {
		this.nombre = nuevoNombre;
		this.edad = nuevaEdad;
	}

	comer() {
		console.log('estoy comiendo');
	}

	getNombre() {
		return this.nombre;
	}

	setNombre(name) {
		this.nombre = name;
	}
}