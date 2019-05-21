'use strict';

class VehicleClass {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  drive() {
    return 'Moving Forward';
  }
  stop() {
    return 'Stopping';
  }
}

class CarClass extends VehicleClass {
  constructor(name, wheels = 4) {
    super(name, wheels);
  }
}

class MotorcycleClass extends VehicleClass {
  constructor(name, wheels = 2) {
    super(name, wheels);
  }

  wheelie() {
    return 'Wheee!';
  }
}

module.exports = { CarClass, MotorcycleClass };
