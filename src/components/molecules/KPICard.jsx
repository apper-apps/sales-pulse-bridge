import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const KPICard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive', 
  icon, 
  loading = false,
  className = '' 
}) => {
  const changeColors = {
    positive: 'text-success',
    negative: 'text-error',
    neutral: 'text-gray-500'
  }

  const changeIcons = {
    positive: 'TrendingUp',
    negative: 'TrendingDown',
    neutral: 'Minus'
  }

  if (loading) {
    return (
      <Card className={`${className}`} hover>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded shimmer mb-3"></div>
            <div className="h-8 bg-gray-200 rounded shimmer mb-2"></div>
            <div className="h-3 bg-gray-200 rounded shimmer w-20"></div>
          </div>
          <div className="ml-4">
            <div className="h-8 w-8 bg-gray-200 rounded-full shimmer"></div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className={`${className}`} hover>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            {value}
          </motion.div>
          {change && (
            <div className={`flex items-center text-sm ${changeColors[changeType]}`}>
              <ApperIcon name={changeIcons[changeType]} size={16} className="mr-1" />
              {change}
            </div>
          )}
        </div>
        {icon && (
          <div className="ml-4 p-3 bg-primary-50 rounded-full">
            <ApperIcon name={icon} size={24} className="text-primary-500" />
          </div>
        )}
      </div>
    </Card>
  )
}

export default KPICard