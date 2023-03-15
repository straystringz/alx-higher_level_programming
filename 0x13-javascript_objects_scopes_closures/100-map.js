#!/usr/bin/node
const data = require('./100-data');

const newArray = data.map((value, index) => value * index);

console.log('Initial list:', data);
console.log('New list:', newArray);
