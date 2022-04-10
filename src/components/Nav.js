import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';


function Nav(props) {
    return (
			<nav>
				<Link to='/'>
					<button className='nav__btn'>HOME</button>
				</Link>
				<Link to='/aboutus'>
					<button className='nav__btn'>WORKING WITH US</button>
				</Link>
				<Link to='/ourwork'>
					<button className='nav__btn'>OUR WORK</button>
				</Link>
				<Link to='/contactus'>
					<button className='nav__btn'>CONTACT US</button>
				</Link>
			</nav>
		);
}

export default Nav;