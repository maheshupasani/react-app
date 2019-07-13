import React from 'react';
import { Switch,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// importing components
// Layout (Header-Footer)
import HeaderComponent from './components/Layout/HeaderComponent';
// Home Page
import HomeComponent from './components/Home/HomeComponent';
// Cart Page
import CartComponent from './components/Cart/CartComponent';
// 404 page
import PageNotFoundComponent from './components/Default/PageNotFoundComponent';

function App() {
  	return (
		<React.Fragment>
			<HeaderComponent/>
			<Switch>
				<Route exact path="/" component={ HomeComponent } />
				<Route path="/cart" component={ CartComponent } />
				<Route component={ PageNotFoundComponent } />
			</Switch>
		</React.Fragment>
	);
}

export default App;
