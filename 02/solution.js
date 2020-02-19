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

const calculateRequiredRibbon = (length, width, height) => {
  const sorted = [length, width, height].sort((a, b) => a - b);
  return (2 * sorted[0]) + (2 * sorted[1]) + (sorted[0] * sorted[1] * sorted[2]);
};

const calculateRequiredWrappingPaper = (length, width , height) => {
  const x = 2 * (parseInt(length) * parseInt(width));
  const y = 2 * (parseInt(width) * parseInt(height));
  const z = 2 * (parseInt(height) * parseInt(length));
  return x + y + z + Math.min(x, y, z) / 2;
}

for (let i = 0; i < arrayOfBoxes.length; i++) {
  arrayOfBoxesDimensions.push(arrayOfBoxes[i].split('x'));
}

for (let i = 0; i < arrayOfBoxesDimensions.length; i++) {
  const totalInchesForThisBox = calculateRequiredWrappingPaper(arrayOfBoxesDimensions[i][0], arrayOfBoxesDimensions[i][1], arrayOfBoxesDimensions[i][2]);
  totalInchesOfPresentPaper = totalInchesOfPresentPaper + totalInchesForThisBox;
  totalRibbonLengthRequired = totalRibbonLengthRequired + calculateRequiredRibbon(
      arrayOfBoxesDimensions[i][0],
      arrayOfBoxesDimensions[i][1],
      arrayOfBoxesDimensions[i][2]
    );
}

console.log(`I suggest the elves order a total of ${totalInchesOfPresentPaper} square feet of wrapping paper.`);
console.log(`They should also order a total of ${totalRibbonLengthRequired} feet of ribbon`);
