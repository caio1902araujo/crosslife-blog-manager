import React from 'react';
import PropTypes from 'prop-types';

import useSelect from '../../Hooks/useSelect';
import useCategory from '../../Hooks/useCategory';

import Select from '../Select/Select';
import CategoryList from '../CategoryList/CategoryList';

import styles from './Filters.module.css';

const listItems = ['todos', 'academia', 'esportes', 'fitness', 'nutrição', 'receitas', 'saúde'];

const options = [
  {
    text: 'Mais recente',
    value: 'DESC',
  },
  {
    text: 'Mais antigo',
    value: 'ASC',
  },
];

const Filters = ({queryParams, setQueryParams}) => {
  const order = queryParams.order ? queryParams.order : 'DESC';
  const categoria = queryParams.category ? queryParams.category : 'todos';
  const selectData = useSelect(order, options);
  const categoryData = useCategory(false, categoria);

  React.useEffect(() => {
    if(categoryData.value !== categoria){
      if(categoryData.value !== 'todos'){
        setQueryParams({...queryParams, 'category': categoryData.value});
      }
      else{
        delete queryParams.category;
        setQueryParams({...queryParams});
      }
    }

    if(selectData.value !== order){
      setQueryParams({...queryParams, 'order': selectData.value});
    }

  }, [selectData.value, categoryData.value])

  return (
    <div className={styles.filters}>
      <CategoryList
        listItems={listItems}
        classCategory='categoriesFlex'
        error={categoryData.error}
        handleClick={categoryData.handleClick}
        checkActive={categoryData.checkActive}
      />

      <Select
        options={options}
        text={selectData.text}
        active={selectData.active}
        setActive={selectData.setActive}
        handleClick={selectData.handleClick}
      />
    </div>
  );
};

Filters.propTypes = {
  queryParams: PropTypes.object.isRequired,
  setQueryParams: PropTypes.func.isRequired,
}


export default Filters;
