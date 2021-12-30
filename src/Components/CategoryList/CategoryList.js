import React from 'react';
import styles from './CategoryList.module.css'
import ErrorPrimary from '../../Helper/Error/ErrorPrimary';
import PropTypes from 'prop-types';

const CategoryList = ({setCategory, category, setErrorCategory, errorCategory}) => {
  const handleClick = ({target}) => {
    setCategory(target.dataset.value);
    if(errorCategory !== "") setErrorCategory("");
  }

  const checkActive = (value) => {
    return value === category ? "active" : ""
  }

  return (
    <>
      <ul className={styles.categories} onClick={handleClick}>
        <li data-value="academia" className={checkActive("academia")}>Academia</li>
        <li data-value="esportes" className={checkActive("esportes")}>Esportes</li>
        <li data-value="fitness" className={checkActive("fitness")}>Fitness</li>
        <li data-value="nutrição" className={checkActive("nutrição")}>Nutrição</li>
        <li data-value="receitas" className={checkActive("receitas")}>Receitas</li>
        <li data-value="saúde" className={checkActive("saúde")}>Saúde</li>
      </ul>
      <ErrorPrimary error={errorCategory}/> 
    </>
  )
}

CategoryList.propTypes = {
  category: PropTypes.string.isRequired,
  errorCategory: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  setErrorCategory: PropTypes.func.isRequired,
}

export default CategoryList
