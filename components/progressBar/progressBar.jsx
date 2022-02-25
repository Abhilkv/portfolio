import React from 'react';

import Styles from './progressBar.module.css';

const DotLoader = (props) => {
  const { tech, rating, showRating} = props;
    return (
      <div className={Styles.progressBarWrapper}>
        <div className={Styles.field}>
          <span>
            {tech}
          </span>
          {(showRating) && <span>
            {rating}
          </span>}
        </div>
        <div className={Styles.progress}>
        <div className={Styles.progressLine} style={{ width: props.rating}}/>
        </div>
      </div>
    );
};

export default DotLoader;
