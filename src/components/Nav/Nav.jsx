import React from 'react';
import './Nav.css';



function Nav() {
    return (
        <nav className="navbar" data-testid="navbar">
            <div className="container-fluid navbar-expand-lg">
                <a className="navbar-brand"  data-testid="link" href="/">
                    <h1>David's Portfolio</h1>
                </a>
            
                <div className="d-flex">
                    <div className="navbar-nav">
                        <a className="nav-link active" data-testid="about" href="#about"><h3>About Me</h3></a>
                        <a className="nav-link active" href="#work"><h3>Work</h3></a>
                        <a className="nav-link active" href="#contact-me"><h3>Contact</h3></a>
                        <a className="nav-link active" href="#resume"><h3>Resume</h3></a>
                    </div>
                </div>
            </div>
        </nav>

    )
};

export default Nav;