import React, { useState } from 'react';
import projects from '../../assets/projects.json';

function Work() {
    const [ projectsList, setProjectsList ] = useState(projects);
    // load projects json file into the project and then map over the array for the cards to generate
    return (
        <section id='work'>
            <h1>My Projects</h1>
            {projectsList.map((props, idx) => {
                return(<projectCard
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
        </section>
    )
}

export default Work;