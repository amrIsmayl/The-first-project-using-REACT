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
import { Route , Routes } from 'react-router-dom';



function App() {
  return (
    <div >
      <div className=' container'>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </div>

      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
