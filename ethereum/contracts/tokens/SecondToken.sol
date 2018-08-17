pragma solidity ^0.4.23;

import '../../../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import '../../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol';

contract SecondToken is StandardToken {
	string public constant name = 'SecondToken';
	string public constant symbol = 'ST';
	uint256 public constant decimals = 18;

	constructor() public {
		totalSupply_ = 50 * 10**6 * 10**decimals;
		balances[msg.sender] = totalSupply_;
	}
}