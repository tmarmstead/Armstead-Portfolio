import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";

// import "./contact-info.css";
// import readme from "../project-images/readme.png";
import Tech from "../project-images/tech.png";
import { Image } from "react-bootstrap";


const LandingCarousel = () => {
    return (
        <div>
            <Carousel className="full-carousel">
                <Carousel.Item className="carousel-item">
                    <Image
                        className="lets-connect"
                        src={Tech} fluid
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h1>Tina Armstead</h1> */}

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <Image
                        className="lets-connect"
                        src={Tech} fluid
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h1>Tina Armstead</h1> */}

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <Image
                        className="lets-connect"
                        src={Tech} fluid
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h1>Tina Armstead</h1> */}

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default LandingCarousel;





