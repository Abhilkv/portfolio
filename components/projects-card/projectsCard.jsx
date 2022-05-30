import React from 'react';
import Image from 'next/image'

import Styles from './projectsCard.module.css';

const animationDirection = {
  0: 'bounceInDown',
  1: 'bounceInRight',
  2: 'bounceInUp',
  3: 'bounceInLeft',
}

const ExperienceCard = (props) => {
  const { src, title, type, tech, description, index, status } = props.data;

    return (
      <div className={`${Styles.flipBox} wow ${animationDirection[index%4]}`} data-wow-duration="1.5s" data-wow-delay="0.2s">
        <div className={Styles.flipBoxInner}>
          <div className={Styles.flipBoxFront}>
            {src && <Image src={src} alt={title} width={250} height={150} loading="eager"/>}
            <h2>{title}</h2>
            <p className={Styles.details}>Type: <span>{type}</span></p>
            <p className={Styles.details}>Status: <span>{status}</span></p>
          </div>
          <div className={Styles.flipBoxBack}>
            <h2>{title}</h2>
            <span><b>Tech:</b> <i>{tech && tech.map((item) => ( <span key={item}>{item}</span>))}</i> </span>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    );
};

export default ExperienceCard;