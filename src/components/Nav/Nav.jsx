import React, { useState } from 'react';
import './Nav.css';



function Nav(props) {
    const {
        aboutSelected,
        setAboutSelected,
        workSelected,
        setWorkSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
    } = props
    return (
        <header>            
        <nav className="navbar navbar-expand-sm" data-testid="navbar">
            <div className="container-fluid ">
                <a className="navbar-brand"  data-testid="link" href="/">
                    <h1>David's Portfolio</h1>
                </a>
                    <ul className="navbar-nav ">
                        <li>
                            <a className="nav-link active" data-testid="about" href="#about"                             
                            onClick={() => { setAboutSelected(true); setContactSelected(false); setResumeSelected(false); setWorkSelected(false); }}>
                            <h3>About Me</h3></a>
                        </li>
                        <li>
                            <a className="nav-link active" href="#work"
                            onClick={() => { setAboutSelected(false); setContactSelected(false); setWorkSelected(true); setResumeSelected(false); }}>
                            <h3>My Projects</h3></a>                            
                        </li>
                        <li>
                            <a className="nav-link active" href="#contact-me" 
                            onClick={() => { setAboutSelected(false); setContactSelected(true); setWorkSelected(false); setResumeSelected(false); }}>
                            <h3>Contact</h3></a>
                        </li>
                        <li>
                            <a className="nav-link active" href="#resume" 
                            onClick={() => { setAboutSelected(false); setContactSelected(false); setWorkSelected(false); setResumeSelected(true); }}>
                            <h3>Resume</h3></a>
                        </li>
                    </ul>
            </div>
        </nav>
        </header>

    )
};

export default Nav;