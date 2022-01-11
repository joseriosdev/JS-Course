// compares it with '../3_Paradigms/3_OOP/0-OOP-sample.js'

class Car {
	constructor(carBrand, carColor, carYear) {
		this.brand = carBrand;
		this.color = carColor;
		this.year = carYear;	
	}
}

const mustang = new CarObject('Mustang', 'Yellow', 2020);
console.log(mustang);