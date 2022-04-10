import { blue } from '@mui/material/colors';
import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';


function Nav(props) {

	const [link, setLink] = useState();

	function handleChange(event) {
		const newState = event.target.id;
		console.log(newState);
		setLink(newState);
		console.log(link)
	}

    return (
			<nav>
				<Link to='/'>
					<button className='nav__btn' id="home" onClick={handleChange}>HOME</button>
				</Link>
				<Link to='/aboutus'>
					<button className='nav__btn' id='about'>WORKING WITH US</button>
				</Link>
				<Link to='/ourwork'>
					<button className='nav__btn' id='ourwork'>OUR WORK</button>
				</Link>
				<Link to='/contactus'>
					<button className='nav__btn' id='contact'>CONTACT US</button>
				</Link>
			</nav>
		);
}

export default Nav;