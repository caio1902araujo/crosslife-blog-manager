import React from 'react';
import styles from './ListOptions.module.css';
import useOutsideClick from '../../Hooks/useOutsideClick';
import { AuthContext } from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListOptionsUser = ({id, setActive, theme, changeTheme, buttonVisibilityControlRef}) => {
  const {signOut} = React.useContext(AuthContext);
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, setActive, buttonVisibilityControlRef);

  return (
    <ul id={id} ref={wrapperRef} className={`animeRight ${styles.listOptions} ${styles.listOptionsUser}`}>
      <li><Link to=''>Minhas noticias</Link></li>
      <li><button onClick={changeTheme}>Tema: {theme}</button></li>
      <li><button onClick={signOut}>Sair</button></li>
    </ul>
  )
}

ListOptionsUser.propTypes = {
  id: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  buttonVisibilityControlRef: PropTypes.object.isRequired,
}

export default ListOptionsUser
