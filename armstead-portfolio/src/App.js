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
      <Project title="README.md Generator" text="here is the text for my project description" img={readme} />
      <Project title="Entertainment Planner" text="here is the text for my project description" img={entertainment} />
      <Project title="Employee Directory" text="here is the text for my project description" img={employeeDirectory} />
      <Project title="Express Handlebars" text="here is the text for my project description" img={burger} />
      <Project title="Grocery List Helper" text="here is the text for my project description" img={grocery} />
      <Project title="Grocery List Helper" text="here is the text for my project description" img={budgetTracker} />
      <Footer text="Footer Text here" />
    </div>
  );
}

export default App;
