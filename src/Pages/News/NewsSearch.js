import React from 'react';
import useForm from '../../Hooks/useForm';
import useCategory from '../../Hooks/useCategory';
import Feed from '../../Components/Feed/Feed';
import Search from '../../Components/Search/Search';
import Filters from '../../Components/Filters/Filters';

const NewsSearch = () => {
  const searchNews = useForm(false);
  const category = useCategory(false, "todos");

  return(
    <>
      <form>
        <Search searchNews={searchNews}/>
        <Filters category={category} />
      </form>
      <Feed />
    </>
  );
};

export default NewsSearch;
