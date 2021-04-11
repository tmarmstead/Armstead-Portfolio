import './App.css';
import Project from "./components/Project/project";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import ImagesMain from './components/Main-Images/images-main';

import readme from "../src/components/project-images/Screenshot (97).png";
import entertainment from "../src/components/project-images/Screenshot (103).png";
import employeeDirectory from "../src/components/project-images/Screenshot (175).png";
import burger from "../src/components/project-images/Screenshot (110).png";
import grocery from "../src/components/project-images/Screenshot (139).png";
import budgetTracker from "../src/components/project-images/Screenshot (181).png";

function App() {
  return (
    <div className="App">
      <Header />
      <ImagesMain />
      <Project title="README.md Generator" text="Use the command line which will take in user input to create a polished and properly formatted README.md file" img={readme} />
      <Project title="Entertainment Planner" text="Greetings friends! Let’s set the stage - it’s Friday evening. You’re topping off a LONG week of work. The weather is nasty. You’re completely fried. You just NEED. TO. RELAX. But you can’t muster up the effort to figure out how to unwind. WORRY NOT! Hop on over to the Interactive Entertainment Planner. With minimal effort, you’ll be able grab a movie recommendation based on a simple input, generate a random cocktail to make for yourself, and find recipes based on ingredients that you want to include.

Movie recommendation? CHECK!

Cocktail in hand? CHECK!

Delicious meal prepared? CHECK!

READY? GET SET? UNWIND!" img={entertainment} />
      <Project title="Employee Directory" text="This app allows users to view and entire employee directory for quick access to employee information." img={employeeDirectory} />
      <Project title="Express Handlebars" text="This app uses express handlebars to manipulate data from the browser." img={burger} />
      <Project title="Grocery List Helper" text="The Grocery list application will help any user upon all their grocery excursions. The user can simply log what they need to buy onto their list and once it's purchased, they will be able to move it to their fridge list. The user has the ability to move it back and forth for future grocery trips, and may also delete the item if it's no longer needed. On top of the grocery list, the user will be able to search up recipe ideas based on the ingredients they have/need." img={grocery} />
      <Project title="Grocery List Helper" text="" img={budgetTracker} />
      <Footer text="In programming, the hard part isn't solving problems, but deciding what problems to solve." person="-Paul GrahaThis app is designed to allow for offline access and functionality. It lets a user add or subtract and keep track of their transactions both on and offline.m" />
    </div>
  );
}

export default App;
