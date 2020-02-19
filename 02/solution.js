const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8', (input, err) => {
  if (err) {
    console.log(err);
  }
});

let totalInchesOfPresentPaper = 0;
let totalRibbonLengthRequired = 0;

const arrayOfBoxes = input.split('\n');
let arrayOfBoxesDimensions = [];

const calculateRequiredRibbon = (x, y, z) => {
  const sorted = [x, y, z].sort((a, b) => a - b);
  return (2 * sorted[0]) + (2 * sorted[1]) + (sorted[0] * sorted[1] * sorted[2]);
};

for (let i = 0; i < arrayOfBoxes.length; i++) {
  arrayOfBoxesDimensions.push(arrayOfBoxes[i].split('x'));
}

for (let i = 0; i < arrayOfBoxesDimensions.length; i++) {
  const val1 = 2 * (parseInt(arrayOfBoxesDimensions[i][0]) * parseInt(arrayOfBoxesDimensions[i][1]));
  const val2 = 2 * (parseInt(arrayOfBoxesDimensions[i][1]) * parseInt(arrayOfBoxesDimensions[i][2]));
  const val3 = 2 * (parseInt(arrayOfBoxesDimensions[i][2]) * parseInt(arrayOfBoxesDimensions[i][0]));
  const totalInchesForThisBox = val1 + val2 + val3 + Math.min(val1, val2, val3) / 2;
  totalInchesOfPresentPaper = totalInchesOfPresentPaper + totalInchesForThisBox;
  totalRibbonLengthRequired = totalRibbonLengthRequired + calculateRequiredRibbon(
      arrayOfBoxesDimensions[i][0],
      arrayOfBoxesDimensions[i][1],
      arrayOfBoxesDimensions[i][2]
    );
}

console.log(`I suggest the elves order a total of ${totalInchesOfPresentPaper} square feet of wrapping paper.`);
console.log(`They should also order a total of ${totalRibbonLengthRequired} feet of ribbon`);
