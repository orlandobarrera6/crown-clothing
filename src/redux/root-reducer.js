// This will end up being the code that combines all the states
// together. All the reducers that we are going to write are going
// to be going into this root-reducer.js

// A reducer is just a function that gets two properties 1. a state object
// which represents the last state or an initial state, 2. receives an action

// An action is just a function that returns an object
// with a type (string value), and a payload.

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
	key: "root",
	storage,
	whiteList: ["cart"],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
