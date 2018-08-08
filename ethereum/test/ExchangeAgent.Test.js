const AgentFactory = artifacts.require('./AgentFactory.sol');
const ExchangeAgent = artifacts.require('./ExchangeAgent.sol');
const FirstToken = artifacts.require('./FirstToken.sol');
const SecondToken = artifacts.require('./SecondToken.sol');
const AgentJSON = require('../build/contracts/ExchangeAgent.json');

contract('ExchangeAgent', async (accounts) => {
	let factory;
	let agentAddress;
	let agent;
	let firstToken;
	let secondToken;
	let participants = [accounts[0], accounts[1]];
	let timeToExpire = 10 ** 18;

	beforeEach('initialize contracts', async () => {
		factory = await AgentFactory.new();
		firstToken = await FirstToken.new();
		secondToken = await SecondToken.new({from: accounts[1]});

		await factory.createExchangeAgent(participants, timeToExpire);
		agentAddress = (await factory.getExchangeAgents()).valueOf()[0];
		agent = await web3.eth.contract(AgentJSON.abi).at(agentAddress);
	});

	// it('should mark deposit as successfull', async () => {
	// 	let expected = 1;
	// 	let amount = 10**6;
	// 	let senderBalance = (await firstToken.balanceOf(accounts[0])).valueOf();
	// 	let contractBalance = (await firstToken.balanceOf(agentAddress)).valueOf();

	// 	await firstToken.transfer(agentAddress, amount);
	// 	await agent.depositSuccessfull(amount, senderBalance, contractBalance, firstToken.address, accounts[0]);

	// 	let depositCount = await agent.depositCount();

	// 	assert.equal(depositCount.valueOf(), expected);
	// });


});