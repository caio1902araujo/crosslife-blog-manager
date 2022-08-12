import React from 'react';
import PropTypes from 'prop-types';

import useForm from '../../Hooks/useForm';

import Input from '../Input/Input';
import {ReactComponent as Magnifier} from '../../Assets/magnifier.svg';

import styles from './Search.module.css';

const Search = ({queryParams, setQueryParams}) => {
  const searchNews = useForm(false, queryParams.title ? queryParams.title : '');
  const regex = /^\s*$/; //regex to validate if there are any characters in the string

  const handleClick = () => {
    if(searchNews.value !== '' && !(regex.test(searchNews.value))){
      setQueryParams({...queryParams, 'title': searchNews.value.trim()});
    }
  }

  return (
    <div className={styles.wrapperSearch}>
      <button onClick={handleClick} className={styles.buttonSearch}>
        <Magnifier />
      </button>
      <Input id='searchNews' type='text' {...searchNews} />
    </div>
  );
};

Search.propTypes = {
  queryParams: PropTypes.object.isRequired,
  setQueryParams: PropTypes.func.isRequired,
}

export default Search;
