import React from 'react';
import coverImage from '../../assets/imgs/mountain2-min.jpg';
import awesomeImage from '../../assets/imgs/IMG_3529-min.jpg';
import './About.css';


function About() {
    return (
        <section id="about-section">            
            <img src={coverImage} className="cover-image" style={{ width: "100%" }} alt="cover" />
            <div className="row" id="about-title">
                <h1 id="about">Who Am I</h1>
            </div>
            <div className="container" id="about-content">
                <div className="row justify-content-lg-center">
                    <div className="col-lg-6" id="image-id" >
                        <img src={awesomeImage} className="personal-photo" id="about-me-img" alt='David hiking in fall' />
                    </div>
                    <div className="col-lg-6" id='about-text'>
                        <p>
                            Full stack web developer with several years of Business Analyst experience and a degree in Information Systems from the University of Utah.  Recently earned a certificate in full stack web development from the University of Utah. Skills in HTML, CSS, Javascript, and Node.js.  Always learning new technologies and improving to strive to create impactful web applications for end users.  My variety of previous experiences provide me with a unique perspective to know when and what questions to ask to ensure that applications provide the best results and utility for end users.      
                        </p>
                    </div>
                </div>
            </div>    
        </section>
    )
}



export default About