import web3 from './web3';
import AgentFactory from './build/contracts/AgentFactory.json';

const address = '0x28a0c3101035c45aa66acceb07d33e77ef53143f';

const instance = new web3.eth.Contract(
	AgentFactory.abi,
	address
);

export default instance;