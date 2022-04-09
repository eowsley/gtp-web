import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';


function Nav(props) {
    return (
			<nav className='nav__div'>
				<Link to='/'><button className='nav__btn'>HOME</button></Link>
				<Link to='/about'><button className='nav__btn'>WORKING WITH US</button></Link>
				<button className='nav__btn'>OUR WORK</button>
				<HashLink to='#footer'><button className='nav__btn'>CONTACT US</button></HashLink>
			</nav>
		);
}

export default Nav;