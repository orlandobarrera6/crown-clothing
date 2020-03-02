import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown2.svg";

const Header = () => {
	return (
		<div className='header-container'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options-container'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			</div>
		</div>
	);
};

export default Header;