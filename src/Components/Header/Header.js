import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Hooks/useAuth';
import Logo from '../Logo/Logo';
import Submenu from '../Submenu/Submenu';
import {ReactComponent as  Magnifier} from '../../Assets/magnifier.svg';
import {ReactComponent as Sun} from '../../Assets/sun.svg';
import {ReactComponent as User} from '../../Assets/user.svg';

const Header = () => {
  const {signOut} = React.useContext(AuthContext);
  const [active, setActive] = React.useState(false);
  

  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <Link to="/noticias"> <Logo /> </Link>

        <Link to="pesquisa" className={styles.itemHeader}><Magnifier/></Link>
        <div className={styles.itemHeader}><Sun/></div>
        <div className={styles.itemHeader} onClick={() => {setActive(!active)}} aria-controls="submenuUser"><User/></div>
        
        {
          active && 
          <Submenu id="submenuUser" setActive={setActive}>
            <Link to=''>Suas noticias</Link>
            <Link to='estatisticas'>Estatisticas</Link>
            <button onClick={signOut}>Sair</button>
          </Submenu>
        }
        
      </div>
    </header>
  )
}

export default Header
