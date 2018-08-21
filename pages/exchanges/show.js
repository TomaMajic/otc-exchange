import React from 'react';
import Layout from '../../components/Layout';
import Agent from '../../ethereum/agent';
import Token from '../../ethereum/token';
import { Button, Card, Input, Form } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';

class ExchangeShow extends React.Component {
	state = {
		value: '',
		depositMade: false,
		userTokenSymbol: ''
	}

	static async getInitialProps(props) {
		const address = props.query.address;
		const agent = await Agent(address);
		const summary = await agent.methods.getSummary().call();
		const participants = summary["_participants"];
		const depositCount = summary["_depositCount"];

		const now = new Date();
		const daysLeft = Math.floor((new Date(summary["_expirationTime"] * 1000) - now) / (1000*60*60*24));
		const hoursLeft = Math.floor((((new Date(summary["_expirationTime"] * 1000) - now) / (1000*60*60*24)) - daysLeft) * 24);
		const expirationDate = `${daysLeft} days & ${hoursLeft} hours`;

		const withdrawable = summary["_withdrawable"];
		const finalizable = summary["_finalizable"];

		const firstTokenAddr = summary["_firstToken"];
		const secondTokenAddr = summary["_secondToken"];
		const tokenAddresses = [firstTokenAddr, secondTokenAddr];

		const firstToken = await Token(firstTokenAddr);
		const secondToken = await Token(secondTokenAddr);
		const firstTokenName = await firstToken.methods.name().call();
		const secondTokenName = await secondToken.methods.name().call();
		const tokens = [firstTokenName, secondTokenName];

		return { address, participants, depositCount, expirationDate, withdrawable, finalizable, tokens, tokenAddresses }
	}

	async componentDidMount() {
		const accounts = await web3.eth.getAccounts();
		const agent = await Agent(this.props.address);
		const token = await Token(this.props.tokenAddresses[this.props.participants.indexOf(accounts[0])]);

		const userTokenSymbol = await token.methods.symbol().call();
		const balance = await agent.methods.balances(accounts[0]).call();
		let depositMade = false;

		if(balance !== 0) {
			depositMade = true;
		}

		this.setState({ depositMade, userTokenSymbol })
	}

	onSubmit = async (event) => {
		event.preventDefault();

		
	}

	renderParticipants() {
		const items = this.props.participants.map((participant, index) => {
			return {
				header: participant,
				meta: this.props.tokens[index],
				fluid: true
			}
		});

		return <Card.Group itemsPerRow={2} items={items} />
	}

	render() {
		return (
			<Layout>
				<h3>{this.props.address}</h3>
				<h4>Time to finalize: {this.props.expirationDate}</h4>

				<hr/>
				<Form onSubmit={this.onSubmit}>
					<Form.Field style={{width: '20%'}}>
						<label>Enter amount: </label>
						<Input
							value={this.state.value}
							label={this.state.userTokenSymbol}
							labelPosition='right'
							onChange={(event) => { this.setState({value: event.target.value}) }}
						/>
					</Form.Field>

					<Button
						style={{marginTop: '5px', marginBottom: '15px'}}
						primary={this.state.depositMade}
						active={!this.state.depositMade}
					>
						Deposit
					</Button>
				</Form>
				<hr/>

				<div style={{marginTop: '24px'}}>{this.renderParticipants()}</div>
				<p style={{marginTop: '10px'}}>Deposit count: {this.props.depositCount}</p>

				<Button
					primary={this.props.depositCount === 2}
					active={this.props.depositCount !== 2}
				>
					Finalize
				</Button>
				<Button
					primary={this.props.withdrawable}
					active={!this.props.withdrawable}
				>
					Withdraw
				</Button>
			</Layout>
		)
	}
}

export default ExchangeShow;