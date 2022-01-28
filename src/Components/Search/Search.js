import React from 'react';
import styles from './Search.module.css';
import Input from '../Input/Input';
import {ReactComponent as Magnifier} from '../../Assets/magnifier.svg';
import PropTypes from 'prop-types';

const Search = ({searchNews}) => {
  return (
    <div className={styles.wrapperSearch}>
      <button className={styles.buttonSearch}>
        <Magnifier />
      </button>
      <Input id="searchNews" type="text" {...searchNews} />
    </div>
  );
};

Search.propTypes = {
  searchNews: PropTypes.object.isRequired,
}


export default Search;
