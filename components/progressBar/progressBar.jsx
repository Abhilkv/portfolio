import React from 'react';

import Styles from './progressBar.module.css';

const DotLoader = (props) => {
    return (
      <div className={Styles.progressBarWrapper}>
        <div className={Styles.field}>
          <span>
            {props.tech}
          </span>
          <span>
            {props.rating}
          </span>
        </div>
        <div className={Styles.progress}>
        <div className={Styles.progressLine} style={{ width: props.rating}}/>
        </div>
      </div>
    );
};

export default DotLoader;
