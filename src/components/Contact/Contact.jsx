import React from 'react';
// import { Card } from 'react-bootstrap';
// import { validateEmail } from '../../assets/utils/helpers';
import resumeDoc from '../../assets/docs/David_Shaw_Resume_2021.pdf';
import './Contact.css';

function ContactForm() {
    

    return (
        <section>
            <h2 datatest-id='contact' id='contact-me'>How To Contact Me:</h2>            
            <div className='row justify-content-center' id="contact-info">
                <div className='card w-50 h-50' id='contact-card'>
                    <div class='card-body'>
                    <h3 className='card-title justify-content-center'>If you have any questions or would like to contact me.   Feel free to reach out with any of the following methods.</h3>
                    <br></br>
                    <div className='card-subtitle'>
                        <h4 className='card-text'>Click here for my <a href={resumeDoc} download="resume">resume</a></h4>
                        <h4 className='card-text'>Or email me at <a href='mailto:david.shaw1242@gmail.com'>david.shaw1242@gmail.com</a></h4>
                        <h3>
                            <a href="https://bit.ly/3eKK7uy" target="_blank" rel='noreferrer noopener' id='icon-link'><i className="bi bi-github"></i></a>
                            <a href="https://bit.ly/3x0CDd4" target="_blank" rel='noreferrer noopener' id='icon-link'><i className="bi bi-linkedin"></i></a>
                        </h3>

                    </div>

                    </div>
                </div>
                {/* <div className="col col-lg-4 justify-content-md-center"> */}
                {/* </div> */}
                {/* <div className="col col-lg-4 justify-content-md-center"> */}
                {/* </div> */}
            </div>
        </section>
    )
}

export default ContactForm;