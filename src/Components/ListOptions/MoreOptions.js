import React from 'react';
import styles from './ListOptions.module.css';
import useOutsideClick from '../../Hooks/useOutsideClick';
import { Link } from 'react-router-dom';
import {ReactComponent as Pencil} from '../../Assets/pencil.svg';
import {ReactComponent as Trash} from '../../Assets/trash.svg';

const icons = {
  edit: <Pencil/>,
  remove: <Trash/>,
}

const MoreOptions = ({id, listItems, setActive, buttonVisibilityControlRef}) => {
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, setActive, buttonVisibilityControlRef);
  return (
    <ul id={id} ref={wrapperRef} className={`animeHeight ${styles.listOptions} ${styles.moreOptions}`}>
      {
        listItems.map((item) => (
          item.link ? 
          <li><Link to={item.link}>{icons[item.icon]} <span>{item.content}</span></Link></li>:
          <li><button onClick={item.method}>{icons[item.icon]} <span>{item.content}</span></button></li>
        ))
      }
    </ul>
  )
}

export default MoreOptions
