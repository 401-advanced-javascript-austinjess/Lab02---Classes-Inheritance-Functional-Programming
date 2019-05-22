'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {
  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('removes items from the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.pop();
    console.log(stuff);
    expect(stuff.length).toEqual(1);
  });

  it('returns the deleted value when pop is ran', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.pop()).toEqual('b');
  });

  it('removes item from the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.shift()).toEqual('a');
    expect(stuff.length).toBe(1);
  });

  it('unshift method returns new length', () => {
    let stuff = new List();
    stuff.push('a');
    expect(stuff.unshift('z', 'x', 'y')).toBe(stuff.length);
  });

  // it('items can be added to the beginning of the array', () => {
  //   let stuff = new List();
  //   stuff.push('a');
  //   stuff.push('b');
  //   stuff.push('c');
  //   console.log('this is stuff: ' + stuff.data[0] + stuff.data[1]);
  //   stuff.unshift('z', 'x', 'y');
  //   expect(stuff.data).toBe({
  //     '0': 'z',
  //     '1': 'x',
  //     '2': 'y',
  //     '3': 'a',
  //     '4': 'b',
  //     '5': 'c',
  //   });
  // });
});
