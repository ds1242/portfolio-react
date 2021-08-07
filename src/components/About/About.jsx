import React from 'react';
import coverImage from '../../assets/imgs/mountain2-min.jpg';
import awesomeImage from '../../assets/imgs/IMG_3529-min.jpg';
import './About.css';


function About(props) {
    return (
        <section id="about-section">            
            <img src={coverImage} className="cover-image" style={{ width: "100%" }} alt="cover" />
            <div className="container-fluid">
                <div className="row" id="about-title">
                    <h2 id="about">Who Am I</h2>
                </div>
            </div>
            <div className="container" id="about-content">
                <div className="row justify-content-lg-center">
                    <div className="col-lg-6" id="image-id" >
                        <img src={awesomeImage} className="personal-photo" id="about-me-img" alt='David hiking in fall' />
                    </div>
                    <div className="col-lg-6" id='about-text'>
                        <p>{props.aboutText}</p>
                    </div>
                </div>
            </div>  
            <div className="container-fluid">
                <div className="row" id="about-title">
                    <h2 id="about">Skills</h2>
                </div>
            </div>  
        </section>
    )
}



export default About