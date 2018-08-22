import React from 'react';
import web3 from './web3';
import serverWeb3 from './web3-server';
import ExchangeAgent from './build/contracts/ExchangeAgent.json';

export default (address, type) => {
	let instance;

	type === 'client' ? 
		instance = new web3.eth.Contract(ExchangeAgent.abi, address) :
		instance = new serverWeb3.eth.Contract(ExchangeAgent.abi, address)

	return instance;
}