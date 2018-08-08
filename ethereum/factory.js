import web3 from './web3';
import AgentFactory from './build/contracts/AgentFactory.json';

const abi = AgentFactory.abi;
const address = 'address';

const instance = new web3.eth.Contract(
	abi,
	address
);

export default instance;