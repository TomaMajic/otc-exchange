import web3 from './web3';
import AgentFactory from './build/contracts/AgentFactory.json';

const address = '0x44fd77898954aa3f75f8c6391c7d42c2786c3e51';

const instance = new web3.eth.Contract(
	AgentFactory.abi,
	address
);

export default instance;