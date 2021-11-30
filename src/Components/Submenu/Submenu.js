import React from 'react';
import useOutsideClick from '../../Hooks/useOutsideClick';
import styles from './Submenu.module.css';

const Submenu = ({children, id, setActive}) => {
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, setActive);

  return (
    <nav id={id} ref={wrapperRef} className={`animeRight ${styles.nav}`}>
      {children}
    </nav>
  )
}

export default Submenu
