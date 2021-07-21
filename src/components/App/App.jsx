import React, {useState} from 'react';
import './App.css';
import Nav from '../Nav';
import About from '../About';
import Footer from '../Footer';
import ContactForm from '../Contact';

function App() {
  return (
   <div className="App">
      <Nav></Nav>
      <main>
        <About></About>

        <ContactForm></ContactForm>
      </main>   

      <Footer></Footer>
   </div>
  );
}

export default App;
