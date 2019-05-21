'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const altima = new VehicleClass.CarClass('Altima');
console.log(altima.name, altima.drive(), altima.stop());

const bmw = new VehicleClass.MotorcycleClass('BMW');
console.log(bmw.name, bmw.wheelie(), bmw.stop());

// Implement a car and motorcycle using a Factory
