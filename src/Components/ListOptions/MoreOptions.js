import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useOutsideClick from '../../Hooks/useOutsideClick';

import {ReactComponent as Pencil} from '../../Assets/pencil.svg';
import {ReactComponent as Trash} from '../../Assets/trash.svg';

import styles from './ListOptions.module.css';

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
        listItems.map((item, index) => (
          item.link ? 
          <li key={index}><Link to={item.link}>{icons[item.icon]} <span>{item.content}</span></Link></li>:
          <li key={index}><button onClick={item.method}>{icons[item.icon]} <span>{item.content}</span></button></li>
        ))
      }
    </ul>
  )
}

MoreOptions.propTypes = {
  id: PropTypes.string.isRequired,
  listItems: PropTypes.array.isRequired,
  setActive: PropTypes.func.isRequired,
  buttonVisibilityControlRef: PropTypes.object.isRequired,
}

export default MoreOptions;
