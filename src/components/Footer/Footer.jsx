import React from 'react';
// import './Footer.css';

function Footer() {
    return (
        <footer className="footer mt-auto" datatest-id="footer">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <h5 id="info-id">My Info:
                    <a href="https://bit.ly/3eKK7uy" target="_blank" rel='noreferrer noopener'><i className="bi bi-github" id='footer-icon'></i></a> 
                    <a href="https://bit.ly/3x0CDd4" target="_blank" rel='noreferrer noopener'><i className="bi bi-linkedin" id='footer-icon'></i></a> 
                    <a href="https://bit.ly/3fbDD8b" target="_blank" rel='noreferrer noopener'><i class="bi bi-stack" id='footer-icon'></i></a>
                    </h5>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <h5 datatest-id="date">David Shaw &copy; {new Date().getFullYear()}</h5>
                </div>
            </div>

        </footer>
    )
}

export default Footer;