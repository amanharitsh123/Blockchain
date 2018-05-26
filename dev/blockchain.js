function Blockchain() {
	this.chain = [];
	this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nounce, previousBlockHash, hash) {
	const newBlock = {
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

Blockchain.prorotype.getLastBlock = function() {
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

module.exports = Blockchain;