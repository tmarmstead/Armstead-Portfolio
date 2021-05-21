import React from 'react';
import { Jumbotron } from "react-bootstrap";
import "./aboutme.css";


function AboutMe() {
    return (

        <Jumbotron id="home" className="about-me">
            <p>
                A musician turned programmer, I have a passion for language including the many languages found in the world of code. After studying professional music at Berklee College of music, I began coding in my free time. Learning to code became a fun new adventure as the mental process similarly matches that of learning music. Having enjoyed the process of development, I decided to take it further by enrolling in the University of Oregon's Full Stack Bootcamp where I could expidite my learning by utilize the course's resources, structure, and collaboration.<br></br><br></br>

                Having been an avid scrapbooker at a young age, I am inclined to start a career in web design using my great eye for modern and minimalist looks. Through my coding journey I have also grown to enjoy learning more about backend work and creating MERN applications. I look forward to continuing this journey of growing and gaining more experience each and everyday</p>
        </Jumbotron>
    )
}


export default AboutMe;