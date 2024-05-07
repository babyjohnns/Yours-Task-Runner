```
# Crypto Berloga

Crypto Berloga is a simple JavaScript package that provides functions for encrypting and decrypting messages using a simple substitution cipher.

## Installation

You can install Crypto Berloga via npm:

```bash
npm install crypto-berloga
```

## Usage

```javascript
const { encrypt, decrypt } = require('crypto-berloga');

// Encrypt a message
const encryptedMessage = encrypt('hello');

// Decrypt the encrypted message
const decryptedMessage = decrypt(encryptedMessage);

console.log('Encrypted message:', encryptedMessage);
console.log('Decrypted message:', decryptedMessage);
```

## API

### `encrypt(message: string): string`

Encrypts a message using a simple substitution cipher.

- `message`: The message to encrypt.

### `decrypt(encryptedMessage: string): string`

Decrypts an encrypted message encrypted with the simple substitution cipher.

- `encryptedMessage`: The encrypted message to decrypt.

## Example

```javascript
const { encrypt, decrypt } = require('crypto-berloga');

const originalMessage = 'hello world';

// Encrypt the message
const encryptedMessage = encrypt(originalMessage);

// Decrypt the encrypted message
const decryptedMessage = decrypt(encryptedMessage);

console.log('Original message:', originalMessage);
console.log('Encrypted message:', encryptedMessage);
console.log('Decrypted message:', decryptedMessage);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
