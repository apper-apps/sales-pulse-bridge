import React from 'react'
import Input from '@/components/atoms/Input'

const DateRangePicker = ({ 
  startDate, 
  endDate, 
  onStartDateChange, 
  onEndDateChange,
  className = ''
}) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <div className="flex-1">
        <Input
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          icon="Calendar"
        />
      </div>
      <div className="flex-1">
        <Input
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          icon="Calendar"
        />
      </div>
    </div>
  )
}

export default DateRangePicker