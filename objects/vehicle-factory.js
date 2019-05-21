'use strict';

function vehicleFactory(name, wheels) {
  return {
    name,
    wheels,
    drive: () => {
      return 'Moving Forward';
    },
    stop: () => {
      return 'Stopping';
    },
  };
}

function carFactory(name, wheels = 4) {
  let car = Object.assign(vehicleFactory(name, wheels));

  return car;
}

function motorcycleFactory(name, wheels = 2) {
  let motorcycle = Object.assign(vehicleFactory(name, wheels), { wheelie });

  function wheelie() {
    return 'Wheee!';
  }

  return motorcycle;
}

module.exports = { carFactory, motorcycleFactory };
