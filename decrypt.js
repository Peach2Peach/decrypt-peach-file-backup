const CryptoJS = require('react-native-crypto-js');

const decrypt = (encryptedText, password) => {
  const bytes = CryptoJS.AES.decrypt(encryptedText, password);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const str = process.argv[2];
const password = process.argv[3];

if (!str || !password) {
  console.error('Usage: node decrypt.js <fileContent> <password>');
  process.exit(1);
}

const decyptedText = decrypt(str, password);
const content = JSON.parse(decyptedText);

console.log(`\nMnemonic:\n${content.mnemonic}\n`);
console.log(`PGP Private Key:\n${content.pgp.privateKey}\n`);
console.log(`PGP Public Key:\n${content.pgp.publicKey}`);
