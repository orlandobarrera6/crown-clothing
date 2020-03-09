import { UserActionTypes } from "./user-action.types";

// here we are creating and declaring the actions, and they
// are literally just functions that return an object with
// a type and payload.

export const setCurrentUser = user => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user
});
