import React from "react";
import { Switch, Route } from "react-router-dom";

// import Particles from "react-particles-js";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInSignUpPage from "./pages/signin-signup/signin-signup.component";

// line 14 gave problems
import { auth } from "./firebase/firebase.utils";

// I fixed the problem with lines 16 -20 fixed the problem
// import firebase from "firebase/app";
// import "firebase/auth";
// const auth = firebase.auth();

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	// lines 34 to 43 take care of making our app aware that a user has signed in with google
	// as well as closing the sign in "subscription"

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				{/* <Particles className='particles' params={particlesOptions} /> */}
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
