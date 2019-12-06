import React, { Component } from 'react';
import './App.css';

import Output from './components/output';
import QuizForm from './components/quizForm';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobTitle: "",
			jobDesc: ""
		}
	}

	retrieveOutput = (jobTitle, jobDesc) => {
		this.setState({
			jobTitle: jobTitle,
			jobDesc: jobDesc
		})
	}

	render() {
		let { jobTitle, jobDesc} = this.state;
		return (
			<div className="App">
				<div className="header"><h1>Triton's Career Finder</h1></div>
				
				<QuizForm retrieveOutput={this.retrieveOutput}/>
				<br /> <br />
				
				<Output jobTitle={jobTitle} jobDesc={jobDesc} />
			</div>
		);
	}
}
