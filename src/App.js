import React from "react";
import { Switch, Route } from "react-router-dom";

// import Particles from "react-particles-js";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInSignUpPage from "./pages/signin-signup/signin-signup.component";

// const particlesOptions = {
// 	particles: {
// 		number: {
// 			value: 200,
// 			density: {
// 				enable: true,
// 				value_area: 800
// 			}
// 		}
// 	}
// };

function App() {
	return (
		<div>
			{/* <Particles className='particles' params={particlesOptions} /> */}
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
