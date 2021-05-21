import React, { PureComponent } from 'react';
import { Jumbotron } from "react-bootstrap";
import "./header.css";


function Header(props) {
    return (
        <div>
            <Jumbotron id="home" className="jumbotron" >
                <h1 class="responsive-title">{props.header}</h1>
                <p>{props.subheader}</p>
                {/* <h5>
                Software Development
            </h5> */}
            </Jumbotron>
        </div>
    )
}


export default Header;