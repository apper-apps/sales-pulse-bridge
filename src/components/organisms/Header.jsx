import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary-500 rounded-lg">
            <ApperIcon name="BarChart3" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-500">Sales Pulse</h1>
            <p className="text-sm text-gray-600">Real-time Analytics Dashboard</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <ApperIcon name="Activity" size={16} />
          <span>Live Data</span>
        </div>
      </div>
    </header>
  )
}

export default Header