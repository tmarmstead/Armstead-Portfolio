import React from "react";
import { Card, CardDeck, Jumbotron, Button } from "react-bootstrap";
// // import Project from "../Project/project"
// import ImagesMain from "../Main-Images/images-main";
import readme from "../project-images/readme.png";
import entertainment from "../project-images/entertainment.png";
import employeeDirectory from "../project-images/Screenshot (175).png";
import burger from "../project-images/Screenshot (110).png";
import grocery from "../project-images/Screenshot (139).png";
import budgetTracker from "../project-images/Screenshot (181).png";
import "./project-cards.css"



function ProjectCards(props) {
    return (
        <div>
            <Jumbotron id="portfolio" className="jumbotron">
                <h1>Portfolio</h1>

            </Jumbotron>
            <CardDeck class="card-deck" id="portfolio">
                <Card className="full-card">
                    <Card.Img variant="top" src={readme} class="card-image" />
                    <Card.Body>
                        <Card.Title>README.md Generator</Card.Title>
                        <Card.Text>
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
                    <Card.Body>
                        <Card.Title>Entertainment Planner</Card.Title>
                        <Card.Text>
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
                    <Card.Body>
                        <Card.Title>Employee Directory</Card.Title>
                        <Card.Text>
                            This app allows users to view and entire employee directory for quick access to employee information
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-center">
                            <Button href="https://github.com/tmarmstead/React-Employee-Directory" target="_blank" className="double-button">GitHub Repo</Button>
                            <Button href="https://react-employee-directory-ta.herokuapp.com/" target="_blank" className="double-button">Live Site</Button>                     </div>


                    </Card.Footer>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card className="full-card">
                    <Card.Img variant="top" src={burger} class="card-image" />
                    <Card.Body>
                        <Card.Title>Express Handlebars</Card.Title>
                        <Card.Text>
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
                    <Card.Body>
                        <Card.Title>Grocery List Helper</Card.Title>
                        <Card.Text>
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
                    <Card.Img variant="top" src={budgetTracker} class="card-image" />
                    <Card.Body>
                        <Card.Title>Budget Tracker</Card.Title>
                        <Card.Text>
                            This app is designed to allow for offline access and functionality. It lets a user add or subtract and keep track of their transactions both on and offline
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-center">
                            <Button href="https://github.com/tmarmstead/Budget-Tracker" target="_blank" className="double-button">GitHub Repo</Button>
                            <Button href="https://mighty-spire-93511.herokuapp.com/" target="_blank" className="double-button">Live Site</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default ProjectCards;