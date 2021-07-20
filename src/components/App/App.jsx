import React from 'react';
import './App.css';
import Nav from '../Nav';
import About from '../About';
import Footer from '../Footer';

function App() {
  return (
   <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
      </main>   

      <Footer></Footer>
   </div>
  );
}

export default App;
