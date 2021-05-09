import React from "react";
// import ImagesMain from "../Main-Images/images-main";
import letsConnect from "../project-images/connect.png";
import Image from "react-bootstrap/Image";
import "./connect.css";

function Connect() {
    return (
        <div>
            <Image src={letsConnect} rounded className="connect-image" />
        </div>
    )
}

export default Connect;