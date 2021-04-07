import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar/navbar";
import HomePageCards from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePageCards />
      <HomePageCards />
    </div>
  );
}

export default App;
