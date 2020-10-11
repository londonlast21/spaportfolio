import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [pages] = useState([{name:"About"}, {name:"Portfolio"}, {name:"Resume"}, {name:"ContactForm"}])

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav

      ></Nav>
      
      <main>
        {!contactSelected ? (
        <>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <About></About>
        </>
        ) : (
          <ContactForm></ContactForm>
        )}
{/* 
        
        {!portfolioSelected ? (
        <>
        <Resume></Resume>
        <About></About>
        <ContactForm></ContactForm>
          </>
        ) : (
          <Portfolio></Portfolio>
        )}

        {!resumeSelected ? (
        <>
        <Portfolio></Portfolio>
        <About></About>
        <ContactForm></ContactForm>
        </>
        ) : (
          <Resume></Resume>
        )}
        
        {!aboutSelected ? (
        <>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        </>
        ) : (
          <About></About>
        )}
 */}

      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
