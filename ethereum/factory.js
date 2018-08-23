import web3 from './web3';
import AgentFactory from './build/contracts/AgentFactory.json';

const address = '0xf8ad0ef49e3fc6d3eb83ea42aee0cb026fcf1011';

const instance = new web3.eth.Contract(
	AgentFactory.abi,
	address
);

export default instance;