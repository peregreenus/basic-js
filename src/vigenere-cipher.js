const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direct = direct;
  }

  encrypt(message, key, decrypting = false) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const DB = this.letters;
    const encryptMessage = [];
    const spaces = [];

    [...message].map((item, i) => /\s/g.test(item) ? spaces.push(i) : false);
    message = message.toUpperCase().replace(/\s/g, '');
    key = key.padEnd(message.length, key).toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (!/[a-z]/gi.test(message[i])) {
        encryptMessage.push(message[i]);
      } else {
        let mCharIdx = DB.indexOf(message[i]);
        let kCharIdx = DB.indexOf(key[i]);

        if (!decrypting) {
          if (mCharIdx + kCharIdx >= DB.length) {
            encryptMessage.push(DB[mCharIdx + kCharIdx - DB.length]);
          } else {
            encryptMessage.push(DB[mCharIdx + kCharIdx]);
          }
        } else {
          if (mCharIdx - kCharIdx < 0) {
            encryptMessage.push(DB[DB.length + mCharIdx - kCharIdx]);
          } else {
            encryptMessage.push(DB[mCharIdx - kCharIdx]);
          }
        }
      }
    }
    spaces.map(sIdx => encryptMessage.splice(sIdx, 0, ' '));

    return this.direct ? encryptMessage.join('') : encryptMessage.reverse().join('');
  }
  decrypt(message, key) {
    return this.encrypt(message, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine
};
