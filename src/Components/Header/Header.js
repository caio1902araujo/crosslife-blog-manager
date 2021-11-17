import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import {ReactComponent as  Magnifier} from '../../Assets/magnifier.svg';
import {ReactComponent as Sun} from '../../Assets/sun.svg';
import {ReactComponent as User} from '../../Assets/user.svg';
import { AuthContext } from '../../Hooks/useAuth';

const Header = () => {
  const [active, setActive] = React.useState(false);
  
  const {signOut} = React.useContext(AuthContext);
  
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <Link to="/noticias"> <Logo /> </Link>

        <Link to="pesquisa" className={styles.itemHeader}><Magnifier/></Link>
        <div className={styles.itemHeader}><Sun/></div>
        <div className={styles.itemHeader} onClick={() => setActive(!active)} aria-controls="submenuUser"><User/></div>

        <nav id="submenuUser" className={`${active ? "animeRight" : ""} ${styles.nav}`}>
          <Link to=''>Suas noticias</Link>
          <Link to='estatisticas'>Estatisticas</Link>
          <button onClick={signOut}>Sair</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
