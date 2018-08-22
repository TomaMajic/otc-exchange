import web3 from './web3';
import AgentFactory from './build/contracts/AgentFactory.json';

const address = '0x8cf83f3b64f7e68460b22e2c6162e9e609764239';

const instance = new web3.eth.Contract(
	AgentFactory.abi,
	address
);

export default instance;