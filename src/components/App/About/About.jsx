import React from 'react';
import coverImage from '../../../assets/imgs/mountain2.jpg';

function About() {
    return (
        <section>
            
            <img src={coverImage} className="cover-image" style={{ width: "100%" }} alt="cover" />
            <h1 id="about">Who Am I</h1>
            <p>
                Full stack web developer with several years of Business Analyst experience and a degree in Information Systems from the University of Utah.  Recently earned a certificate in full stack web development from the University of Utah. Skills in HTML, CSS, Javascript, and Node.js.  Always learning new technologies and improving to strive to create impactful web applications for end users.  My variety of previous experiences provide me with a unique perspective to know when and what questions to ask to ensure that applications provide the best results and utility for end users.      
            </p>
        </section>
    )
}



export default About