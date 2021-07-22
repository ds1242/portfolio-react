import React from 'react';
import './Nav.css';



function Nav() {
    return (
        <header>            
        <nav className="navbar navbar-expand-sm" data-testid="navbar">
            <div className="container-fluid ">
                <a className="navbar-brand"  data-testid="link" href="/">
                    <h1>David's Portfolio</h1>
                </a>
                    <ul className="navbar-nav ">
                        <li>
                            <a className="nav-link active" data-testid="about" href="#about"><h3>About Me</h3></a>
                        </li>
                        <li>
                            <a className="nav-link active" href="#work"><h3>My Projects</h3></a>                            
                        </li>
                        <li>
                            <a className="nav-link active" href="#contact-me"><h3>Contact</h3></a>
                        </li>
                        <li>
                            <a className="nav-link active" href="#resume"><h3>Resume</h3></a>
                        </li>
                    </ul>
            </div>
        </nav>
        </header>

    )
};

export default Nav;