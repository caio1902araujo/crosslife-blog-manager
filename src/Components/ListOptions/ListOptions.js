import React from 'react';
import useOutsideClick from '../../Hooks/useOutsideClick';
import styles from './ListOptions.module.css';

const ListOptions = ({children, id, setActive, classOptions}) => {
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, setActive);
  console.log(children)
  return (
    <ul id={id} ref={wrapperRef} className={`animeRight ${styles.listOptions} ${styles[classOptions]}`}>
      {children}
    </ul>
  )
}

export default ListOptions
