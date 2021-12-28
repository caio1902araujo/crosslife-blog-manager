import React from 'react';
import styles from './ListOptions.module.css';
import useOutsideClick from '../../Hooks/useOutsideClick';
import { AuthContext } from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const ListOptionsUser = ({id, setActive, buttonVisibilityControlRef}) => {
  const {signOut} = React.useContext(AuthContext);
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, setActive, buttonVisibilityControlRef);

  return (
    <ul id={id} ref={wrapperRef} className={`animeRight ${styles.listOptions} ${styles.listOptionsUser}`}>
      <li><Link to=''>Minhas noticias</Link></li>
      <li><button>Tema: escuro</button></li>
      <li><button onClick={signOut}>Sair</button></li>
    </ul>
  )
}

export default ListOptionsUser
