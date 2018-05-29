const Blockchain = require('./blockchain')
const bitcoin =  new Blockchain();
const previousBlockHash = 'NDDBDHBVIBOKJOKJKNN'
const currentBlockData = [
	{
		amount: 10,
		sender :'csdacdscdscsd',
		recipient :'NCKNANOOPMLPAWJDIAMLM'
	}

];
const nounce = 100;
console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nounce));
