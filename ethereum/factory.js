import web3 from './web3';
import AgentFactory from './build/contracts/AgentFactory.json';

const abi = AgentFactory.abi;
const address = '0x067de8a0bcc3c3c5520dc17bb1f0726d985305cc';

const instance = new web3.eth.Contract(
	abi,
	address
);

export default instance;