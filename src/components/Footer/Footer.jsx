import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer mt-auto " datatest-id="footer">
            <div>
                <h5 id="info-id">My Info:
                <a href="https://github.com/ds1242" target="_blank" rel='noreferrer noopener'><i className="bi bi-github"></i></a> 
                <a href="https://www.linkedin.com/in/david-shaw1242" target="_blank" rel='noreferrer noopener'><i className="bi bi-linkedin"></i></a> 
                </h5>
                <h5 datatest-id="date">Copyright &copy; {new Date().getFullYear()}</h5>
            </div>

        </footer>
    )
}

export default Footer;