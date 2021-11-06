import React from 'react'
import styles from './Button.module.css'
const Button = ({children, styleButton, ...props}) => {
  return (
    <button {...props} className={`${styles.button} ${styles[styleButton]}`}>{children}</button>
  )
}

export default Button
