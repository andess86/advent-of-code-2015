const fs = require('fs');

const text = fs.readFileSync('input.txt', 'utf-8', (text, err) => {
  if (err) {
    console.log(err);
  }
});

const arrayOfSteps = text.split('');
let floor = 0;
let reachedBasement = 'false';

for (let i = 0; i < arrayOfSteps.length; i++) {
  arrayOfSteps[i] === '(' ? (floor = floor + 1) : (floor = floor - 1);
  if (floor === -1 && reachedBasement === 'false') {
    reachedBasement = 'true';
    console.log(
      `The position of the instructions when Santa first enters the basement is ${i + 1}`
    );
  }
}
console.log(`The instructions take Santa to the ${floor}th floor.`);
