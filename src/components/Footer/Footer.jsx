import React from 'react';

function Footer() {
    return (
        <footer className="footer mb-auto" datatest-id="footer">
            <div>
                <h5 id="info-id">My Info:
                <a href="https://bit.ly/3eKK7uy" target="_blank" rel='noreferrer noopener'><i className="bi bi-github"></i></a> 
                <a href="https://bit.ly/3x0CDd4" target="_blank" rel='noreferrer noopener'><i className="bi bi-linkedin"></i></a> 
                </h5>
                <h5 datatest-id="date">Copyright &copy; {new Date().getFullYear()}</h5>
            </div>

        </footer>
    )
}

export default Footer;