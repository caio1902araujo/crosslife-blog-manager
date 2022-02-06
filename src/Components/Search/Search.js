import React from 'react';
import styles from './Search.module.css';
import useForm from '../../Hooks/useForm';
import Input from '../Input/Input';
import {ReactComponent as Magnifier} from '../../Assets/magnifier.svg';

const Search = () => {
  const searchNews = useForm(false);
  const regex = /^\s*$/;

  const handleClick = () => {
    if(searchNews.value !== "" && !(regex.test(searchNews.value))){
      const url = new URL(window.location);
      url.searchParams.set('search', searchNews.value.trim());
      window.history.pushState({}, '', url);
    }
  }

  return (
    <div className={styles.wrapperSearch}>
      <button onClick={handleClick} className={styles.buttonSearch}>
        <Magnifier />
      </button>
      <Input id="searchNews" type="text" {...searchNews} />
    </div>
  );
};

export default Search;
