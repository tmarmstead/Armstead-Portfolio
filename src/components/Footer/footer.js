import React from "react";
import "./footer.css";

function Footer(props) {
    return (
        <div className="footer">
            <p>{props.text}</p>
            <p>{props.person}</p>
        </div>
    )
}


export default Footer;