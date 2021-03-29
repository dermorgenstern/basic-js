const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if(value !== null)
      this.chain.push(value.toString());
    else this.chain.push ('null');

    return this;
  },

  removeLink(position) {
    if ((position <= 0)||(position > this.chain.length)) {
      this.chain = [];
      throw new Error('Cannot delete');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let modifiedEntries = this.chain.map(el => `( ${el} )`).join('~~');
    this.chain = [];
    return modifiedEntries;
  }
};

module.exports = chainMaker;
