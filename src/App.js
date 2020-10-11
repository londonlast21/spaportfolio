import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Resume></Resume>
        <ContactForm></ContactForm>
        <Portfolio></Portfolio>
        <About></About>


      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
