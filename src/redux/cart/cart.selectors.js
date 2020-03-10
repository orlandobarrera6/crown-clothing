import { createSelector } from "reselect";

// There are two types of selectors we could write, a) an input
// selector (doesn't use createSelector), b) output selector which
// uses createSelector and input selectors to build themselves

// input selcector example
const selectCart = state => state.cart;

// ouput selector example
export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumalatedQuantity, cartItem) =>
				accumalatedQuantity + cartItem.quantity,
			0
		)
);
