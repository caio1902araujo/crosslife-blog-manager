import React from 'react';
import styles from './Alert.module.css';
import { AuthContext } from '../../Hooks/useAuth';
import { ReactComponent as Cross } from '../../Assets/cross.svg';
import PropTypes from 'prop-types';

const Alert = ({message, typeAlert}) => {
  const {setAlert} = React.useContext(AuthContext)
  const interval = setTimeout(()=>{setAlert(null)}, 3000);

  const handleClick = () => {
    setAlert(null);
    clearTimeout(interval);
  }

  return (
    <div className={`${styles.wrapperAlert} ${styles[typeAlert]} ${styles.animeTop}`}>
      <p className={styles.alertMessage}>{message}</p>
      <button className={styles.buttonClose} onClick={handleClick}>
        <Cross />
      </button>
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  typeAlert: PropTypes.string.isRequired,
}

export default Alert
