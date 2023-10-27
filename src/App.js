import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
 
function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
