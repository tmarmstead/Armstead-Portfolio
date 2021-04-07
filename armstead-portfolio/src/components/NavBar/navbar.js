import React, { PureComponent } from 'react';
import { Nav } from "react-bootstrap";


class Navbar extends PureComponent {
    state = {

    }

    handleLinkClick(props) {

    }

    render() {
        return (

            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link eventKey="disabled" disabled>
                        Tina Armstead
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Navbar;