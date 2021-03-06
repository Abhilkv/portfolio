import React from 'react';

import MessageBox from '../messageBox/messageBox';
import Styles from './experienceCard.module.css';

const ExperienceCard = (props) => {
  const { time, link, position, description, companyName, role} = props.data;
    return (
      <div className={`${Styles.cardWrapper} wow headShake`} data-wow-duration="0.5s" data-wow-delay="0.2s">
        <div className={Styles.innerBox}>
          <div className={Styles.timePeriod}><MessageBox message={time}/></div>
          <a href={link} target="_blank" rel="noreferrer">{companyName}</a>
          <h4>{position}</h4>
          {role && <h6>{role}</h6>}
          <p>{description}</p>
          {props.readMore && (
          <span className={Styles.readMore}>
            Read More
          </span>)}
        </div>
      </div>
    );
};

export default ExperienceCard;