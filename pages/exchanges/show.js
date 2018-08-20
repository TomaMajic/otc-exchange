import React from 'react';
import Layout from '../../components/Layout';
import Agent from '../../ethereum/agent';
import Token from '../../ethereum/token';
import { Button } from 'semantic-ui-react';

class ExchangeShow extends React.Component {

	static async getInitialProps(props) {
		const address = props.query.address;
		const agent = await Agent(address);
		const summary = await agent.methods.getSummary().call();
		const participants = summary["_participants"];
		const depositCount = summary["_depositCount"];
		const expirationTime = summary["_expirationTime"];
		const withdrawable = summary["_withdrawable"];
		const finalizable = summary["_finalizable"];

		const firstTokenAddr = summary["_firstToken"];
		const secondTokenAddr = summary["_secondToken"];
		console.log(firstTokenAddr)
		const firstToken = await Token(firstTokenAddr);
		const secondToken = await Token(secondTokenAddr);
		// const firstTokenName = await firstToken.methods.name().call();
		// const secondTokenName = await secondToken.methods.name().call();

		return { address, participants, depositCount, expirationTime, withdrawable, finalizable }
	}

	render() {
		return (
			<Layout>
				<h3>{this.props.address}</h3>
				<p>{this.props.participants}</p>

				<Button
					primary
				>
					Finalize
				</Button>
				<Button
					primary
				>
					Withdraw
				</Button>
			</Layout>
		)
	}
}

export default ExchangeShow;