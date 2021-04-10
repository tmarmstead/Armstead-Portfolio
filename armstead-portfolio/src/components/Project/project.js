import React from "react";
import { Card } from "react-bootstrap";


function Project(props) {

    return (
        <Card style={{ width: '18rem' }} className="col-md-6 col-md-offset-3">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project;