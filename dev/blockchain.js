const sha256 = require('sha256');

function Blockchain() {
	this.chain = [];
	this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nounce, previousBlockHash, hash) {
	const newBlock = { //Use of Constant to make immutable blocks , entries will never be changed
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions : this.pendingTransactions,
		nounce: nounce,//Comes from Proof of Work, Verify legitimacy of the block
		hash : hash,
		previousBlockHash : previousBlockHash
	};//Object Declare using name:value pairs

	this.pendingTransactions = [];
	this.chain.push(newBlock);

	return newBlock; 

}

Blockchain.prototype.getLastBlock = function() {
	return this.chain[this.chain.length - 1];
}



Blockchain.prototype.createNewTransaction = function(amount,sender,recipient) {
	const newTransaction = {
		amount: amount,
		sender: sender,
		recipient: recipient
	};
	this.pendingTransactions.push(newTransaction)
}

Blockchain.prototype.hashBlock = function(previousBlockHash,currentBlockData,nounce) {
	const dataAsString = previousBlockHash + nounce.toString() + JSON.stringify(currentBlockData);
	const hash = sha256(dataAsString);
	return hash;
}

module.exports = Blockchain;