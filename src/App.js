import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './components/landing';
import NavBar from './components/navBar';

export default class App extends Component {
	render() {
		return (
			<div className="App">

				<NavBar />
				
				<Landing />

			</div>
		);
	}
}
