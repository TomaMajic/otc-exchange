import web3 from './web3';
import AgentFactory from './build/contracts/AgentFactory.json';

const address = '0x08faebef03a6c9bdfe00a11163a035a5ad08b715';

const instance = new web3.eth.Contract(
	AgentFactory.abi,
	address
);

export default instance;