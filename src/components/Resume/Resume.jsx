import React from 'react';
import resumePreview from '../../assets/imgs/resume_snapshot.png';
import resumeDoc from '../../assets/docs/David_Shaw_Resume_July2021.pdf';
import './Resume.css';


function Resume() {
    return(
        <section id="resume-section">
            <h2 datatest-id='resume' className='resume' id="resume">Resume</h2>
            <div className="row justify-content-md-center">
                
                <a href={resumeDoc} id="card-link" download="resume">
                    <div className="card" id='resume-card'>
                        <img className="card-img-top" id="resume-img-top" src={resumePreview} alt="preview of resume" />
                        <div className="card-body">
                            <p className="card-text">Click To Download Resume</p>
                        </div>
                    </div>
                </a>

            </div>
        </section>
    )
}

export default Resume;