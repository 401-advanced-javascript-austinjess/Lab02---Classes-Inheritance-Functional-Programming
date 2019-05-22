'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  unshift() {
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
  }

  shift() {
    let returnValue = this.data[0];
    delete this.data[0];
    this.length--;
    return returnValue;
  }

  forEach(callback) {
    if (callback && typeof callback === 'function') {
      for (let i = 0; i < this.length; i++) {
        callback(this.data[i], i, this);
      }
    }
  }
}

module.exports = List;
