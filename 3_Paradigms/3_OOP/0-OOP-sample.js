function CarObject(carBrand, carColor, carYear) {
	this.brand = carBrand;
	this.color = carColor;
	this.year = carYear;
}

var mustang = new CarObject('Mustang', 'Yellow', 2020);
console.log(mustang);