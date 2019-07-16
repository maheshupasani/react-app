import React from 'react';
import { Switch,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// importing components
// Layout (Header,Footer)
import HeaderComponent from './components/Layout/HeaderComponent';
import FooterComponent from './components/Layout/FooterComponent';
// Authentication (register,login,forget-password)
import RegisterLoginComponent from './components/Authentication/RegisterLoginComponent';
// Home Page
import HomeComponent from './components/Home/HomeComponent';
// Cart Page
import CartComponent from './components/Cart/CartComponent';
// Default Pages (404)
import PageNotFoundComponent from './components/Default/PageNotFoundComponent';

function App() {
  	return (
		<React.Fragment>
			<HeaderComponent/>
			<Switch>
				<Route exact path="/" component={ HomeComponent } />
				<Route path="/cart" component={ CartComponent } />
				<Route path="/login" component={ RegisterLoginComponent } />
				<Route component={ PageNotFoundComponent } />
			</Switch>
			<FooterComponent />
		</React.Fragment>
	);
}

export default App;
