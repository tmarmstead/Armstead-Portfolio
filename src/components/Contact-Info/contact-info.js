import React from "react";
import "./contact-info.css";
import { Carousel, Card, Button, Link } from "react-bootstrap";
import readme from "../project-images/readme.png";
import Profile from "../project-images/profile_photo.png";
import letsConnect from "../project-images/connect.png";

function ContactCarousel() {
    return (
        <div>
            <Carousel className="full-carousel">
                <Carousel.Item className="carousel-item">
                    <img
                        className="lets-connect"
                        src={letsConnect}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h1>Tina Armstead</h1> */}
                        <h3>View My Contact info</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Card style={{ width: '18rem' }} className="profile-pic">
                        <Card.Body>
                            <Card.Title>Find me on LinkedIn</Card.Title>

                            <Button variant="primary" onClick="www.google.com">Go somewhere</Button>

                            <Card.Title>Find me on GitHub</Card.Title>

                            <Button variant="primary" onClick="www.google.com">Go somewhere</Button>


                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="profile-pic"
                        src={Profile}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Thanks for visiting my Portfolio!</h3>
                        <p>Contact me for any questions, work opportunities, or colloborations!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}


export default ContactCarousel;
