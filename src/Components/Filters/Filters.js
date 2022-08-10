import React from 'react';
import PropTypes from 'prop-types';

import useSelect from '../../Hooks/useSelect';
import useCategory from '../../Hooks/useCategory';

import Select from '../Select/Select';
import CategoryList from '../CategoryList/CategoryList';

import styles from './Filters.module.css';

const listItems = ["todos", "academia", "esportes", "fitness", "nutrição", "receitas", "saúde"];

const defautValues = {
  order: "DESC",
  category: "todos"
};

const options = [
  {
    text: "Mais recente",
    value: "DESC",
  },
  {
    text: "Mais antigo",
    value: "ASC",
  },
];

const Filters = ({setSearchParams, params}) => {
  const selectData = useSelect(defautValues.order, options);
  const categoryData = useCategory(defautValues.category, "todos");

  React.useEffect(() => {
    const categoria = params.category || 'todos';
    const order = params.order || 'DESC';

    if(categoryData.value !== categoria){
      if(categoryData.value !== 'todos'){
        setSearchParams({...params, 'category': categoryData.value});
      }
      else{
        delete params.category;
        setSearchParams({...params})
      }
    }

    if(selectData.value !== order){
      setSearchParams({...params, 'order': selectData.value});
    }

  }, [selectData.value, categoryData.value])

  return (
    <div className={styles.filters}>
      <CategoryList
        listItems={listItems}
        classCategory="categoriesFlex"
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
  setSearchParams: PropTypes.func.isRequired,
}

export default Filters;
