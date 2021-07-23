import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import projects from '../../assets/projects.json';

function Work() {
    const [ projectsList, setProjectsList ] = useState(projects);
    // load projects json file into the project and then map over the array for the cards to generate
    return (
        <section id='work'>
            <h2>My Projects</h2>
            <h3>Click to Expand</h3>
            <div className="container-fluid">
                <div className='row justify-content-md-center align-items-center'>
                    {projectsList.map((props, idx) => {
                        return(<ProjectCard
                            id={props.id}
                            title={props.title}
                            link={props.link}
                            github={props.github}
                            img={props.img}
                            alt={props.alt}
                            description={props.description}
                            tools1={props.tools1}
                            tools2={props.tools2}
                            key={idx} 
                            />)
                        })}
                </div>
            </div>
        </section>
    )
}

export default Work;