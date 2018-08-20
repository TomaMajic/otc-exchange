import React from 'react';
import web3 from './web3';
import Token from './build/contracts/FirstToken.json';

export default (address) => {
	return new web3.eth.Contract(
		Token.abi,
		address
	);
}