import React from 'react';
import { Button, Card, Input, Form } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Agent from '../../ethereum/agent';
import Token from '../../ethereum/token';
import { Router } from '../../routes';
import web3 from '../../ethereum/web3';
import serverWeb3 from '../../ethereum/web3-server';


class ExchangeShow extends React.Component {
	state = {
		value: '',
		depositMade: false,
		userTokenSymbol: '',
		depositLoading: false,
		finalizeLoading: false,
		withdrawLoading: false
	}

	static async getInitialProps(props) {
		const address = props.query.address;
		const agent = await Agent(address);
		const summary = await agent.methods.getSummary().call();
		const participants = summary["_participants"];
		const depositCount = parseInt(summary["_depositCount"]);

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
		const agent = await Agent(this.props.address, 'client');
		const token = await Token(this.props.tokenAddresses[this.props.participants.indexOf(accounts[0])], 'client');

		const userTokenSymbol = await token.methods.symbol().call();
		const balance = parseInt(await agent.methods.balances(accounts[0]).call());
		let depositMade = false;
		
		if(balance !== 0) {
			depositMade = true;
		}

		this.setState({ depositMade, userTokenSymbol })
	}

	onSubmit = async (event) => {
		event.preventDefault();

		const participants = this.props.participants;
		const accounts = await web3.eth.getAccounts();
		const agent = await Agent(this.props.address, 'server');
		const token = await Token(this.props.tokenAddresses[participants.indexOf(accounts[0])], 'client');

		const senderBalance = await token.methods.balanceOf(accounts[0]).call();
		const contractBalance = await token.methods.balanceOf(this.props.address).call();
		const serverAccounts = await serverWeb3.eth.getAccounts();

		const decimals = await web3.utils.toBN(18);
		const multiplier = await web3.utils.toBN(10).pow(decimals);
		const amount = await web3.utils.toBN(this.state.value);
		const value = amount * multiplier;

		this.setState({ depositLoading: true });

		try {
			await token.methods
				.transfer(this.props.address, value)
				.send({
					from: accounts[0]
				});

			try {
				await agent.methods
					.depositSuccessfull(value,
										senderBalance,
										contractBalance,
										accounts[0])
					.send({
						from: serverAccounts[0]
					});
			} catch(err) {
				console.log(err);
			}

			Router.pushRoute(`/exchanges/${this.props.address}`);
		} catch(err) {
			console.log(err);
		}

		this.setState({ depositLoading: false, value: '' });
	}

	handleClick = async (event) => {
		const elementId = event.target.id;
		event.preventDefault();

		const accounts = await web3.eth.getAccounts();
		const agent = await Agent(this.props.address, 'client');

		if(elementId === 'finalize') {
			this.setState({ finalizeLoading: true });
			this.finalize(accounts[0], agent);
			this.setState({ withdrawLoading: false });
		} else {
			this.setState({ finalizeLoading: true });
			this.withdraw(accounts[0], agent);
			this.setState({ withdrawLoading: false });
		}
	}

	async finalize(account, agent) {
		try {
			await agent.methods
				.finalizeExchange()
				.send({
					from: account
				});

			Router.pushRoute(`/exchanges/${this.props.address}`);
		} catch(err) {
			console.log(err);
		}
	}

	async withdraw(account, agent) {
		try {
			await agent.methods
				.withdraw()
				.send({
					from: account
				});

			Router.pushRoute(`/exchanges/${this.props.address}`);
		} catch(err) {
			console.log(err);
		}
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
		console.log(this.props.finalizable)
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
						primary={!this.state.depositMade}
						disabled={this.state.depositMade}
						loading={this.state.depositLoading}
					>
						Deposit
					</Button>
				</Form>
				<hr/>

				<div style={{marginTop: '24px'}}>{this.renderParticipants()}</div>
				<h4 style={{marginTop: '10px'}}>Deposit count: {this.props.depositCount}</h4>

				<Button
					id='finalize'
					primary={this.props.depositCount === 2}
					disabled={this.props.depositCount !== 2 || !this.props.finalizable}
					onClick={this.handleClick}
					loading={this.state.finalizeLoading}
				>
					Finalize
				</Button>
				<Button
					id='withdraw'
					primary={this.props.withdrawable}
					disabled={!this.props.withdrawable}
					onClick={this.handleClick}
					loading={this.state.withdrawLoading}
				>
					Withdraw
				</Button>
			</Layout>
		)
	}
}

export default ExchangeShow;