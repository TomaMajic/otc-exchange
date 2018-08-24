import React from 'react';
import Layout from '../../components/Layout';
import Agent from '../../ethereum/agent';
import { Button, Input, Form } from 'semantic-ui-react';

class ExchangesNew extends React.Component {

	// static async getInitialProps() => {

	// }

	onSubmit = async () => {

	}

	render() {
		return (
			<Layout>
				<h3>Create a new exchange</h3>

				<Form onSubmit={this.onSubmit}>
					<Form.Field style={{width: '35%'}}>
						<label>Participants:</label>
						<Input 
							style={{marginTop: '8px'}}
							placeholder='Your address..'
						/>
						<Input 
							style={{marginTop: '8px'}}
							placeholder='Other participant address..'
						/>
					</Form.Field>

					<Form.Field style={{width: '35%'}}>
						<label>Tokens to exchange:</label>
						<Input 
							style={{marginTop: '8px'}}
							placeholder='Your token address..'
						/>
						<Input 
							style={{marginTop: '8px'}}
							placeholder='Other party token address..'
						/>
					</Form.Field>

					<Form.Field style={{width: '35%'}}>
						<label>Amounts to exchange:</label>
						<Input 
							style={{marginTop: '8px'}}
							placeholder='Your amount..'
						/>
						<Input 
							style={{marginTop: '8px'}}
							placeholder='Other party amount..'
						/>
					</Form.Field>

					<Form.Field style={{width: '35%'}}>
						<label>Expiry date:</label>
						<Input 
							style={{marginTop: '8px'}}
							placeholder='Enter date..'
						/>
					</Form.Field>

					<Button
						primary 
						content='Create'
						icon='add'
						labelPosition='right'
					/>
				</Form>
			</Layout>
		);
	}
}

export default ExchangesNew;