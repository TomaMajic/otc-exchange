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
		tokens = [firstToken.address, secondToken.address];
		amounts = [10**6, 10**6];

		await factory.createExchangeAgent(participants, tokens, amounts, timeToExpire);
		agentAddress = (await factory.getExchangeAgents()).valueOf()[0];
		agent = await web3.eth.contract(AgentJSON.abi).at(agentAddress);
	});

	it('should mark deposit as successfull', async () => {
		let expected = 10**6 - 10**4;
		let amount = 10**4;
		let senderBalance = (await firstToken.balanceOf(accounts[0])).valueOf();
		let contractBalance = (await firstToken.balanceOf(agentAddress)).valueOf();

		await firstToken.transfer(agentAddress, amount);
		await agent.depositSuccessfull(amount, senderBalance, contractBalance, accounts[0], {from: accounts[0]});
		let depositLeft = await agent.amountLeftToDeposit(accounts[0]);

		assert.equal(depositLeft.valueOf(), expected);
	});
});