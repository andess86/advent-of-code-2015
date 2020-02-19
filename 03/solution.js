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

const santaDirectionsArray = [];
const roboSantaDirectionsArray = [];
let santaXAxis = 0;
let santaYAxis = 0;
let roboSantaXAxis = 0;
let roboSantaYAxis = 0;

const isEven = instruction => {
  return instruction % 2 == 0;
};

for (let i = 0; i < instructions.length; i++) {
  if (isEven(i)) {
    switch (instructions[i]) {
      case '<':
        santaXAxis = santaXAxis - 1;
        santaDirectionsArray.push(`${santaXAxis} ${santaYAxis}`);
        break;
      case '>':
        santaXAxis = santaXAxis + 1;
        santaDirectionsArray.push(`${santaXAxis} ${santaYAxis}`);
        break;
      case 'v':
        santaYAxis = santaYAxis - 1;
        santaDirectionsArray.push(`${santaXAxis} ${santaYAxis}`);
        break;
      case '^':
        santaYAxis = santaYAxis + 1;
        santaDirectionsArray.push(`${santaXAxis} ${santaYAxis}`);
        break;
      default:
        break;
    }
  } else {
    switch (instructions[i]) {
      case '<':
        roboSantaXAxis = roboSantaXAxis - 1;
        roboSantaDirectionsArray.push(`${roboSantaXAxis} ${roboSantaYAxis}`);
        break;
      case '>':
        roboSantaXAxis = roboSantaXAxis + 1;
        roboSantaDirectionsArray.push(`${roboSantaXAxis} ${roboSantaYAxis}`);
        break;
      case 'v':
        roboSantaYAxis = roboSantaYAxis - 1;
        roboSantaDirectionsArray.push(`${roboSantaXAxis} ${roboSantaYAxis}`);
        break;
      case '^':
        roboSantaYAxis = roboSantaYAxis + 1;
        roboSantaDirectionsArray.push(`${roboSantaXAxis} ${roboSantaYAxis}`);
        break;
      default:
        break;
    }
  }
}
const combinedArray = santaDirectionsArray.concat(roboSantaDirectionsArray);
var uniqueAddresses = [...new Set(santaDirectionsArray)];
var uniqueAddressesSecondYear = [...new Set(combinedArray)];
console.log(`${uniqueAddresses.length} houses recieved at least one present from Santa.`);
console.log(`${uniqueAddressesSecondYear.length} houses recieved at least one present from Santa with the help of RoboSanta on year 2!`);
