import React from 'react';
import web3 from 'web3';
import ExchangeAgent from './build/contracts/ExchangeAgent.json';

export default (address) => {
	return new web3.eth.Contract(
		ExchangeAgent.abi,
		address
	);
}