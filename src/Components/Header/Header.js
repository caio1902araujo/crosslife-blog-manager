import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Tooltip from '../Tooltip/Tooltip';
import ListOptionsUser from '../ListOptions/ListOptionsUser';
import {ReactComponent as  Magnifier} from '../../Assets/magnifier.svg';
import {ReactComponent as Theme} from '../../Assets/theme.svg';
import {ReactComponent as User} from '../../Assets/user.svg';

import styles from './Header.module.css';

const Header = () => {
  const [active, setActive] = React.useState(false);
  const [theme, setTheme] = React.useState('claro');
  const buttonVisibilityControlRef = React.useRef(null); 

  const changeTheme = () => {
    const currentTheme = theme === 'claro' ? 'escuro' : 'claro';
    setTheme(currentTheme);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.wrapper}`}>
        <div>
          <Link to='/noticias'> <Logo /> </Link>
        </div>

        <Link to='pesquisa' className={styles.itemHeader}>
          <Tooltip description='Pesquisar'>
            <Magnifier/>
          </Tooltip>
        </Link>

        <div className={styles.itemHeader} onClick={changeTheme}>
          <Tooltip description='Tema'>
            <Theme/>
          </Tooltip>
        </div>

        <div className={styles.itemHeader} onClick={() => {setActive(!active)}} aria-controls='listOptionsUser' ref={buttonVisibilityControlRef}>
          <Tooltip description='Usuário'>
            <User/>
          </Tooltip>
        </div>
        
        {
          active && 
          <ListOptionsUser id='listOptionsUser' setActive={setActive} theme={theme} changeTheme={changeTheme} buttonVisibilityControlRef={buttonVisibilityControlRef}/>
        }
        
      </nav>
    </header>
  )
}

export default Header;
