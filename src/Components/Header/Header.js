import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ListOptionsUser from '../ListOptions/ListOptionsUser';
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

        <Link to="pesquisa" className={styles.itemHeader}><Magnifier/></Link>
        <div className={styles.itemHeader}><Sun/></div>
        <div className={styles.itemHeader} onClick={() => {setActive(!active)}} aria-controls="listOptionsUser" ref={buttonVisibilityControlRef}><User/></div>
        
        {
          active && 
          <ListOptionsUser id="listOptionsUser" setActive={setActive} buttonVisibilityControlRef={buttonVisibilityControlRef}/>
        }
        
      </nav>
    </header>
  )
}

export default Header
