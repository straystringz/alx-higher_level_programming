#!/usr/bin/node

// a code to print the status code of a GET request

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }
  const data = JSON.parse(body);
  let count = 0;
  for (const result of data.results) {
    count += result.characters.filter(char => char.includes('18')).length;
  }
  console.log(count);
});
