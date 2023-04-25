#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request.get(url, (error, res, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  for (const character of data.characters) {
    request.get(character, (error, res, body) => {
      if (error) {
        console.error(error);
        return;
      }
      const characterData = JSON.parse(body);
      console.log(characterData.name);
    });
  }
});
