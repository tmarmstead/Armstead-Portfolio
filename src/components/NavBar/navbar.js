import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router";

function Navigation() {
    return (
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href="#home">Tina Armstead</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation;