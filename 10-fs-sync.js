const { readFileSync, writeFileSync } = require('fs');

let first = readFileSync('./content/subfolder/first.txt', 'utf8');
let second = readFileSync('./content/subfolder/second.txt', 'utf8');

console.log(`${first}, ${second}`);

writeFileSync(
  './content/subfolder/result-sync.txt', 
  `\nThe result is ${first} , ${second}`,
  { flag: 'a' }
);