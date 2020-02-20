const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8', (input, err) => {
  if (err) {
    console.log(err);
  }
});

words = input.split('\n');
const niceStrings = [];

const foundThreeVowels = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let numberOfVowels = 0;
  vowels.map(vowel => {
    for (let i = 0; i < word.length; i++) {
      if (vowel === word.substring(i, i + 1)) {
        numberOfVowels++;
      }
    }
  });
  const foundThreeVowels = numberOfVowels >= 3 ? true : false;
  return foundThreeVowels;
};

const twiceInARow = word => {
  for (let i = 0; i < word.length; i++) {
    if (word.substring(i, i + 1) === word.substring(i + 1, i + 2)) {
      return true;
    }
  }
  return false;
};

const foundForbiddenSubstring = word => {
  const forbiddenStrings = ['ab', 'cd', 'pq', 'xy'];
  let foundForbidden = false;
  forbiddenStrings.map(forbidden => {
    for (let i = 0; i < word.length; i++) {
      if (forbidden === word.substring(i, i + 2)) {
        foundForbidden = true;
      }
    }
  });
  return foundForbidden;
};

words.map(word => {
  if (
    !foundForbiddenSubstring(word) &&
    twiceInARow(word) &&
    foundThreeVowels(word)
  ) {
    niceStrings.push(word);
  }
});

console.log(`${niceStrings.length} strings are nice.`);
