import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../images/triton_logo.png';

export default class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <h1 style={{color: "white"}}>Triton's Career Finder</h1> <br />

                <img src={logo} alt="Triton Logo" /> <br /> <br />

                <Button href="/job-seeker" variant="primary" size="lg" style={{textAlign: "center", display: "inline-block"}}>I am looking for a new career</Button>
                <br />
                <Button href="/employer" variant="outline-primary" size="lg" style={{textAlign: "center", display: "inline-block", marginTop:"10px"}}>I want to list a job opportunity</Button>
            </div>
        );
    }
}