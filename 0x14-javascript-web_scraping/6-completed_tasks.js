#!/usr/bin/node

// a script to count items from an API call

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }
  const tasks = JSON.parse(body);
  const dict = {};
  for (const task of tasks) {
    if (!dict[task.userId]) {
      dict[task.userId] = 0;
    }
    if (task.completed) {
      dict[task.userId] += 1;
    }
  }
  console.log(dict);
});
