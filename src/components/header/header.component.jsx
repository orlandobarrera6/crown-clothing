import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // this is a HOC that allows us to have acess to redux

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown2.svg";

const Header = ({ currentUser, hidden }) => {
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
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

// const mapStateToProps = state => ({
// 	currentUser: state.user.currentUser,
// 	hidden: state.cart.hidden
// });

// This is the same as the above but it is a more advanced way
// of destructuring the global state
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden
});

export default connect(mapStateToProps)(Header);
