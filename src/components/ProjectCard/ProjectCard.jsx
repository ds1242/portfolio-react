import React, { useState } from 'react';
import MyModal from '../Modal';
import './ProjectCard.css';
import { Button } from 'react-bootstrap';

function ProjectCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(  
        <div className="card col-sm-auto align-self-center" id="card-header">            
            {handleShow && <MyModal 
                show={show}
                onClose={handleClose} 
                id={props.id}
                title={props.title}
                link={props.link}
                github={props.github}
                img={props.img}
                alt={props.alt}
                description={props.description}
                tools1={props.tools1}
                tools2={props.tools2}
            />}
        <div>
                <img className="card-img-top" id="card-img" src={require(`../../assets/imgs/${props.id}.jpg`).default} alt={props.alt} />
                <div className="card-body" id="project-body">
                    <h4 className="card-title">{props.title}</h4>
                    <Button onClick={handleShow} id="modal-button">Click Here For Details</Button>
                </div>

            </div>
        </div>     
    )

}

export default ProjectCard