import React from 'react';

import Styles from './resume.module.css';


const Resume = () => {
    return (
      <div className={Styles.resumeContainer}  id="about">
        <a target='_blank' href="https://drive.google.com/drive/folders/1TXXPmxu4IAEXepJ69iHVy2sO-CC5ncN8?usp=sharing" className={Styles.resumeButton} rel="noreferrer">
          DOWNLOAD RESUME
        </a>
        <div className={Styles.about}>
          <h2 className={`${Styles.title} wow bounceInLeft`} data-wow-duration="1s" data-wow-delay="0.1s">About Me</h2>
          <span className={`${Styles.content}  wow bounceInRight`} data-wow-duration="1s" data-wow-delay="0.2s"  id="skills">
            A Software Engineer with 2+ years of proven track record and experience in
            analysis, design, development, testing and implementation of projects in an
            agile manner. Looking forward to associating with a progressive and
            innovative organization that will provide me opportunities to improve my
            knowledge and more opportunities in R&D.
          </span>
        </div>
      </div>
    );
};

export default Resume;