import React from 'react';

import Styles from './projectsCard.module.css';

const animationDirection = {
  0: 'bounceInDown',
  1: 'bounceInRight',
  2: 'bounceInUp',
  3: 'bounceInLeft',
}

const ExperienceCard = (props) => {
  const { image, title, type, tech, description, index } = props;

    return (
      <div className={`${Styles.flipBox} wow ${animationDirection[index%4]}`} data-wow-duration="1.5s" data-wow-delay="0.2s">
        <div className={Styles.flipBoxInner}>
          <div className={Styles.flipBoxFront}>
            <h2>Front Side</h2>
          </div>
          <div className={Styles.flipBoxBack}>
            <h2>Back Side</h2>
          </div>
        </div>
      </div>
    );
};

export default ExperienceCard;