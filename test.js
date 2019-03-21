
const NodeRSA = require('node-rsa');

const key = new NodeRSA({b: 512});

const text = 'Hello RSA!';
const encrypted = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);
const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);

console.log(key.exportKey());

const key2 = new NodeRSA(key.exportKey());

console.log(key2.decrypt(encrypted, 'utf8'));
