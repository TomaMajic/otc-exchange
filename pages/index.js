import React from 'react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';

class OTCIndex extends React.Component {

	static async getInitialProps() {
		const agents = await factory.methods.getExchangeAgents().call();
		
		return { agents }
	}

	render() {
		return (
			<Layout>
				<div>
					<h3>Welcome to the OTC Exchnage</h3>
					{ this.props.agents }
				</div>
			</Layout>
		);
	}
}

export default OTCIndex;