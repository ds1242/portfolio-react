import React, { useState } from 'react';
import './App.css';
import Nav from '../Nav';
import About from '../About';
import Footer from '../Footer';
import ContactForm from '../Contact';
import Resume from '../Resume';
import Work from '../Work';
// import projects from '../../assets/projects.json';



function App() {
  const [ aboutSelected, setAboutSelected ] = useState(true);
  const [ workSelected, setWorkSelected ] = useState(false);
  const [ contactSelected, setContactSelected ] = useState(false);
  const [ resumeSelected, setResumeSelected ] = useState(false);
 

  const aboutText = "Full stack web developer with several years of experience as a Business Analyst with a degree in Information Systems from the University of Utah.  Recently earned a certificate in full stack web development from the University of Utah. Always learning new technologies and striving to create impactful web applications for end users.  My wide range of experience provides me with a unique perspective to know when and what questions to ask to ensure that applications provide the best results and utility for end users.";
  return (
   <div className="App">
      <Nav 
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      workSelected={workSelected}
      setWorkSelected={setWorkSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {(!aboutSelected && !contactSelected && !resumeSelected) ?(
          <>
            <Work></Work>
          </>  
        ) :(!workSelected && !aboutSelected && !resumeSelected) ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : (!workSelected && !contactSelected && !aboutSelected) ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <About aboutText={aboutText}></About>
        )}        
        </main>   
        
      <Footer></Footer>
   </div>
  );
}

export default App;
