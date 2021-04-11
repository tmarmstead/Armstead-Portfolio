import './App.css';
// import Project from "./components/Project/project";npm 
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
// import ImagesMain from './components/Main-Images/images-main';
import TableMain from "./components/Table/table";


function App() {
  return (
    <div className="App">
      <Header />
      <TableMain />
      <Footer text="In programming, the hard part isn't solving problems, but deciding what problems to solve." person="-Paul GrahaThis app is designed to allow for offline access and functionality. It lets a user add or subtract and keep track of their transactions both on and offline.m" />
    </div>
  );
}

export default App;
