// cryptoBerloga.js

// Function to encrypt a message using a simple substitution cipher
function encrypt(message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cipher = 'zyxwvutsrqponmlkjihgfedcba';
  
    return message
      .toLowerCase()
      .split('')
      .map(char => {
        const index = alphabet.indexOf(char);
        return index !== -1 ? cipher[index] : char;
      })
      .join('');
  }
  
  // Function to decrypt a message encrypted with the simple substitution cipher
  function decrypt(encryptedMessage) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cipher = 'zyxwvutsrqponmlkjihgfedcba';
  
    return encryptedMessage
      .toLowerCase()
      .split('')
      .map(char => {
        const index = cipher.indexOf(char);
        return index !== -1 ? alphabet[index] : char;
      })
      .join('');
  }
  
  // Exporting the encrypt and decrypt functions
  module.exports = { encrypt, decrypt };
  