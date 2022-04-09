import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';


function Nav(props) {
    return (
			<nav>
				<Link to='/'>
					<button className='nav__btn'>HOME</button>
				</Link>
				<Link to='/about'>
					<button className='nav__btn'>WORKING WITH US</button>
				</Link>
				<Link to='/about'>
					<button className='nav__btn'>OUR WORK</button>
				</Link>
				<Link to='/'>
					<button className='nav__btn'>CONTACT US</button>
				</Link>
			</nav>
		);
}

export default Nav;