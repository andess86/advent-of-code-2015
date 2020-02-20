const fs = require('fs');
const crypto = require('crypto');

const secretKey = fs.readFileSync('input.txt', 'utf-8', (input, err) => {
  if (err) {
    console.log(err);
  }
});

let iterator = 0;

while (true) {
  let hash = crypto
    .createHash('md5')
    .update(secretKey + iterator)
    .digest('hex');

  if (hash.substring(0, 5) === '00000') {
    break;
  }
  iterator++;
}

console.log(`The lowest positive number that, combined with the secret key, produces such a hash is: ${iterator}.`);
