import React from 'react'

const Button = ({children, styleButton, ...props}) => {
  return (
    <button {...props} className={styleButton}>{children}</button>
  )
}

export default Button
