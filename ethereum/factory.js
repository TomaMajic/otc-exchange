import web3 from './web3';
import AgentFactory from './build/contracts/AgentFactory.json';

const address = '0xc02e4ab4897013fabdc60126c624e019ce14fc8a';

const instance = new web3.eth.Contract(
	AgentFactory.abi,
	address
);

export default instance;