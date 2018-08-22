import Web3 from 'web3';

const HDWalletProvider = require('truffle-hdwallet-provider');
const infura_apikey = 'Q2Il7DVs8vOaY8xerEgT';
const mnemonic = 'party weird draw glad bulk bottom skull odor sock chimney bless glue';

const provider = new HDWalletProvider(
	mnemonic,
	'https://ropsten.infura.io/' + infura_apikey
);

export default new Web3(provider);