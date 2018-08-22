import web3 from './web3';
import AgentFactory from './build/contracts/AgentFactory.json';

const address = '0xcab1b8fcafaa98138930365cd91053af7b7c5b40';

const instance = new web3.eth.Contract(
	AgentFactory.abi,
	address
);

export default instance;