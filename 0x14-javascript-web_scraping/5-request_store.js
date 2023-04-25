#!/usr/bin/node

// a script for writting to a file

const request = require('request');
const fs = require('fs');
const filePath = process.argv[3];
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFile(filePath, body, err => {
    if (err) console.error(err);
  });
});
