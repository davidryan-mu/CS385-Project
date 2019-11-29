import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';


function App() {
  return (
    <div className="App">
		<div className="header"><h1>Triton's Career Finder</h1></div>
		
		<div className="form">
			<Card>
			  <Card.Header as="h5">Featured</Card.Header>
			  <Card.Body>
				<Card.Title>Special title treatment</Card.Title>
				<Card.Text>
				  With supporting text below as a natural lead-in to additional content.
				</Card.Text>
				
				<Accordion>
					  <Card>
						<Card.Header>
						  <Accordion.Toggle as={Button} variant="link" eventKey="0">
							Favourite Subjects
						  </Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
						  <Card.Body>
							<Form>
								<Form.Label>Pick your two favourite subjects from school</Form.Label>
								
							  <Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="English" />
								<Form.Check type="checkbox" label="Maths" />
								<Form.Check type="checkbox" label="Science Subjects (Biology / Chemistry / Physics)" />
								<Form.Check type="checkbox" label="Practical Subjects (Construction / Engineering / Design / Technology)" />
								<Form.Check type="checkbox" label="Art" />
								<Form.Check type="checkbox" label="History" />
								<Form.Check type="checkbox" label="Physical Education" />
								<Form.Check type="checkbox" label="Business Subjects (Business / Accounting / Economics)" />
								<Form.Check type="checkbox" label="Music" />
								</Form.Group>
							</Form>
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
							<Form>
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
							</Form>
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
							<Form>
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
							</Form>
						  </Card.Body>
						</Accordion.Collapse>
					  </Card>
					</Accordion>
				<Button variant="primary">Submit</Button>
			  </Card.Body>
			</Card>
		</div>
		<br /><br /><br />
		
		<div className="output">
			<Card>
			  <Card.Header as="h5">Output</Card.Header>
			  <Card.Body>
				<Card.Title>Special title treatment</Card.Title>
				<Card.Text>
				  With supporting text below as a natural lead-in to additional content.
				</Card.Text>
			  </Card.Body>
			</Card>
		</div>
    </div>
  );
}

export default App;
