pragma solidity ^0.4.23;

contract ExchangeAgent {
	uint256 expirationTime;

	constructor(uint256 _timeToExpire) public {
		expirationTime = now + _timeToExpire;
	}

	// function deposit()
}
