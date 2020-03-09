import { UserActionTypes } from "./user-action.types";

// A reducer is just a function that gets two properties 1. a state object
// which represents the last state or an initial state, 2. receives an action

// An action is just an object with a type (string value), and a payload

// redux does not know the initial state
const INITIAL_STATE = {
	currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	// every single reducer gets every single action that gets fired even
	// when actions are not related to the reducer
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
