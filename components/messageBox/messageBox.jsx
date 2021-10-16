import React from 'react';

import Styles from './messageBox.module.css';

const MessageBox = (props) => {
    return (
      <span className={Styles.message}>{props.message}</span>
    );
};

export default MessageBox;