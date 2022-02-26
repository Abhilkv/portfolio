import React from 'react';

import ProjectCard from '../../components/projects-card/projectsCard';
import ProjectsData from './const.js';
import Styles from './projects.module.css';


const Experience = () => {
    return (
      <div className={Styles.projects}>
         <h2 className={`${Styles.title} wow heartBeat`} data-wow-duration="1s" data-wow-delay="0.2s">Projects</h2>
         <div className={Styles.projectList} id="projects">
             {ProjectsData.map((projects, index) => (
                <ProjectCard key={projects.title} index={index+1}/>
             ))}
         </div>
      </div>
    );
};

export default Experience;