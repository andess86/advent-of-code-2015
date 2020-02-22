const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8', (input, err) => {
  if (err) {
    console.log(err);
  }
});

const instructions = input.split('\n');
const cmdArray = [];

const getInstructions = text => {
  if (text.substring(0, 7) === 'turn on') {
    return text.substring(0, 7);
  } else if (text.substring(0, 8) === 'turn off') {
    return text.substring(0, 8);
  } else {
    return text.substring(0, 6);
  }
};

// Massage data
for (let i = 0; i < instructions.length; i++) {
  let instruction = getInstructions(instructions[i]);
  let numbers = instructions[i].match(/\d+,\d+/g);
  const leftTop = numbers[0].split(',');
  const rightBottom = numbers[1].split(',');
  cmdArray.push([
    instruction,
    parseInt(leftTop[0]),
    parseInt(leftTop[1]),
    parseInt(rightBottom[0]),
    parseInt(rightBottom[1])
  ]);
}

console.table(cmdArray);
