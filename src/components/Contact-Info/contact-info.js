import React from "react";
import "./contact-info.css";
import { Carousel, Card, Button } from "react-bootstrap";
// import readme from "../project-images/readme.png";
import Profile from "../project-images/profile_photo.png";
import letsConnect from "../project-images/connect.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "react-bootstrap/Image";


function ContactCarousel() {
    return (
        <div>
            <Carousel className="full-carousel">
                <Carousel.Item className="carousel-item">
                    <Image
                        className="lets-connect"
                        src={letsConnect} fluid
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h1>Tina Armstead</h1> */}

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="contact-info" style={{ width: '18rem' }}>
                        <Card.Body>
                            {/* <Card.Title className="card-title">Find me on LinkedIn</Card.Title> */}
                            <div className="text-center">
                                <FontAwesomeIcon icon={faLinkedin} className="fa-5x" href="https://www.linkedin.com/in/tina-armstead-87854498/" target="_blank" />
                            </div>
                            <div className="text-center">
                                <Button variant="primary" className="card-button" href="https://www.linkedin.com/in/tina-armstead-87854498/" target="_blank">View My LinkedIn Profile</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="contact-info" style={{ width: '18rem' }}>
                        <Card.Body>

                            {/* <Card.Title className="card-title">Find me on GitHub</Card.Title> */}
                            <div className="text-center">
                                <FontAwesomeIcon icon={faGithub} className="fa-5x" href="https://github.com/tmarmstead" target="_blank" />
                            </div>
                            <div className="text-center">
                                <Button variant="primary" className="card-button" href="https://github.com/tmarmstead" target="_blank"
                                >View My Github Profile</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="profile-pic"
                        src={Profile} fluid
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <Card className="thanks, contact-info" style={{ width: '18rem' }}>
                        <Card.Body>

                            <h3>Thanks for visiting my Portfolio!</h3>
                            <p>Contact me for any questions, work opportunities, or colloborations!</p>

                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}


export default ContactCarousel;
