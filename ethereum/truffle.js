const HDWalletProvider = require("truffle-hdwallet-provider");
const infura_apikey = 'Q2Il7DVs8vOaY8xerEgT';
const mnemonic = 'party weird draw glad bulk bottom skull odor sock chimney bless glue';
 
module.exports = {
	networks: {

		development: {
			host: "localhost",
			port: 9545,
			network_id: "*" // Match any network id
		},

		ropsten: {
			provider: () =>
				new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/' + infura_apikey),
			network_id: '3',
			gas: 4600000,
			gasPrice: 22000000000
		}
	}
}