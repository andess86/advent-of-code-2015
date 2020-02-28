const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8', (input, err) => {
  if (err) {
    console.log(err);
  }
});

const rows = input.split('\n');

const commands = rows.map(row => {
  const [command, destination] = row.split(' -> ');
  return { command: command.trim(), destination: destination.trim() };
});

//  ¯\_(ツ)_/¯

console.log(commands);
