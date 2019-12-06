import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Output extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="output">
                <Card>
                    <Card.Header as="h5">Output</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.jobTitle}</Card.Title>
                        <Card.Text>
                            {this.props.jobDesc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}