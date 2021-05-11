import React, { PureComponent } from 'react';
import { Jumbotron } from "react-bootstrap";
import "./header.css";


function Header() {
    return (

        <Jumbotron id="home" className="jumbotron">
            <h1 class="responsive-title">Tina Armstead</h1>
            {/* <h5>
                Software Development
            </h5> */}
        </Jumbotron>
    )
}


export default Header;