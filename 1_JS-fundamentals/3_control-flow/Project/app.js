/*
car object has:
- year
- car brand
- fabricant brand
- color

Write an app that allows you to store at least 5 cars

Once the car's info has been saved, create a menu that allows you to:
1. select cars by color
2. select cars by fabricant
3. select cars by year
4. exit the app

*If there aren´t any, should say so
*You need to validate at least the year data, needs to be a number and greater than 1900
*Validate that the user selects a valid option
*/

alert('Next, you will put info (name, fabricant, year and color) for 5 cars');
var cars = [];

while (cars.length !== 5) {
    var car = {};
    car.carName = prompt('Car Name');
    car.fabricantBrand = prompt('Fabricant Brand');
    car.color = prompt('Car Color');
    car.year = parseInt(prompt('Car Year'));

    while (isNaN(car.year) || car.year < 1900) {
        car.year = parseInt(prompt('Please, put a number above 1900 for the Car Year'));
    }

    cars.push(car);
}

var menuOptions = `
-- MENU --
Type any of the number options...
(1) Select cars by color
(2) Select cars by fabricant brand
(3) Select cars by year
(4) Exit the app
`;

do {
    var selectedOpt = parseInt(prompt(menuOptions));

    switch (selectedOpt) {
        case 1:
            searchColor();
            break;
        case 2:
            searchFabricant();
            break;
        case 3:
            searchYear();
            break;
        case 4:
            alert('Exiting app...');
            break;
        default:
            alert('Please, select an option between 1-4');
    }

} while (selectedOpt !== 4)

function searchColor() {
    var color = prompt('Write the color');
    var resultColor = 'Search Results \n';
    var filteredColor = [];

    for (var car of cars) {
        if (car.color === color) {
            filteredColor.push(car);
            resultColor += `
            ----------------
            ${car.carName}
            ${car.fabricantBrand}
            ${car.color}
            ${car.year}
            ----------------
            `;
        }
    }
    alert(resultColor += notFoundAny(filteredColor));
    console.log(filteredColor);
}

function searchFabricant() {
    var fabricant = prompt('Write the fabricants name');
    var resultFabricant = 'Search Results \n';
    var filteredFabricant = [];

    for (var i = 0; i < cars.length; i++) {
        if (cars[i].fabricantBrand === fabricant) {
            filteredFabricant.push(cars[i]);
            resultFabricant += `
            ----------------
            ${cars[i].carName}
            ${cars[i].fabricantBrand}
            ${cars[i].color}
            ${cars[i].year}
            ----------------
            `;
        }
    }
    alert(resultFabricant += notFoundAny(filteredFabricant));
    console.log(filteredFabricant);
}

function searchYear() {
    var year = parseInt(prompt('Write the year'));
    var resultYear = 'Search Results \n';
    var filteredYear = [];

    while (isNaN(year)) {
        year = parseInt(prompt('Please, put a number'));
    }

    for (var car in cars) {
        if (cars[car].year === year) {
            filteredYear.push(cars[car]);
            resultYear += `
            ----------------
            ${cars[car].carName}
            ${cars[car].fabricantBrand}
            ${cars[car].color}
            ${cars[car].year}
            ----------------
            `;
        }
    }
    alert(resultYear += notFoundAny(filteredYear));
    console.log(filteredYear);
}

function notFoundAny(arr) {
    if (arr.length === 0) {
        return 'Not Found Any';
    } else {
        return '♥';
    }
}