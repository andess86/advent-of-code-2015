const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8', (input, err) => {
  if (err) {
    console.log(err);
  }
});
const instructions = input.split('');

// Didn't use following function in the end, got the same result using [... new Set(array)]

// const onlyUnique = (value, index, self) => {
//   return self.indexOf(value) === index;
// }

const directionsArray = [];
let xAxis = 0;
let yAxis = 0;
for (let i = 1; i < instructions.length; i++) {
  switch (instructions[i]) {
    case '<':
      xAxis = xAxis - 1;
      directionsArray.push(`${xAxis} ${yAxis}`);
      break;
    case '>':
      xAxis = xAxis + 1;
      directionsArray.push(`${xAxis} ${yAxis}`);
      break;
    case 'v':
      yAxis = yAxis - 1;
      directionsArray.push(`${xAxis} ${yAxis}`);
      break;
    case '^':
      yAxis = yAxis + 1;
      directionsArray.push(`${xAxis} ${yAxis}`);
      break;
    default:
      break;
  }
}
var uniqueAddresses = [...new Set(directionsArray)];
console.log(`${uniqueAddresses.length} houses recieved at least one present.`);