import React from 'react';
import { Jumbotron } from "react-bootstrap";
import "./aboutme.css";


function AboutMe() {
    return (

        <Jumbotron id="home" className="about-me">
            <p>
                Tina is a musician turned programmer. After studying professional music at Berklee College of music, she began coding in her free time. Learning to code became a fun new adventure for Tina as the mental process very much matches that of learning music. Having enjoyed the process of development, Tina decided to take it further by enrolling in the University of Oregon's Full Stack Bootcamp. 
                
                Having been an avid scrapbooker throughout highschool, Tina is inclined to start a career in web design, and has a great eye for modern and minimalist looks. She has grown to enjoy learning more about fullstack development and looks forward to growing and gaining more experience every day.
            </p>
        </Jumbotron>
    )
}


export default AboutMe;