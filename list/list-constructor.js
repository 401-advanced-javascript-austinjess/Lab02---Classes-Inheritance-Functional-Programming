'use strict';

function List() {
  this.length = 0;
  this.data = {};
}

List.prototype.forEach = function(callback) {
  if (callback && typeof callback === 'function') {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
};

List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  this.length--;
  return returnValue;
};

List.prototype.unshift = function() {
  const startingLength = this.length;
  const lengthIncrease = arguments.length;
  let temp = {};
  for (let i = 0; i < startingLength; i++) {
    temp[i] = this.data[i];
  }
  for (let i = 0; i < lengthIncrease; i++) {
    this.data[i] = arguments[i];
    this.length++;
  }
  for (let i = 0; i < startingLength + lengthIncrease; i++) {
    this.data[i + lengthIncrease] = temp[i];
  }
  return this.length;
};

/**
 * Add item to the end of the list
 * @param item
 **/

List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length - 1];
  delete this.data[this.length - 1];
  this.length--;
  return returnValue;
};

module.exports = List;
