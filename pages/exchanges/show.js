import React from 'react';
import Layout from '../../components/Layout';
import Agent from '../../ethereum/agent';
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

		return { address, participants, depositCount, expirationTime, withdrawable, finalizable }
	}

	render() {
		return (
			<Layout>
				<h3>{this.props.address}</h3>
				<p>{this.props.participants}</p>
				<p>{this.props.depositCount}</p>
				<p>{this.props.expirationTime}</p>

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