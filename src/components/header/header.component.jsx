import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // this is a HOC that allows us to have acess to redux

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown2.svg";

const Header = ({ currentUser }) => {
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
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						{" "}
						SIGN OUT{" "}
					</div>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
});

// const mapDistpatchToProps = dispatch => ({})

export default connect(mapStateToProps)(Header);
