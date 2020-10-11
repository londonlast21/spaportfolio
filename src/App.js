import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  // render contact page
  const [contactSelected, setContactSelected] = useState(false);

  // render portfolio page 
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  // render resume page
  const [resumeSelected, setResumeSelected] = useState(false);

  // render about page: eval to true so it is landing page shown!
  const [aboutSelected, setAboutSelected] = useState(true)


  return (
    <div>
      <Nav></Nav>
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
        
        {!aboutSlected ? (
        <>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        </>
        ) : (
          <About></About>
        )}


      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
