#!/usr/bin/node

// Write a script that reads and prints the content of a file.

const fs = require('fs');
const filePath = process.argv[2];

try {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log(data);
} catch (err) {
  console.error(err);
}
