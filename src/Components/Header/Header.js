import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import {ReactComponent as  Magnifier} from '../../Assets/magnifier.svg';
import {ReactComponent as Sun} from '../../Assets/sun.svg';
import {ReactComponent as User} from '../../Assets/user.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <Link to="/noticias"> <Logo /> </Link>

        <Link to="pesquisa" className={styles.search}> <Magnifier/> </Link>
        <div className={styles.theme}><Sun/></div>
        <div className={styles.user}><User/></div>
      </div>
    </header>
  )
}

export default Header
