import React from 'react';
import web3 from './web3';
import serverWeb3 from './web3-server';
import Token from './build/contracts/FirstToken.json';

export default (address, type) => {
	let instance;

	type === 'client' ? 
		instance = new web3.eth.Contract(Token.abi, address) :
		instance = new serverWeb3.eth.Contract(Token.abi, address)

	return instance;
}