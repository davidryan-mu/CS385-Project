import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class QuizForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSubjectData: [],
            limit: 2
        }
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
							<Form.Label>Pick your two favourite subjects from school</Form.Label>
								
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" id="English" label="English" checked={this.state.currentSubjectData.indexOf(id)>=0} onChange={this.selectData.bind(this,id)} />
								<Form.Check type="checkbox" label="Maths" checked={this.state.currentSubjectData.indexOf(id)>=0} onChange={this.selectData.bind(this,id)} />
								<Form.Check type="checkbox" label="Science Subjects (Biology / Chemistry / Physics)" checked={this.state.currentSubjectData.indexOf(id)>=0} onChange={this.selectData.bind(this,id)} />
								<Form.Check type="checkbox" label="Practical Subjects (Construction / Engineering / Design / Technology)" checked={this.state.currentSubjectData.indexOf(id)>=0} onChange={this.selectData.bind(this,id)} />
								<Form.Check type="checkbox" label="Art" checked={this.state.currentSubjectData.indexOf(id)>=0} onChange={this.selectData.bind(this,id)} />
								<Form.Check type="checkbox" label="History" checked={this.state.currentSubjectData.indexOf(id)>=0} onChange={this.selectData.bind(this,id)} />
								<Form.Check type="checkbox" label="Physical Education" checked={this.state.currentSubjectData.indexOf(id)>=0} onChange={this.selectData.bind(this,id)} />
								<Form.Check type="checkbox" label="Business Subjects (Business / Accounting / Economics)" checked={this.state.currentSubjectData.indexOf(id)>=0} onChange={this.selectData.bind(this,id)} />
								<Form.Check type="checkbox" label="Music" checked={this.state.currentSubjectData.indexOf(id)>=0} onChange={this.selectData.bind(this,id)} />
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
							<Form.Label>Pick your two favourite hobbies</Form.Label>
							
							  <Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Writing" />
								<Form.Check type="checkbox" label="Photography" />
								<Form.Check type="checkbox" label="Cooking" />
								<Form.Check type="checkbox" label="Painting" />
								<Form.Check type="checkbox" label="Chess" />
								<Form.Check type="checkbox" label="Sports" />
								<Form.Check type="checkbox" label="Baking" />
								<Form.Check type="checkbox" label="Playing Instruments" />
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
							<Form.Label>Pick your two strongest skills</Form.Label>
							
							  <Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Teamwork" />
								<Form.Check type="checkbox" label="IT Skills" />
								<Form.Check type="checkbox" label="Problem solving" />
								<Form.Check type="checkbox" label="Working as an individual" />
								<Form.Check type="checkbox" label="Creative thinking" />
								<Form.Check type="checkbox" label="Leadership" />
								<Form.Check type="checkbox" label="Time Management" />
								</Form.Group>
						  </Card.Body>
						</Accordion.Collapse>
					  </Card>
					  </Form>
					</Accordion>
				<Button variant="primary">Submit</Button>
			  </Card.Body>
			</Card>
		</div>
        );
    }
}