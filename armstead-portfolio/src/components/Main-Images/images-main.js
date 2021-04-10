import React from "react";
import Image from "react-bootstrap/Image";

function ImagesMain(props) {
    return (
        <Image src={props.img} fluid />
    )
}

export default ImagesMain;