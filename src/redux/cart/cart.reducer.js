import CartActionTypes from "./cart.types";

import {
	addItemToCart,
	removeItemFromCart,
	removeOneItemFromCart
} from "./cart.utils";

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.REMOVE_ONE_CART_ITEM:
			return {
				...state,
				cartItems: removeOneItemFromCart(state.cartItems, action.payload)
			};
		case CartActionTypes.REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		default:
			return state;
	}
};

export default cartReducer;
