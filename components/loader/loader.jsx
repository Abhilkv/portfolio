import React from 'react';

import Styles from './loader.module.css';

const DotLoader = () => {
    return (
      <div className={Styles.dotLoaderDiv}>
        <div className={Styles.dotLoader}>
          <span className={Styles.dot} />
          <div className={Styles.dots}>
            <span className={Styles.dotElement}/>
            <span className={Styles.dotElement}/>
            <span className={Styles.dotElement}/>
          </div>
        </div>
        <h1 className={`${Styles.introText} ${Styles.positionText}`}>
          Code with a smile
        </h1>
        <div className={`${Styles.screener} ${Styles.positionText}`}/>
      </div>
    );
};

export default DotLoader;
