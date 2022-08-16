import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as Error} from '../../Assets/error.svg';
import { ReactComponent as NotFound } from '../../Assets/notFound.svg';

import styles from './Warning.module.css';

const svgs = {
  notFound: <NotFound />,
  error: <Error />,
};


const Warning = ({title, description, svg}) => {
  return (
    <section className={styles.wrapperWarning}>
      <div>
        {svgs[svg]}
      </div>
      
      <div className={styles.contentError}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}

Warning.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  svg: PropTypes.string,
}

export default Warning;
