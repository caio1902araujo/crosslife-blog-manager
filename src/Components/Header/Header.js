import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ListOptionsUser from '../ListOptions/ListOptionsUser';
import Tooltip from '../Tooltip/Tooltip';
import {ReactComponent as  Magnifier} from '../../Assets/magnifier.svg';
import {ReactComponent as Sun} from '../../Assets/sun.svg';
import {ReactComponent as User} from '../../Assets/user.svg';

const Header = () => {
  const [active, setActive] = React.useState(false);
  const buttonVisibilityControlRef = React.useRef(null); 

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.wrapper}`}>
        <Link to="/noticias"> <Logo /> </Link>

        <Link to="pesquisa" className={styles.itemHeader}>
          <Tooltip description='Pesquisar'>
            <Magnifier/>
          </Tooltip>
        </Link>

        <div className={styles.itemHeader}>
          <Tooltip description='Tema'>
            <Sun/>
          </Tooltip>
        </div>

        <div className={styles.itemHeader} onClick={() => {setActive(!active)}} aria-controls="listOptionsUser" ref={buttonVisibilityControlRef}>
          <Tooltip description='Usuário'>
            <User/>
          </Tooltip>
        </div>
        
        {
          active && 
          <ListOptionsUser id="listOptionsUser" setActive={setActive} buttonVisibilityControlRef={buttonVisibilityControlRef}/>
        }
        
      </nav>
    </header>
  )
}

export default Header
