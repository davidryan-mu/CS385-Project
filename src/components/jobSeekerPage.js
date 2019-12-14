import React, { Component } from 'react';
import Output from './output';
import QuizForm from './quizForm';

export default class JobSeekerPage extends Component {
    constructor(props) {
		super(props);
		this.state = {
			jobTitle: "",
			jobDesc: "Your suggested career will appear here."
		}
    }

    //Retrieve data from child component to be sent to other child
	retrieveOutput = (jobTitle, jobDesc) => {
		this.setState({
			jobTitle: jobTitle,
			jobDesc: jobDesc
		});
	}
    
    render() {
        let { jobTitle, jobDesc} = this.state;

        return (
            <div className="jobSeekerPage">
                <QuizForm retrieveOutput={this.retrieveOutput}/>
				<br /> <br />
				
				<Output jobTitle={jobTitle} jobDesc={jobDesc} />
            </div>
        );
    }
}