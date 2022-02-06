import React from 'react';
import styles from './Filters.module.css';
import useSelect from '../../Hooks/useSelect';
import useCategory from '../../Hooks/useCategory';
import Select from '../Select/Select';
import CategoryList from '../CategoryList/CategoryList';

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

const defautValues = {
  select: "asc",
  category: "todos"
}

const configParams = [
  {
    key: "order",
    value: defautValues.select,
  },
  {
    key: "category",
    value: defautValues.category,
  }
]

const Filters = () => {
  const selectDate = useSelect(defautValues.select, options);
  const category = useCategory(defautValues.category, "todos");
  
  React.useEffect(()=>{
    const url = new URL(window.location);
    const params = url.searchParams;
    const filterValues = {
      order: selectDate.value,
      category: category.value,
    }
    
    const param = configParams.find((param) => {
      if (param.value !== filterValues[param.key]){
        param.value = filterValues[param.key];
        return param;
      }
      else return null;
    });
    
    if(param){
      params.set(param.key, param.value);
      window.history.pushState({}, '', url);
    }
    
  },[selectDate, category]);

  return (
    <div className={styles.filters}>
      <CategoryList listItems={listItems} classCategory="categoriesFlex" {...category}/>
      <Select options={options} {...selectDate}/>
    </div>
  );
};

export default Filters;
