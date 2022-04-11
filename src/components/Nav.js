import { blue } from '@mui/material/colors';
import React from 'react';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';


function Nav(props) {


    return (
			<nav>
				<NavLink
					to='/'
					className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
					HOME
				</NavLink>
				<NavLink
					to='/aboutus'
					className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
						WORKING WITH US
				</NavLink>
				<NavLink
					to='/ourwork'
					className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
						OUR WORK
				</NavLink>
				<NavLink
					to='/contactus'
					className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
						CONTACT US
				</NavLink>
			</nav>
		);
}

export default Nav;


// function Nav(props) {


//     return (
// 			<nav>
// 				<Link to='/'>
// 					<button className='nav__btn' id="home">HOME</button>
// 				</Link>
// 				<Link to='/aboutus'>
// 					<button className='nav__btn' id='about'>WORKING WITH US</button>
// 				</Link>
// 				<Link to='/ourwork'>
// 					<button className='nav__btn' id='ourwork'>OUR WORK</button>
// 				</Link>
// 				<Link to='/contactus'>
// 					<button className='nav__btn' id='contact'>CONTACT US</button>
// 				</Link>
// 			</nav>
// 		);
// }

// export default Nav;