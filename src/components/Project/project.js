import React from "react";
import { Card } from "react-bootstrap";
import ImagesMain from "../Main-Images/images-main";
import "./project.css";


function Project(props) {

    return (
        <Card style={{ width: '18rem' }} className="card-project">
            <Card.Body>
                <ImagesMain img={props.img} />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project;