import React from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';

class Header extends React.Component {
	
	render() {
		return (
			<Menu style={{marginTop: '10px'}}>
				<Menu.Item name='browse'>

		        </Menu.Item>

		        <Menu.Item name='submit'>
		        </Menu.Item>

		        <Menu.Menu position='right'>
					<Menu.Item name='open-trades'>
						<Link href="">
							<a>My open trades</a>
						</Link>
					</Menu.Item>
		        </Menu.Menu>
			</Menu>
		);
	}
}

export default Header;