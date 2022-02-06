import React from 'react';
import styles from './Filters.module.css';
import useSelect from '../../Hooks/useSelect';
import useCategory from '../../Hooks/useCategory';
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
  
  React.useEffect(()=>{
    const url = new URL(window.location);
    const params = url.searchParams;
    const valuesParams = {
      order: selectDate.value,
      category: category.value,
    }
    
    for(let param in valuesParams){
      if(params.get(param) || valuesParams[param] !== defautValues[param]){
        params.set(param, valuesParams[param]);
        window.history.pushState({}, '', url);
        setQueryString(params.toString());
      }
    }
  },[selectDate.value, category.value, setQueryString]);

  return (
    <div className={styles.filters}>
      <CategoryList listItems={listItems} classCategory="categoriesFlex" {...category}/>
      <Select options={options} {...selectDate}/>
    </div>
  );
};

Filters.propTypes = {
  setQueryString: PropTypes.func,
}

export default Filters;
