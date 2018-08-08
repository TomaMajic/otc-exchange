import Web3 from 'web3';

const infura_apikey = 'Q2Il7DVs8vOaY8xerEgT';
let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	web3 = new Web3(window.web3.currentProvider);
} else {
	const provider = new Web3.providers.HttpProvider(
		'https://ropsten.infura.io/' + infura_apikey
	);

	web3 = new Web3(provider);
}

export default web3;