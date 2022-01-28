import React from 'react';
import styles from './CategoryList.module.css'
import ErrorPrimary from '../../Helper/Error/ErrorPrimary';
import PropTypes from 'prop-types';

const CategoryList = ({listItems, classCategory, error, handleClick, checkActive}) => {
  return (
    <>
      <ul className={styles[classCategory]} onClick={handleClick}>
        {listItems.map((listitem) => (
          <li key={listitem} data-value={listitem} className={styles[checkActive(listitem)]}>
            {listitem}
          </li>
        ))}
      </ul>
      {error && <ErrorPrimary error={error}/> }
    </>
  )
}

CategoryList.propTypes = {
  listItems: PropTypes.array,
  classCategory: PropTypes.string,
  error: PropTypes.string,
  handleClick: PropTypes.func,
  checkActive: PropTypes.func,
}

export default CategoryList
