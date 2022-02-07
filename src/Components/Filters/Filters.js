import React from 'react';
import styles from './Filters.module.css';
import useSelect from '../../Hooks/useSelect';
import useCategory from '../../Hooks/useCategory';
import useChangeParams from '../../Hooks/useChangeParams';
import Select from '../Select/Select';
import CategoryList from '../CategoryList/CategoryList';
import PropTypes from 'prop-types';

const listItems = ["todos", "academia", "esportes", "fitness", "nutrição", "receitas", "saúde"];

const defautValues = {
  order: "asc",
  category: "todos"
};

const options = [
  {
    text: "Mais recente",
    value: "asc",
  },
  {
    text: "Mais antigo",
    value: "desc",
  },
];

const Filters = ({setQueryString}) => {
  const selectDate = useSelect(defautValues.order, options);
  const category = useCategory(defautValues.category, "todos");
  useChangeParams('order', selectDate.value, defautValues, setQueryString);
  useChangeParams('category', category.value, defautValues, setQueryString);

  return (
    <div className={styles.filters}>
      <CategoryList listItems={listItems} classCategory="categoriesFlex" {...category}/>
      <Select options={options} {...selectDate}/>
    </div>
  );
};

Filters.propTypes = {
  setQueryString: PropTypes.func.isRequired,
}

export default Filters;
