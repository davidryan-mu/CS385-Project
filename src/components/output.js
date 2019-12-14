import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Output extends Component {
    render() {
        return (
            <div className="output">
                <Card bg="dark" text="white">
                    <Card.Header as="h5" className="text-center">Your Job Match</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">{this.props.jobTitle}</Card.Title>
                        <Card.Text>
                            {this.props.jobDesc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
