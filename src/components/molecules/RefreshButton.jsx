import React from 'react'
import Button from '@/components/atoms/Button'

const RefreshButton = ({ 
  onRefresh, 
  loading = false, 
  lastRefresh,
  className = '' 
}) => {
  const formatLastRefresh = (timestamp) => {
    if (!timestamp) return ''
    const now = new Date()
    const diff = Math.floor((now - timestamp) / 1000)
    
    if (diff < 60) return `${diff}s ago`
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    return `${Math.floor(diff / 3600)}h ago`
  }

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <Button
        variant="primary"
        icon="RefreshCw"
        loading={loading}
        onClick={onRefresh}
        className={loading ? 'animate-pulse' : ''}
      >
        Refresh Data
      </Button>
      {lastRefresh && (
        <p className="text-xs text-gray-500">
          Last updated: {formatLastRefresh(lastRefresh)}
        </p>
      )}
    </div>
  )
}

export default RefreshButton