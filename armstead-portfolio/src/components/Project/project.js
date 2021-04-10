import React from "react";
import { Card } from "react-bootstrap";
import ImagesMain from "../Main-Images/images-main";


function Project(props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <ImagesMain img="../project-images/Screenshot (97).png" />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project;