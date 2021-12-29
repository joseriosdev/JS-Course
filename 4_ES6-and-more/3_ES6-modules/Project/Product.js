function Product(name, price, stock) {
	this.name = name;
	this.price = price;
	this.stock = stock;

	this.productStatus = function() {
		console.log(`The product ${this.name} has a price of ${this.price} with a stock of ${this.stock}`);
	}
}

Product.prototype.getName = function() {
	return this.name;
}

Product.prototype.getPrice = function() {
	return this.price;
}

Product.prototype.getStock = function() {
	return this.stock;
}

Product.prototype.setName = function(name) {
	this.name = name;
	return this.name;
}

Product.prototype.setPrice = function(price) {
	this.price = price;
	return this.price;
}

Product.prototype.setStock = function(stock) {
	this.stock = stock;
	return this.stock;
}

export default Product;