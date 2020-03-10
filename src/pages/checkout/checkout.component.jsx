import React from "react";
import { connect } from "react-redux";

import {
	selectCartItems,
	selectCartItemsTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-clock'>Name</div>
				<div className='header-clock'>Description</div>
				<div className='header-clock'>Quantity</div>
				<div className='header-clock'>Price</div>
				<div className='header-clock'>Remove</div>
			</div>
			{cartItems.map(cartItem => cartItem.name)}
			<div className='total'>Total = ${total}</div>
		</div>
	);
};

const mapStateToProps = state => ({
	cartItems: selectCartItems(state),
	total: selectCartItemsTotal(state)
});

export default connect(mapStateToProps)(CheckoutPage);
