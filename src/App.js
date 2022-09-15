//import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <main className="App">
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Resume/>
    </main>
  );
}

export default App;
