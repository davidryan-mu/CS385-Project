import React, { Component } from 'react';
import fire from '../firebase';
import NavBar from './navBar';

import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class EmployerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleStatus: "",
            titleValue: "",
            descStatus: "",
            descValue: "",
            qualityStatus: "",
            subjects: [],
			hobbies: [],
			skills: [],
            isTitleValid: false,
            isDescValid: false,
            isQualityValid: false,
            success: false,
            jobs: []
        }
    }

    componentWillMount(){
        /* Create reference to jobs in Firebase Database */
        let jobsDBRef = fire.database().ref('jobsDB').orderByKey().limitToLast(100);
        jobsDBRef.on('child_added', snapshot => {
          /* Update React state when job is added at Firebase Database */
          let jobsList = { job: snapshot.val(), id: snapshot.key };
          this.setState({ jobs: [jobsList].concat(this.state.jobs) });
         })
    }


    //EVENT HANDLERS------------------------------------------------------------------------------------------------
	/* 	- State reflects data in input fields as soon as it is changed
		- Check to ensure input is of correct type
		- i.e. no empty strings, no duplicates in database, correct amount of qualities
	*/
    handleTitleChange = (e) => {
        let component = this;
        if(e.target.value === "") {
            component.setState({
                titleStatus: "❌ Field cannot be left empty",
                isTitleValid: false
            });
        } else {
            component.setState({
                titleStatus: "✅ This is good!",
                titleValue: e.target.value,
                isTitleValid: true
            });
            this.state.jobs.forEach(function (obj) {
                if(obj.job.title === e.target.value) {
                    component.setState({
                        titleStatus: "❌ This job is already in our database",
                        isTitleValid: false
                    });
                }
            })
        }
    }

    handleDescChange = (e) => {
        let component = this;
        if(e.target.value === "") {
            component.setState({
                descStatus: "❌ Field cannot be left empty",
                isDescValid: false
            });
        } else {
            component.setState({
                descStatus: "✅ This is good!",
                descValue: e.target.value,
                isDescValid: true
            });
        }
    }

    /* 	- State reflects selected checkboxes
		- If value is not in state when clicked, checkbox is being checked, add it to state
        - If value exists in state when clicked, checkbox is being unchecked, remove it from state
        - Send state to error check method
	*/

    handleSubjectChange = (e) => {
		if(this.state.subjects.includes(e.target.value)) {
			let index = this.state.subjects.indexOf(e.target.value);
			if (index > -1) 
				this.state.subjects.splice(index, 1);
		} else {
			this.state.subjects.push(e.target.value);
        }
        
        this.qualityErrorCheck(this.state);
    }
    

	handleHobbyChange = (e) => {
		if(this.state.hobbies.includes(e.target.value)) {
			let index = this.state.hobbies.indexOf(e.target.value);
			if (index > -1) 
				this.state.hobbies.splice(index, 1);
		} else {
			this.state.hobbies.push(e.target.value);
        }
        
        this.qualityErrorCheck(this.state);
	}

	handleSkillChange = (e) => {
		if(this.state.skills.includes(e.target.value)) {
			let index = this.state.skills.indexOf(e.target.value);
			if (index > -1) 
				this.state.skills.splice(index, 1);
		} else {
			this.state.skills.push(e.target.value);
        }
        
        this.qualityErrorCheck(this.state);
    }
 
    /* 	- ERROR CHECKING FOR CHECKBOX FORM
		- Take in current state as parameter
        - If incorrect number of boxes are checked update status message and set validity flag to false
        - If correct number of boxes are checked update status message and set validity flag to true
	*/
    qualityErrorCheck = (state) => {
		if(state.subjects.length > 2 || state.skills.length > 2 || state.hobbies.length > 2) {
			this.setState({
                qualityStatus: "❌ Please check you have only selected two options from each list",
                isQualityValid: false
            });
		} else if(state.subjects.length < 2 || state.skills.length < 2 || state.hobbies.length < 2) {
			this.setState({
                qualityStatus: "❌ Please check you have selected at least two options from each list",
                isQualityValid: false
            });
		} else {
            this.setState({
                qualityStatus: "✅ This is good!",
                isQualityValid: true
            });
		}
    }
    
     /* - SUBMIT NEW JOB HANDLER
		- Declare relevant state properties as variables for scope
        - Create object from inputted, validated data
        - Send object to Firebase database and then set success flag
	*/
    handleSubmit = () => {
        let component = this;
        let subjects = this.state.subjects;
		let hobbies = this.state.hobbies;
        let skills = this.state.skills;
        
        let newJob = {
            title: this.state.titleValue,
            desc: this.state.descValue,
            qualities: subjects.concat(hobbies, skills)
        }
        
        fire.database().ref('jobsDB').push(newJob)
            .then(function() {
                component.setState({success: true});
            });
    }

    render() {
        return (
            <div className="employerPage">
                <NavBar />

                <Card bg="dark" text="white">
                    <Card.Header as="h5" style={{textAlign: "center"}}>List a Job</Card.Header>
                    <Card.Body>
                        <Card.Text style={{textAlign: "left"}}>
                            If you are an employer and want your job oppurtunity to be suggested to job seekers, you can add your listing to our database here! <br /> 
                            Fill in the form with an accurate description of the role and what traits would be best suited to the role. <br />
                            Then just click Submit and your job will recommended to those that might fit the role.
                        </Card.Text>

                        <br />

                        <h5>Job Title</h5>
                        <Form className="w-25">
                            <Form.Control type="text" placeholder="Job Title" onChange={this.handleTitleChange} />
                            {this.state.titleStatus !== "" && this.state.titleStatus}
                        </Form>

                        <br />

                        <h5>Job Qualities</h5>
                        <Accordion style={{textAlign: "left", text: "black"}}>
                            <Form>
                            <Card bg="dark" text="white">
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Favourite Subjects
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Form.Label>Pick <strong>two</strong> subjects from school that align best with this job</Form.Label>
                                        
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
                            <Card bg="dark" text="white">
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Hobbies
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Form.Label>Pick <strong>two</strong> hobbies that align best with this job</Form.Label>
                                    
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
                            <Card bg="dark" text="white">
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Skills
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <Form.Label>Pick <strong>two</strong> skills that align best with this job</Form.Label>
                                    
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
                            {this.state.qualityStatus !== "" && this.state.qualityStatus}
                        <br /> <br />

                        <h5>Job Description</h5>
                        <Form className="w-50">
                            <Form.Control as="textarea" rows="3" placeholder="Job Description" onChange={this.handleDescChange} />
                            {this.state.descStatus !== "" && this.state.descStatus}
                        </Form>

                        <br />

                        <div className="text-center">
                            {this.state.isTitleValid && this.state.isDescValid && this.state.isQualityValid  ? 
                                <Button variant="primary" size="lg" onClick={this.handleSubmit} style={{textAlign: "center", display: "inline-block"}}>Submit</Button>
                            :
                                <Button variant="primary" size="lg" disabled style={{textAlign: "center", display: "inline-block"}}>Submit</Button>
                            }

                            {this.state.success && <p>🎉 Job added to our database successfully! 🎉</p>}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}