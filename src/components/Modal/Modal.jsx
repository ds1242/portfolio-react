import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Modal.css';

function MyModal(props) {
    
    const {id, title, description, link, github, alt, tools1, tools2, onClose, show} = props

  return (
    <Modal show={show} centered>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title id="modal-title">{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img className="modal-img" id="modal-img" src={require(`../../assets/imgs/${id}.jpg`).default} alt={alt} />
                <h4>Click Here For:</h4>
                <h5>
                    <a href={github} target="_blank" rel="noreferrer">Github Repo</a> 
                </h5>
                <h5>
                    <a href={link} target="_blank" rel="noreferrer">Live Link</a>

                </h5>
                <h5>Description of Project: </h5>
                    <p>{description}</p>
                <h5>
                    Built with:     
                </h5> 
                <p>
                    {tools1}
                {<br></br>} 
                    {tools2}
                </p>
            </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
       </Modal>
  );
}

export default MyModal;

