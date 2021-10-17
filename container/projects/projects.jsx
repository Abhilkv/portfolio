import React from 'react';

import ExperienceCard from '../../components/experienceCard/experienceCard';
import ExperienceData from './const.js';
import Styles from './experience.module.css';


const Experience = () => {
    return (
      <div className={Styles.experience}  id="experience">
         <h2 className={`${Styles.title} wow heartBeat`} data-wow-duration="1s" data-wow-delay="0.2s">Work Experience</h2>
         <div className={Styles.experienceList}>
             <div className={Styles.inner}>
                 {ExperienceData.map((data, index) => (
                     <div key={data.companyName}>
                        <ExperienceCard  data={data} evenChild={((index+1)%2) === 0}/>
                     </div>
                 ))}
             </div>
         </div>
      </div>
    );
};

export default Experience;