import React from 'react';
import Header from './Header';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

class Layout extends React.Component {

	render() {
		return (
			<Container>
				<Head>
					<link 
						rel="stylesheet" 
						href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
					></link>
				</Head>
				<div>
					<Header />
					{this.props.children}
				</div>
			</Container>
		);
	}
}

export default Layout;