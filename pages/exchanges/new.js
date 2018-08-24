import React from 'react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import { Button, Input, Form } from 'semantic-ui-react';
import { Router } from '../../routes';
import web3 from '../../ethereum/web3';

class ExchangesNew extends React.Component {
	state = {
		firstUserAddr: '',
		secondUserAddr: '',
		firstTokenAddr: '',
		secondTokenAddr: '',
		firstUserDeposit: '',
		secondUserDeposit: '',
		duration: '', 
		loading: false
	}

	onSubmit = async (event) => {
		event.preventDefault();

		const accounts = await web3.eth.getAccounts();
		const participants = [this.state.firstUserAddr, this.state.secondUserAddr];
		const tokens = [this.state.firstTokenAddr, this.state.secondTokenAddr];
		const firstUserDep = await this.formatValue(this.state.firstUserDeposit);
		const secondUserDep = await this.formatValue(this.state.secondUserDeposit);
		const plannedDeposits = [firstUserDep, secondUserDep];
		const duration = this.state.duration * 24 * 60 * 60;
		
		this.setState({ loading: true });

		try {
			await factory.methods
				.createExchangeAgent(participants,
									 tokens,
									 plannedDeposits,
									 duration)
				.send({
					from: accounts[0]
				});

			Router.pushRoute('/');
		} catch(err) {
			console.log(err);
		}

		this.setState({ loading: false });
	}	

	async formatValue(val) {
		const decimals = await web3.utils.toBN(18);
		const multiplier = await web3.utils.toBN(10).pow(decimals);
		const amount = await web3.utils.toBN(val);

		return amount * multiplier;
	}

	render() {
		return (
			<Layout>
				<h3>Create a new exchange</h3>

				<Form onSubmit={this.onSubmit}>
					<Form.Field style={{width: '35%'}}>
						<label>Participants:</label>
						<Input
							value={this.state.firstUserAddr} 
							style={{marginTop: '8px'}}
							placeholder='Your address..'
							onChange={(event) => { this.setState({ firstUserAddr: event.target.value }) }}
						/>
						<Input
							value={this.state.secondUserAddr} 
							style={{marginTop: '8px'}}
							placeholder='Other participant address..'
							onChange={(event) => { this.setState({ secondUserAddr: event.target.value }) }}
						/>
					</Form.Field>

					<Form.Field style={{width: '35%'}}>
						<label>Tokens to exchange:</label>
						<Input
							value={this.state.firstTokenAddr} 
							style={{marginTop: '8px'}}
							placeholder='Your token address..'
							onChange={(event) => { this.setState({ firstTokenAddr: event.target.value }) }}
						/>
						<Input
							value={this.state.secondTokenAddr} 
							style={{marginTop: '8px'}}
							placeholder='Other party token address..'
							onChange={(event) => { this.setState({ secondTokenAddr: event.target.value }) }}
						/>
					</Form.Field>

					<Form.Field style={{width: '35%'}}>
						<label>Amounts to exchange:</label>
						<Input
							value={this.state.firstUserDeposit} 
							style={{marginTop: '8px'}}
							placeholder='Your amount..'
							onChange={(event) => { this.setState({ firstUserDeposit: event.target.value }) }}
						/>
						<Input
							value={this.state.secondUserDeposit} 
							style={{marginTop: '8px'}}
							placeholder='Other party amount..'
							onChange={(event) => { this.setState({ secondUserDeposit: event.target.value }) }}
						/>
					</Form.Field>

					<Form.Field style={{width: '35%'}}>
						<label>Duration:</label>
						
						<Input
							value={this.state.duration} 
							style={{marginTop: '8px'}}
							label='Days'
							labelPosition='right'
							onChange={(event) => { this.setState({ duration: event.target.value }) }}
						/>
					</Form.Field>

					<Button
						primary 
						content='Create'
						icon='add'
						labelPosition='right'
						loading={this.state.loading}
					/>
				</Form>
			</Layout>
		);
	}
}

export default ExchangesNew;