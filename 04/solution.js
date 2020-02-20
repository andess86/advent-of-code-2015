const fs = require('fs');
const crypto = require('crypto');

const secretKey = fs.readFileSync('input.txt', 'utf-8', (input, err) => {
  if (err) {
    console.log(err);
  }
});

let iterator = 0;
const findSecretNumber = stringToMatch => {
  while (true) {
    let hash = crypto
      .createHash('md5')
      .update(secretKey + iterator)
      .digest('hex');

    if (hash.substring(0, stringToMatch.length) === stringToMatch) {
      return iterator;
      break;
    }
    iterator++;
  }
};

console.log(
  `Part 1 - The lowest positive number that, combined with the secret key, produces such a hash is:\n
  '00000': ${findSecretNumber('00000')}.
  '000000': ${findSecretNumber('000000')}.`
);
