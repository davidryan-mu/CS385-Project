import React, { Component } from 'react';
import './App.css';

import Output from './components/output';
import QuizForm from './components/quizForm';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="header"><h1>Triton's Career Finder</h1></div>
				
				<QuizForm />
				<br /> <br />
				
				<Output />
			</div>
		);
	}
}
