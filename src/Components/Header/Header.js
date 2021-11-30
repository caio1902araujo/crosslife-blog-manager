import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Hooks/useAuth';
import Logo from '../Logo/Logo';
import ListOptions from '../ListOptions/ListOptions';
import {ReactComponent as  Magnifier} from '../../Assets/magnifier.svg';
import {ReactComponent as Sun} from '../../Assets/sun.svg';
import {ReactComponent as User} from '../../Assets/user.svg';

const Header = () => {
  const {signOut} = React.useContext(AuthContext);
  const [active, setActive] = React.useState(false);
  

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.wrapper}`}>
        <Link to="/noticias"> <Logo /> </Link>

        <Link to="pesquisa" className={styles.itemHeader}><Magnifier/></Link>
        <div className={styles.itemHeader}><Sun/></div>
        <div className={styles.itemHeader} onClick={() => {setActive(!active)}} aria-controls="listOptionsUser"><User/></div>
        
        {
          active && 
          <ListOptions id="listOptionsUser" setActive={setActive} classOptions="listOptionsUser">
            <li><Link to=''>Minhas noticias</Link></li>
            <li><button>Tema: escuro</button></li>
            <li><button onClick={signOut}>Sair</button></li>
          </ListOptions>
        }
        
      </nav>
    </header>
  )
}

export default Header
