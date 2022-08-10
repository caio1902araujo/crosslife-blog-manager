import React from 'react';
import PropTypes from 'prop-types';

import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary';

import styles from './HeaderNews.module.css';

const HeaderNews = ({title, buttonPrimary, buttonSecondary}) => {
  return (
    <header className={styles.headerNews}>
      <h2 className='title'>{title}</h2>
      <div className={styles.groupButtons}>
        {buttonPrimary && <ButtonPrimary onClick={buttonPrimary.onClick}>{buttonPrimary.content}</ButtonPrimary>}
        {buttonSecondary && <ButtonSecondary onClick={buttonSecondary.onClick}>{buttonSecondary.content}</ButtonSecondary>}
      </div>
    </header>
  )
}


HeaderNews.propTypes = {
  title: PropTypes.string.isRequired,
  buttonPrimary: PropTypes.object,
  buttonSecondary: PropTypes.object,
}

export default HeaderNews;
