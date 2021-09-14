import './App.css';
// import { HashRouter, Route } from "react-router-dom";
// import Home from "../src/Pages/Home";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
// import TableMain from "./components/Table/table";
import Navigation from "./components/NavBar/navbar";
// import Project from "./components/Project/project";
import AboutMe from './components/AboutMe/aboutme';
import ProjectCards from './components/ProjectCards/project-cards';
import Contact from './components/Contact/contact';
// import Connect from './components/Connect/connect';
import ContactCarousel from './components/Contact-Info/contact-info';
import BrandStatement from './components/BrandStatement/brandstatement';
import LandingCarousel from './components/LandingCarousel';
// import budgetTracker from "./components/project-images/Screenshot"
// import ImagesMain from "./components/Main-Images/images-main"
// import readme from "./project-images/Screenshot (97).png";
// import entertainment from "../project-images/Screenshot (103).png";
// import employeeDirectory from "../project-images/Screenshot (175).png";
// import burger from "../project-images/Screenshot (110).png";
// import grocery from "../project-images/Screenshot (139).png";
// import budgetTracker from "../project-images/Screenshot (181).png";



function App() {
  return (
    // <HashRouter basename="/">
    //   <div className="App">

    //     <Route exact path="/" component={Home} />
    //     {/* <Route exact path="/home" component={ } />
    //       <Route exact path="/contact" component={ } />
    //       <Route exact path="/projects" component={ } /> */}
    //   </div>
    // </HashRouter>
    <div className="app-div">
      <Navigation />
      <Header header="Tina Armstead" subheader="Software Developer" />
      {/* <LandingCarousel /> */}
      <AboutMe />
      <ProjectCards />
      <BrandStatement />
      <Contact />
      {/* <Connect /> */}
      <ContactCarousel />
      <Footer text="In programming, the hard part isn't solving problems, but deciding what problems to solve." person="-Paul Graha" />
    </div>
  );

}

export default App;
