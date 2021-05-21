import React from 'react';
import { Jumbotron } from "react-bootstrap";
import "./brandstatement.css";


function BrandStatement() {
    return (
        <div>
            <Jumbotron id="brandstatement" className="jumbotron">
                <h1>Brand Statement</h1>
            </Jumbotron>

            <Jumbotron className="brand-statement">
                {/* <h3>Brand Statement</h3> */}
                <p>Full-Stack Web Developer with a background in professional music. Recently earned a certificate in Full Stack Development from the University of Oregon, focusing on JavaScript, CSS, React.js, and MERN with the insight to build responsive apps with strong attention to impactful user experience. Strengths in collaboration, design, and building projects from wireframe to execution. Used multiple methods of deployment on recent projects. Ability to work independently and collaboratively on various projects focusing on single-page MERN apps, including a video note taker that allows users to search youtube video, save them to their account, and save time-stamped notes while viewing. Excited to expand upon the skills gained in music and development to become part of a collaborative, face-paces, quality-driven team, adding value to create better experiences on the web.</p>
            </Jumbotron>
        </div>
    )
}


export default BrandStatement;