import './App.css';
import Project from "./components/Project/project";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Project title="Project Title" text="here is the text for my project description" />
      <Project title="Project Title" text="here is the text for my project description" />
      <Project title="Project Title" text="here is the text for my project description" />
      <Project title="Project Title" text="here is the text for my project description" />
      <Project title="Project Title" text="here is the text for my project description" />
      <Project title="Project Title" text="here is the text for my project description" />
      <Footer text="Footer Text here" />
    </div>
  );
}

export default App;
