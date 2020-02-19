const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8', (input, err) => {
  if (err) {
    console.log(err);
  }
});

const arrayOfBoxes = input.split('\n');
let arrayOfBoxesDimensions = [];

for (let i = 0; i < arrayOfBoxes.length; i++) {
  arrayOfBoxesDimensions.push(arrayOfBoxes[i].split('x'));
}
let totalInchesOfPresentPaper = 0;
for (let i = 0; i < arrayOfBoxesDimensions.length; i++) {
  const val1 = 2 * (parseInt(arrayOfBoxesDimensions[i][0]) * parseInt(arrayOfBoxesDimensions[i][1]));
  const val2 = 2 * (parseInt(arrayOfBoxesDimensions[i][1]) * parseInt(arrayOfBoxesDimensions[i][2]));
  const val3 = 2 * (parseInt(arrayOfBoxesDimensions[i][2]) * parseInt(arrayOfBoxesDimensions[i][0]));
  const totalInchesForThisBox = val1 + val2 + val3 + (Math.min(val1, val2, val3) / 2);
  totalInchesOfPresentPaper = totalInchesOfPresentPaper + totalInchesForThisBox;
}

console.log(`I suggest the elves order a total of ${totalInchesIfPresentPaper} square feet of wrapping paper.`);
