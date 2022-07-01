// React
import React from 'react'

interface ButtonProps {
  children: any
  type?: 'button' | 'submit'
  variant?: string | 'primary'

  onClick?: Function
}

const handleStyles = (variant: string) => {
  let defaultClasses = 'px-4 py-1 rounded'
  let variantClasses = ''

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-orange-500 hover:bg-orange-600 text-orange-100 hover:text-orange-50'
      break
    default:
      variantClasses = 'bg-gray-400 text-gray-50'
  }

  return defaultClasses + ' ' + variantClasses
}

const Button = ({ children, type = 'button', variant, onClick }: ButtonProps) => {
  let classes = handleStyles(variant)

  return (
    <button type={type} className={classes} onClick={() => onClick}>
      {children ?? 'Go'}
    </button>
  )
}

export default Button
