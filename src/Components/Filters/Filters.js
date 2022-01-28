import React from 'react';
import styles from './Filters.module.css';
import Select from '../Select/Select';
import CategoryList from '../CategoryList/CategoryList';
import PropTypes from 'prop-types';

const listItems = ["todos", "academia", "esportes", "fitness", "nutrição", "receitas", "saúde"];
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

const Filters = ({category}) => {
  return (
    <div className={styles.filters}>
      <CategoryList listItems={listItems} classCategory="categoriesFlex" {...category}/>
      <Select valueDefault="asc" options={options}/>
    </div>
  );
};

Filters.propTypes = {
  category: PropTypes.object.isRequired,
}

export default Filters;

