import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as ErrorIcon} from '../../Assets/error.svg';

import styles from './Warning.module.css';

const Warning = ({title, description}) => {
  return (
    <section className={styles.wrapperWarning}>
      <div>
        <ErrorIcon />
      </div>
      
      <div className={styles.contentError}>
        <h2 className='subtitle'>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}

Warning.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Warning;
