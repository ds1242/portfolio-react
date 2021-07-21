import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer mt-auto " datatest-id="footer">
            <div className="list-group list-group-horizontal list-group-flush">
                {/* <div className="row flex-row"> */}
                    <h5 id="info-id" className="list-group-item">My Info</h5>
                {/* </div> */}
                {/* <div className="row flex-row" id="personal-links"> */}
                    <a href="https://github.com/ds1242" target="_blank" rel='noreferrer noopener' className="list-group-item"><i className="bi bi-github"></i></a> 
                    <a href="https://www.linkedin.com/in/david-shaw1242" target="_blank" rel='noreferrer noopener' class="list-group-item"><i className="bi bi-linkedin"></i></a> 
                    
                {/* </div> */}
                {/* <div className="row">
                    &copy; {new Date().getFullYear()} 
                </div> */}
            </div>

        </footer>
    )
}

export default Footer;