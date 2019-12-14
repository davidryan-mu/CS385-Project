import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import smallLogo from '../images/triton_logo_white.png'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <Navbar bg="primary" variant="dark" fixed="top">
                <Navbar.Brand href="/">
                    <img
                        alt="Triton Logo"
                        src={smallLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Triton's Career Finder
                    </Navbar.Brand>
					<Nav className="mr-auto">
					  <Nav.Link href="/job-seeker">For Job Seekers</Nav.Link>
					  <Nav.Link href="/employer">For Employers</Nav.Link>
					</Nav>
				</Navbar> 

                <br /> <br /> <br />
            </div>
        );
    }
}