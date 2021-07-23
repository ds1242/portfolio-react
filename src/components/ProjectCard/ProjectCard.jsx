import React, { useState } from 'react';
import Modal from '../Modal';
import './ProjectCard.css';

function ProjectCard(props, { onclose }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalProps = props;
    const [currentProject, setCurrentProject] = useState();

    const toggleModal = (id) => {
        setCurrentProject(id)
        setIsModalOpen(!isModalOpen);
    }
    return(  
        // <div>            
        <div className="card col-sm-4 align-self-center" id="card-header" onClick={() => toggleModal(modalProps, props.id)}>
        {isModalOpen && <Modal 
            currentProject={currentProject} 
            onClose={toggleModal} 
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
                {/* <a href={props.link}> */}
                    <img className="card-img-top" id="card-img" src={require(`../../assets/imgs/${props.id}.jpg`).default} alt={props.alt} />
                    <div className="card-body" id="project-body">
                        <h4 className="card-title">{props.title}</h4>
                        <h6 className="card-text">{props.tools1}</h6>
                        <h6 className="card-text">{props.tools2}</h6>
                    </div>
                {/* </a> */}
            </div>
        // </div>     
    )

}

export default ProjectCard