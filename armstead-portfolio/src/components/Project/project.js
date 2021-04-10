import React from "react";
import { Card } from "react-bootstrap";
import ImagesMain from "../Main-Images/images-main";


function Project(props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <ImagesMain img="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project;