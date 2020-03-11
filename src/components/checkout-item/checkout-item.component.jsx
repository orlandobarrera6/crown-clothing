import React from "react";

// import { connect } from "react-redux";

// import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>{quantity}</span>
			<span className='price'>${price}</span>
			<div className='remove-button'></div>
		</div>
	);
};

export default CheckoutItem;