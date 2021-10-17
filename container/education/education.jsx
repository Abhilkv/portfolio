import React from 'react';

import ExperienceCard from '../../components/experienceCard/experienceCard';
import educationData from './constants.js';
import Styles from './education.module.css';


const Experience = () => {
    return (
      <div className={Styles.experience}  id="education">
         <h2 className={`${Styles.title} wow heartBeat`} data-wow-duration="1s" data-wow-delay="0.1s">Education</h2>
         <div className={Styles.experienceList}>
             <div className={Styles.inner}>
                 {educationData.map((data, index) => (
                     <div key={data.companyName}>
                        <ExperienceCard  data={data} readMore={false}/>
                     </div>
                 ))}
             </div>
         </div>
      </div>
    );
};

export default Experience;