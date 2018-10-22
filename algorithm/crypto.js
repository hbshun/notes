
const crypto = require('crypto');

const secret = 'abcdef';
const hash = crypto.createHmac('sha512', secret)
  .update(secret)
  .digest('hex');

console.log(hash);
console.log(secret);


const hash2 = crypto.createHash('sha512')
  .update(secret)
  .digest('hex');
console.log(hash2);

// crypto.getCiphers().forEach(cipher => console.log(cipher));

// crypto.createCipheriv('aes-256-xts', secret, secret)

// const password = 'AAaa1234';
// const hashPassword = crypto.publicEncrypt(hash, Buffer.from(password));
// console.log(hashPassword);
function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes256', key);
  var crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes256', key);
  var decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

var data = 'Hello, this is a secret message!';
var key = 'Password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);

