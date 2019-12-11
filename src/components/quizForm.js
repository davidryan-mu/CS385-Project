import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import jobsDB from '../jobsDB';

import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class QuizForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
			hobbies: [],
			skills: [],
			error: "",
			outputTitle: "",
			outputDesc: ""
        }
	}
	
	//EVENT HANDLERS------------------------------------------------------------------------------------------------
	handleSubjectChange = (e) => {
		if(this.state.subjects.includes(e.target.value)) {
			let index = this.state.subjects.indexOf(e.target.value);
			if (index > -1) 
				this.state.subjects.splice(index, 1);
		} else {
			this.state.subjects.push(e.target.value);
		}
	}

	handleHobbyChange = (e) => {
		if(this.state.hobbies.includes(e.target.value)) {
			let index = this.state.hobbies.indexOf(e.target.value);
			if (index > -1) 
				this.state.hobbies.splice(index, 1);
		} else {
			this.state.hobbies.push(e.target.value);
		}
	}

	handleSkillChange = (e) => {
		if(this.state.skills.includes(e.target.value)) {
			let index = this.state.skills.indexOf(e.target.value);
			if (index > -1) 
				this.state.skills.splice(index, 1);
		} else {
			this.state.skills.push(e.target.value);
		}
	}

	handleSubmit = () => {
		let subjects = this.state.subjects;
		let hobbies = this.state.hobbies;
		let skills = this.state.skills;

		if(subjects.length > 2 || hobbies.length > 2 || skills.length > 2) {
			console.log("more than 2 options");
			this.setState({
				subjects: subjects,
				hobbies: hobbies,
				skills: skills,
				error: "Please check you have only selected two options from each list"
			})
		} else if(subjects.length < 2 || hobbies.length < 2 || skills.length < 2) {
			console.log("less than 2 options");
			this.setState({
				subjects: subjects,
				hobbies: hobbies,
				skills: skills,
				error: "Please check you have selected at least two options from each list"
			})
		} else {
			console.log("clear error");
			this.setState({
				subjects: subjects,
				hobbies: hobbies,
				skills: skills,
				error: ""
			});

			this.findJob(subjects, hobbies, skills);
		}
	}

	//JOB FINDING----------------------------------------------------------------------------------------------------
	findJob = (subjects, hobbies, skills) => {
		console.log("finding job...");
		let array = subjects.concat(hobbies, skills);
		console.log("Concat input: " + array);
		let jobMatch = jobsDB[0];
		let highestScore = 0;
		jobsDB.forEach(function (obj) {
			console.log("Currently checking: " + obj.title);
			let i = 0;
			obj.qualities.forEach(function (quality) {
				console.log("quality: " + quality);
				if(array.includes(quality)) {
					i++;
					console.log("Matching quality found. current score:" + i);
				}
			})
			console.log("Highest Score: " + highestScore + " current i value: " + i);
			if(i > highestScore) {
				highestScore = i;
				jobMatch = obj;
				console.log("More suited match found: " + jobMatch.title)
			}
		})
		this.setState({
			subjects: subjects,
			hobbies: hobbies,
			skills: skills,
			error: "",
			outputTitle: jobMatch.title,
			outputDesc: jobMatch.desc
		});

		this.sendOutput();
	}

	sendOutput = () => {
		let { outputTitle, outputDesc } = this.state;
		this.props.retrieveOutput(outputTitle, outputDesc);
		console.log("Sending output");
	}

    render() {
        return (
            <div className="form">
			<Card>
			  <Card.Header as="h5">Quiz</Card.Header>
			  <Card.Body>
				<Card.Title>Sample header</Card.Title>
				<Card.Text>
				  Sample text explaining application
				</Card.Text>
				
				<Accordion style={{textAlign: "left"}}>
					<Form>
					  <Card>
						<Card.Header>
						  <Accordion.Toggle as={Button} variant="link" eventKey="0">
							Favourite Subjects
						  </Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
						  <Card.Body>
							<Form.Label>Pick your <strong>two</strong> favourite subjects from school</Form.Label>
								
							<Form.Group controlId="subjectCheckbox">
								<Form.Check type="checkbox" label="English" value="English" onChange={this.handleSubjectChange} />
								<Form.Check type="checkbox" label="Maths" value="Maths" onChange={this.handleSubjectChange} />
								<Form.Check type="checkbox" label="Science Subjects (Biology / Chemistry / Physics)" value="Science Subjects (Biology / Chemistry / Physics)" onChange={this.handleSubjectChange} />
								<Form.Check type="checkbox" label="Practical Subjects (Construction / Engineering / Design / Technology)"  value="Practical Subjects (Construction / Engineering / Design / Technology)" onChange={this.handleSubjectChange}/>
								<Form.Check type="checkbox" label="Art" value="Art" onChange={this.handleSubjectChange} />
								<Form.Check type="checkbox" label="History" value="History" onChange={this.handleSubjectChange} />
								<Form.Check type="checkbox" label="Physical Education" value="Physical Education" onChange={this.handleSubjectChange} />
								<Form.Check type="checkbox" label="Business Subjects (Business / Accounting / Economics)" value="Business Subjects (Business / Accounting / Economics)" onChange={this.handleSubjectChange} />
								<Form.Check type="checkbox" label="Music" value="Music" onChange={this.handleSubjectChange} />
							</Form.Group>
							
						  </Card.Body>
						</Accordion.Collapse>
					  </Card>
					  <Card>
						<Card.Header>
						  <Accordion.Toggle as={Button} variant="link" eventKey="1">
							Hobbies
						  </Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
						  <Card.Body>
							<Form.Label>Pick your <strong>two</strong> favourite hobbies</Form.Label>
							
							  <Form.Group controlId="hobbyCheckbox">
								<Form.Check type="checkbox" label="Writing" value="Writing" onChange={this.handleHobbyChange} />
								<Form.Check type="checkbox" label="Photography" value="Photography" onChange={this.handleHobbyChange} />
								<Form.Check type="checkbox" label="Cooking" value="Cooking" onChange={this.handleHobbyChange} />
								<Form.Check type="checkbox" label="Painting" value="Painting" onChange={this.handleHobbyChange} />
								<Form.Check type="checkbox" label="Chess" value="Chess" onChange={this.handleHobbyChange} />
								<Form.Check type="checkbox" label="Sports" value="Sports" onChange={this.handleHobbyChange} />
								<Form.Check type="checkbox" label="Baking" value="Baking" onChange={this.handleHobbyChange} />
								<Form.Check type="checkbox" label="Playing Instruments" value="Playing Instruments" onChange={this.handleHobbyChange} />
								</Form.Group>
						  </Card.Body>
						</Accordion.Collapse>
					  </Card>
					  <Card>
						<Card.Header>
						  <Accordion.Toggle as={Button} variant="link" eventKey="2">
							Skills
						  </Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
						  <Card.Body>
							<Form.Label>Pick your <strong>two</strong> strongest skills</Form.Label>
							
								<Form.Group controlId="skillCheckbox">
								<Form.Check type="checkbox" label="Teamwork" value="Teamwork" onChange={this.handleSkillChange} />
								<Form.Check type="checkbox" label="IT Skills" value="IT Skills" onChange={this.handleSkillChange} />
								<Form.Check type="checkbox" label="Problem solving" value="Problem solving" onChange={this.handleSkillChange} />
								<Form.Check type="checkbox" label="Working as an individual" value="Working as an individual" onChange={this.handleSkillChange} />
								<Form.Check type="checkbox" label="Creative thinking" value="Creative thinking" onChange={this.handleSkillChange} />
								<Form.Check type="checkbox" label="Leadership" value="Leadership" onChange={this.handleSkillChange} />
								<Form.Check type="checkbox" label="Time Management" value="time Management" onChange={this.handleSkillChange} />
								</Form.Group>
						  </Card.Body>
						</Accordion.Collapse>
					  </Card>
					  </Form>
					</Accordion>
				<br />
				<Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
				<p>{this.state.error !== "" && this.state.error}</p>
			  </Card.Body>
			</Card>
		</div>
        );
    }
}