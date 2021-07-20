import React from 'react';

function Footer() {
    return (
        <footer className="footer" datatest-id="footer">
            <div className="container-fluid">
                <div className="row">
                    <h5 id="info-id">My Info</h5>
                </div>
                <div className="row" id="personal-links">
                    <a href="https://github.com/ds1242" target="_blank"><i class="bi bi-github"></i></a> 
                    <a href="https://www.linkedin.com/in/david-shaw1242" target="_blank"><i class="bi bi-linkedin"></i></a> 
                </div>
                <div className="row">
                    &copy; {new Date().getFullYear()} 
                </div>
            </div>

        </footer>
    )
}

export default Footer;