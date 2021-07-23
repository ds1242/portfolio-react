import React, { useState } from 'react';
// import projects from '../../assets/projects.json';
import './ProjectCard.css';

function ProjectCard(props) {
    const modalProps = props;
    return(  
        <div className="col-sm-4">            
            <div className="card" id="card-header">
                {/* <a href={props.link}> */}
                    <img className="card-img-top" id="card-img" src={require(`../../assets/imgs/${props.id}.jpg`).default} alt={props.alt} />
                    <div className="card-body" id="project-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-text">{props.tools1}</h6>
                        <h6 className="card-text">{props.tools2}</h6>
                    </div>
                {/* </a> */}
            </div>
        </div>     
    )

}

export default ProjectCard