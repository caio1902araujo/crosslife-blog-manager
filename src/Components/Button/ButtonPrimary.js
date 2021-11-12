import React from 'react'
import styles from './Button.module.css'
const ButtonPrimary = ({children, ...props}) => {
  return (
    <button {...props} className={styles.buttonPrimary}>{children}</button>
  )
}

export default ButtonPrimary
