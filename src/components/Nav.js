import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav(props) {
    return (
			<nav className='nav__div'>
				<a className='nav__btn'>HOME</a>
				<a className='nav__btn'>WORKING WITH US</a>
				<a className='nav__btn'>OUR WORK</a>
				<a className='nav__btn'>CONTACT US</a>
			</nav>
		);
}

export default Nav;