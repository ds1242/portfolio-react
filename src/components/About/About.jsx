import React from 'react';
import coverImage from '../../assets/imgs/mountain2-min.jpg';
import awesomeImage from '../../assets/imgs/IMG_3529-min.jpg';
import { Icon } from '@iconify/react';
import './About.css';


function About(props) {
    return (
        <section id="about-section">            
            <img src={coverImage} className="cover-image" style={{ width: "100%" }} alt="cover" />
            <div className="container-fluid">
                <div className="row" id="about-title">
                    <h2 id="about">Who Am I</h2>
                </div>
            </div>
            <div className="container" id="about-content">
                <div className="row justify-content-lg-center">
                    <div className="col-lg-6" id="image-id" >
                        <img src={awesomeImage} className="personal-photo" id="about-me-img" alt='David hiking in fall' />
                    </div>
                    <div className="col-lg-6" id='about-text'>
                        <p>{props.aboutText}</p>
                    </div>
                </div>
            </div>  

                <div className="row" id="about-title">
                    <h2 id="about">Skills</h2>
                    <div className='row justify-content-center'>
                        <div className='col col-lg-12 '>
                            <Icon icon="logos:html-5" id='icons'/>
                            <Icon icon="logos:css-3" id='icons'/>
                            <Icon icon="logos:javascript" id='icons'/>
                            <Icon icon="logos:jquery" id='icons'/>
                            <Icon icon="logos:react" id='icons'/>
                            <Icon icon="logos:handlebars" id='icons'/>
                            <Icon icon="logos:mongodb" id='icons'/>
                            <Icon icon="logos:mysql" id='icons'/>
                            <Icon icon="logos:sequelize" id='icons'/>
                            <Icon icon="logos:graphql" id='icons'/>
                            <Icon icon="logos:nodejs" id='icons'/>
                            <Icon icon="logos:express" id='icons'/>
                            <Icon icon="logos:github-icon" id='icons'/>
                            <Icon icon="logos:bootstrap" id='icons'/>                        
                            <Icon icon="logos:npm" id='icons'/>
                        </div>
                    </div>
                </div>
 
        </section>
    )
}



export default About