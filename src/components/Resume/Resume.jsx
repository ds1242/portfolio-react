import React, { useState } from 'react';
import resumePreview from '../../assets/imgs/resume_snapshot.png';
import './Resume.css';


function Resume() {
    return(
        <section id="resume-section">
            <h1 datatest-id='resume' className='resume' id="resume">Resume</h1>
            <div className="row justify-content-md-center">
                <div className="card" id='resume-card'>
                    <img className="card-img-top" src={resumePreview} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;