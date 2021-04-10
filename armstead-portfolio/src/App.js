import './App.css';
import Project from "./components/Project/project";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
// import ImagesMain from "./components/ImagesMain/imagesmain";

function App() {
  return (
    <div className="App">
      <Header />
      <Project title="Portfolio Builder" text="here is the text for my project description" center="justify-content-center" />
      <Project title="README.md Generator" text="here is the text for my project description" />
      <Project title="Entertainment Planner" text="here is the text for my project description" />
      <Project title="Express Handlebars" text="here is the text for my project description" />
      <Project title="Grocery List Helper" text="here is the text for my project description" />
      <Project title="Project Title" text="here is the text for my project description" />
      <Footer text="Footer Text here" />
    </div>
  );
}

export default App;
