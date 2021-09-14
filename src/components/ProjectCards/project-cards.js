import React from "react";
import { Card, CardDeck, Button, Jumbotron, ListGroup } from "react-bootstrap";
// // import Project from "../Project/project"
// import ImagesMain from "../Main-Images/images-main";
import readme from "../project-images/readme.png";
import entertainment from "../project-images/entertainment.png";
import employeeDirectory from "../project-images/Screenshot (175).png";
import burger from "../project-images/Screenshot (110).png";
import grocery from "../project-images/Screenshot (139).png";
import weatherTracker from "../project-images/Screenshot (208).png";
import "./project-cards.css"
// import Header from "../Header/header"



function ProjectCards() {
    return (
        <div>
            <Jumbotron id="portfolio">
                <h1>Portfolio</h1>
            </Jumbotron>
            <CardDeck class="card-deck">
                <Card className="full-card">
                    <Card.Img variant="top" src={readme} class="card-image" />
                    <Card.Title className="title">README.md Generator</Card.Title>
                    <Card.Text className="tech-title">
                        Technologies and Concepts
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="secondary">Node.js</ListGroup.Item>
                        <ListGroup.Item variant="secondary">process.argv</ListGroup.Item>
                        <ListGroup.Item variant="secondary">fs</ListGroup.Item>
                        <ListGroup.Item variant="secondary">module.edxports</ListGroup.Item>
                        <ListGroup.Item variant="secondary">npm</ListGroup.Item>
                        <ListGroup.Item variant="secondary">inquirer</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Array methods</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Callbacks</ListGroup.Item>
                        <ListGroup.Item variant="secondary">promises</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Template literals</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>

                        <Card.Text className="text">
                            Use the command line which will take in user input to create a polished and properly formatted README.md file
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-center">
                            <Button href="https://github.com/tmarmstead/readme_generation" target="_blank" className="double-button">GitHub Repo</Button>
                        </div>
                    </Card.Footer>
                </Card>
                <Card className="full-card">
                    <Card.Img variant="top" src={entertainment} class="card-image" />
                    <Card.Title className="title">Entertainment Planner</Card.Title>
                    <Card.Text className="tech-title">
                        Technologies and Concepts
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="secondary">Bulma</ListGroup.Item>
                        <ListGroup.Item variant="secondary">GitHub Pages Deployment</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Server-side APIs</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Client-side storage</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Responsive Design</ListGroup.Item>
                        <ListGroup.Item variant="secondary">JQuery</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Local Storage</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>

                        <Card.Text className="text">
                            Hop on over to the Interactive Entertainment Planner. With minimal effort, you’ll be able grab a movie recommendation based on a simple input, generate a random cocktail to make for yourself, and find recipes based on ingredients that you want to include.
                            {' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-center">
                            <Button href="https://github.com/tmarmstead/Interactive_Entertainment_Planner" target="_blank" className="double-button"> GitHub Repo</Button>
                            <Button href="https://samrogers15.github.io/Interactive_Entertainment_Planner/" target="_blank" className="double-button">Live Site</Button>
                        </div>


                    </Card.Footer>
                </Card>
                <Card className="full-card">
                    <Card.Img variant="top" src={employeeDirectory} class="card-image" />
                    <Card.Title className="title">Employee Directory</Card.Title>
                    <Card.Text className="tech-title">
                        Technologies and Concepts
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="secondary">React</ListGroup.Item>
                        <ListGroup.Item variant="secondary">React-Bootstrap</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Heroku Deployment</ListGroup.Item>
                        <ListGroup.Item variant="secondary">JSX</ListGroup.Item>
                        <ListGroup.Item variant="secondary">JSX Variables</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Props</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>

                        <Card.Text className="text">
                            This app allows users to view and entire employee directory for quick access to employee information
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-center">
                            <Button href="https://github.com/tmarmstead/React-Employee-Directory" target="_blank" className="double-button">GitHub Repo</Button>
                            <Button href="https://react-employee-directory-ta.herokuapp.com/" target="_blank" className="double-button">Live Site</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card className="full-card">
                    <Card.Img variant="top" src={burger} class="card-image" />

                    <Card.Title className="title">Burgers</Card.Title>
                    <Card.Text className="tech-title">
                        Technologies and Concepts
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="secondary">Express handlebars</ListGroup.Item>
                        <ListGroup.Item variant="secondary">npm</ListGroup.Item>
                        <ListGroup.Item variant="secondary">MySQL</ListGroup.Item>
                        <ListGroup.Item variant="secondary">seeds.sql</ListGroup.Item>
                        <ListGroup.Item variant="secondary">schema.sql</ListGroup.Item>
                        <ListGroup.Item variant="secondary">ORM</ListGroup.Item>
                        <ListGroup variant="flush">
                        </ListGroup>
                    </ListGroup>
                    <Card.Body>
                        <Card.Text className="text">
                            Fun burgerapp created with handlebars that lets the user mark and move items based on whether or not the burgers are "devoured" or not
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                        <div className="text-center">
                            <Button href="https://github.com/tmarmstead/Express-handlebars" target="_blank" className="double-button">GitHub Repo</Button>
                            <Button href="https://past-express-handlebars.herokuapp.com/" target="_blank" className="double-button">Live Site</Button>
                        </div>

                    </Card.Footer>
                </Card>
                <Card className="full-card">
                    <Card.Img variant="top" src={grocery} class="card-image" />
                    <Card.Title className="title">Grocery List Helper</Card.Title>
                    <Card.Text className="tech-title">
                        Technologies and Concepts
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="secondary">Javascript</ListGroup.Item>
                        <ListGroup.Item variant="secondary">JQuery</ListGroup.Item>
                        <ListGroup.Item variant="secondary">MySQL</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Sequelize</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Node.js</ListGroup.Item>
                        <ListGroup.Item variant="secondary">ESlint</ListGroup.Item>
                        <ListGroup.Item variant="secondary">HTML</ListGroup.Item>
                        <ListGroup.Item variant="secondary">CSS</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Foundation</ListGroup.Item>
                        <ListGroup variant="flush">
                        </ListGroup>
                    </ListGroup>
                    <Card.Body>

                        <Card.Text className="text">
                            The Grocery list application will help any user upon all their grocery excursions. The user can simply log what they need to buy onto their list and once it's purchased, they will be able to move it to their fridge list. The user has the ability to move it back and forth for future grocery trips, and may also delete the item if it's no longer needed. On top of the grocery list, the user will be able to search up recipe ideas based on the ingredients they have/need
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-center">
                            <Button href="https://github.com/tmarmstead/Grocery-list" target="_blank" className="double-button">GitHub Repo</Button>
                            <Button href="https://the-grocery-list.herokuapp.com/" target="_blank" className="double-button">Live Site</Button>
                        </div>
                    </Card.Footer>
                </Card>
                <Card className="full-card">
                    <Card.Img variant="top" src={weatherTracker} class="card-image" />
                    <Card.Title className="title">Weather Dashboard</Card.Title>
                    <Card.Text className="tech-title">
                        Technologies and Concepts
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="secondary">JSON</ListGroup.Item>
                        <ListGroup.Item variant="secondary">AJAX</ListGroup.Item>
                        <ListGroup.Item variant="secondary">HTTP GET requests</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Server-side APIs</ListGroup.Item>
                        <ListGroup.Item variant="secondary">JQuery</ListGroup.Item>
                        <ListGroup variant="flush">
                        </ListGroup>
                    </ListGroup>
                    <Card.Body>

                        <Card.Text className="text">
                            This app is designed to take in user input of a city, then once the search button is clickedn the page will display the current weather as well as a 5 day forecast. Additionally, when the page is refreshed, buttons for each city searched will be added to a previously searched section for quick reference.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-center">
                            <Button href="https://github.com/tmarmstead/weather_api" target="_blank" className="double-button">GitHub Repo</Button>
                            <Button href="https://tmarmstead.github.io/weather_api/" target="_blank" className="double-button">Live Site</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default ProjectCards;