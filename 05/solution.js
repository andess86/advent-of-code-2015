const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8', (input, err) => {
  if (err) {
    console.log(err);
  }
});

words = input.split('\n');

const niceStrings = [];
let niceStringsPartTwo = [];

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

const oneLetterBetween = word => {
  let foundIt = false;
  for (let i = 0; i < word.length; i++) {
    if (word.substring(i, i + 1) == word.substring(i + 2, i + 3)) {
      foundIt = true;
    }
  }
  return foundIt;
};

const twoLettersTwice = word => {
  possibleSubstrings = [];
  for (let i = 0; i < word.length; i++) {
    let candidate = word.substring(i, i + 2);
    possibleSubstrings.push(candidate);
    // console.log(candidate);
    // This if-statement is totally fucked
    // Need to fix the overlap thingy
    // console.log(candidate.substring(1,2));
    if (
      candidate.substring(1, 2) === word.substring(i + 2, i + 3) &&
      candidate.substring(1, 2) !== word.substring(i + 3, i + 4)
    ) {
      i++;
    }
  }
  // console.log(possibleSubstrings);
  let duplicates = possibleSubstrings.reduce(function(
    list,
    item,
    index,
    array
  ) {
    if (array.indexOf(item, index + 1) !== -1 && list.indexOf(item) === -1) {
      list.push(item);
    }
    return list;
  },
  []);
  return duplicates;
};
// console.log(twoLettersTwice('aaaanaaaanders'));
//Solution part 1
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

// Solution part 2
words.map(word => {
  console.log(twoLettersTwice(word));
  if (twoLettersTwice(word).length > 0 && oneLetterBetween(word)) {
    niceStringsPartTwo.push(word);
  }
});

console.log(`With the bettered model, ${niceStringsPartTwo.length} are nice.`);

// Testing!

console.log(twoLettersTwice('qjhvhtzxzqqjkmpb'));
console.log(oneLetterBetween('qjhvhtzxzqqjkmpb'));

console.log(twoLettersTwice('xxyxx'));
console.log(oneLetterBetween('xxyxx'));

console.log(twoLettersTwice('uurcxstgmygtbstg'));
console.log(oneLetterBetween('uurcxstgmygtbstg'));

console.log(twoLettersTwice('ieodomkazucvgmuy'));
console.log(oneLetterBetween('ieodomkazucvgmuy'));
