import React from 'react';
import Nav from './Nav';
import './Header.css';
import logo from './assets/logo.png';

function Header(props) {
    return (
			<div className='header__div'>
				<img className='header__logo__img' src={logo} alt="logo"/>
				<h1 className='header__h1'>Global Technology Partner</h1>
				<h2 className='header__h2'>
					Making startup dreams come true by being your product development
					partners
				</h2>
				<Nav />
			</div>
		);
}

export default Header;