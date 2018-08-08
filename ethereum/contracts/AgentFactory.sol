pragma solidity ^0.4.23;

import './ExchangeAgent.sol';

contract AgentFactory {
	address[] agents;

	function createExchangeAgent(address[] _participants,
								 uint256 _timeToExpire) 
	external {
		address agent = new ExchangeAgent(_participants, _timeToExpire);
		agents.push(agent);
	}

	function getExchangeAgents() external view returns(address[]) {
		return agents;
	}
}
