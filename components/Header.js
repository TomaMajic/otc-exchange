import React from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';
import OTCIndex from '../pages/index';

class Header extends React.Component {

	render() {
		return (
			<Menu style={{marginTop: '10px'}}>
				<Menu.Item name='OTCX'>
					<Link href="/">
						<a style={{color: '#000'}}><h5>OTCX</h5></a>
					</Link>
		        </Menu.Item>
		        <Menu.Menu position='right'>
					<Menu.Item name='new'>
						<Link href="/exchanges/new">
							<a>Create Exchange</a>
						</Link>
					</Menu.Item>
		        </Menu.Menu>
			</Menu>
		);
	}
}

export default Header;