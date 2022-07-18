// import logo from './logo.svg';
import './App.css';
import './Home.css';
import './Portfolio.css';
import './About.css'
import './Contact.css'

import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div >
    <Navbar/>
    <Home/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
