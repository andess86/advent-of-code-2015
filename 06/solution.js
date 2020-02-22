const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8', (input, err) => {
  if (err) {
    console.log(err);
  }
});

const instructions = input.split('\n');
const cmdArray = [];

var lightGrid = [];
for (var i = 0; i < 1000; i++) {
  lightGrid[i] = new Array(1000).fill(false);
}

const getInstructions = instruction => {
  if (instruction.substring(0, 7) === 'turn on') {
    return instruction.substring(0, 7);
  } else if (instruction.substring(0, 8) === 'turn off') {
    return instruction.substring(0, 8);
  } else {
    return instruction.substring(0, 6);
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

const turnOn = (l, t, r, b) => {
  console.log(`Turning on ${l},${t} through ${r},${b}.`);
  for (let x = l; x <= r; x++) {
    for (let y = t; y <= b; y++) {
      lightGrid[x][y] = true;
    }
  }
};

const turnOff = (l, t, r, b) => {
  console.log(`Turning off ${l},${t} through ${r},${b}.`);
  for (let x = l; x <= r; x++) {
    for (let y = t; y <= b; y++) {
      lightGrid[x][y] = false;
    }
  }
};

const toggle = (l, t, r, b) => {
  console.log(`Switching state on ${l},${t} through ${r},${b}.`);
  for (let x = l; x <= r; x++) {
    for (let y = t; y <= b; y++) {
      lightGrid[x][y] = !lightGrid[x][y];
    }
  }
};

cmdArray.map(cmd => {
  switch (cmd[0]) {
    case 'turn on':
      turnOn(cmd[1], cmd[2], cmd[3], cmd[4]);
      break;
    case 'turn off':
      turnOff(cmd[1], cmd[2], cmd[3], cmd[4]);
      break;
    case 'toggle':
      toggle(cmd[1], cmd[2], cmd[3], cmd[4]);
      break;

    default:
      break;
  }
});

// Solution, part 1
let lightsOn = 0;
lightGrid.map(lightRow => {
  lightsOn = lightsOn + lightRow.filter(Boolean).length;
});

console.log(`\nAfter following the instructions, ${lightsOn} are on.`);
