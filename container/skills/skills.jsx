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
        tech: 'Gatsby.JS',
        rating: '65%'
    },
    {
        tech: 'Next.JS',
        rating: '65%'
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
        tech: 'Mongo DB',
        rating: '30%'
    },
    {
        tech: 'Node.JS',
        rating: '20%'
    },
    {
        tech: 'SQL',
        rating: '50%'
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
        tech: 'Machine Learning',
        rating: '50%'
    },
    {
        tech: 'Shopify',
        rating: '65%'
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
                    <ProgressLine tech={skill.tech} rating={skill.rating} showRating={false} />
                 </div>
             ))}
         </div>
      </div>
    );
};

export default Resume;