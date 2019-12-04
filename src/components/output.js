import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Output extends Component {
    render() {
        return (
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
        );
    }
}