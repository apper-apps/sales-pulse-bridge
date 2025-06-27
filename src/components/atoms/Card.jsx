import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'default',
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  }

  const cardClasses = `
    bg-white rounded-xl shadow-card border border-gray-100
    ${hover ? 'hover:shadow-card-hover' : ''}
    ${paddingClasses[padding]}
    ${className}
    transition-shadow duration-200
  `

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className={cardClasses}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  )
}

export default Card