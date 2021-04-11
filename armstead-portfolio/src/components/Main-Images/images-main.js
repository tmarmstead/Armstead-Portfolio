import React from "react";
import Image from "react-bootstrap/Image";
import "./images-main.css";

function ImagesMain(props) {
    return (
        <Image src={props.img} fluid rounded className="style-images" />
    )
}

export default ImagesMain;