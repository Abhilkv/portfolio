import React from 'react';

import ProgressLine from '../../components/progressBar/progressBar'
import Styles from './skills.module.css';

const skills = [
    {
        tech: 'JavaScript',
        rating: '75%'
    },
    {
        tech: 'HTML',
        rating: '75%'
    },
    {
        tech: 'CSS',
        rating: '70%'
    },
    {
        tech: 'React.JS',
        rating: '75%'
    },
    {
        tech: 'React Native',
        rating: '60%'
    },
    {
        tech: 'JQuery',
        rating: '50%'
    },
    {
        tech: 'Git',
        rating: '60%'
    },
    {
        tech: 'Gatsby.JS',
        rating: '65%'
    },
    {
        tech: 'Next.JS',
        rating: '65%'
    },
    {
        tech: 'Node.Js',
        rating: '20%'
    },
    {
        tech: 'liquid',
        rating: '65%'
    },
    {
        tech: 'Flutter',
        rating: '20%'
    },
    {
        tech: 'Shopify',
        rating: '65%'
    },
    {
        tech: 'Strikingly',
        rating: '60%'
    },
    {
        tech: 'Webflow',
        rating: '60%'
    },
]

const Resume = () => {
    return (
      <div className={Styles.skillsContainer}>
         <h2 className={`${Styles.title} wow bounceInLeft`} data-wow-duration="1s" data-wow-delay="0.2s">Professional Skills</h2>
         <div className={`${Styles.skillBox} wow bounceInRight`} data-wow-duration="1s" data-wow-delay="0.3s" id="experience">
             {skills.map((skill) => (
                 <div key={skill.tech}>
                    <ProgressLine tech={skill.tech} rating={skill.rating} />
                 </div>
             ))}
         </div>
      </div>
    );
};

export default Resume;