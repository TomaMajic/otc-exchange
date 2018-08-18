import React from 'react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import Agent from '../ethereum/agent';
import web3 from '../ethereum/web3';
import Link from 'next/link';
import { Card } from 'semantic-ui-react';

class OTCIndex extends React.Component {

	static async getInitialProps() {
		const agents = await factory.methods.getExchangeAgents().call();
		// const accounts = await web3.eth.getAccounts();
		// console.log(accounts)

		// const filteredAgents = await agents.map(async (address) => {
		// 	let agent = await Agent(address);
		// 	let participants = await agent.methods.getParticipants().call();

		// 	if(participants.indexOf(accounts[0]) > -1) {
		// 		return address;
		// 	}
		// });

		return { agents }
	}

	renderAgents() {
		const items = this.props.agents.map((agent) => {
			let link = <Link href={`/exchanges/${agent}`}><a>View Exchange</a></Link>;

			return {
				header: agent,
				description: link,
				fluid: true
			}
		});

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<div>
					{ this.renderAgents() }
				</div>
			</Layout>
		);
	}
}

export default OTCIndex;