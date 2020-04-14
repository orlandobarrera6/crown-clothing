import React from 'react';
import { connect } from 'react-redux';

import {
	selectCartItems,
	selectCartItemsTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>Product</div>
				<div className='header-block'>Description</div>
				<div className='header-block'>Quantity</div>
				<div className='header-block'>Price</div>
				<div className='header-block'>Remove</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className='total'>Total = ${total}</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
	total: selectCartItemsTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);
