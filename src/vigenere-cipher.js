const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(decriptDirection = true){
    
  }
  
  encrypt(message, key) {

    let encodingMap = {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy"
      };
    
    if(!message||!key) throw new Error('Not implemented');

    let keyLC = key.toLowerCase();
    let toEncode = message.toLowerCase();
    let encryptedMessage = '';
    let skippedLetter = 0;

    for (let i = 0; i < toEncode.length; i++) {
      let keyPos = (i - skippedLetter) % keyLC.length;
      let encKeyPos = encodingMap.a.indexOf(keyLC[keyPos]);

      if (encodingMap[toEncode[i]]) {
        encryptedMessage += encodingMap[toEncode[i]][encKeyPos];
      } else {
        encryptedMessage += toEncode[i];
        skippedLetter++;
      }
    }
    return encryptedMessage.toUpperCase();

  } 

  decrypt(encryptedMessage, key ) {

    let decodingMap = {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy"
    };

    if (!encryptedMessage || !key) throw new Error('Not implemented');

    let keyLC = key.toLowerCase();
    let encoded = encryptedMessage.toLowerCase();

    let decryptedMessage = "";
    let skippedLetters = 0;

    for (let i = 0; i < encoded.length; i++) {

      let encKeyPos = (i - skippedLetters) % keyLC.length;
      let shiftedString = decodingMap[keyLC[encKeyPos]];

      if (shiftedString.indexOf(encoded[i]) !== -1) {
        decryptedMessage += decodingMap.a[shiftedString.indexOf(encoded[i])];
      } else {
        decryptedMessage += encoded[i];
        skippedLetters++;
      }
    }

    return decryptedMessage.toUpperCase();

  }
}

module.exports = VigenereCipheringMachine;