const Blockchain = require('./blockchain')
const bitcoin =  new Blockchain();
bitcoin.createNewBlock(2389,'IDIHFPBSNASJLFB','4C8D4C6DCFEW8');
bitcoin.createNewBlock(2312,'IDIHFPBSNASJLFB','4C8D4C6DCFEW8');
bitcoin.createNewBlock(1234,'IDIHFPBSNASJLFB','4C8D4C6DCFEW8');
console.log(bitcoin);