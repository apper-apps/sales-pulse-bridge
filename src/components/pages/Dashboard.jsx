import React from 'react'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import KPICard from '@/components/molecules/KPICard'
import DateRangePicker from '@/components/molecules/DateRangePicker'
import RefreshButton from '@/components/molecules/RefreshButton'

const Dashboard = () => {
  // Sample KPI data
  const kpiData = [
    { title: 'Total Sales', value: '$125,000', change: '+12%', trend: 'up' },
    { title: 'Active Users', value: '2,847', change: '+5%', trend: 'up' },
    { title: 'Conversion Rate', value: '3.2%', change: '-2%', trend: 'down' },
    { title: 'Revenue Growth', value: '18%', change: '+8%', trend: 'up' }
  ]

  const handleDateRangeChange = (startDate, endDate) => {
    console.log('Date range changed:', startDate, endDate)
  }

  const handleRefresh = () => {
    console.log('Dashboard refreshed')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sales Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor your sales performance and key metrics</p>
          </div>
          <div className="flex gap-4">
            <DateRangePicker onDateRangeChange={handleDateRangeChange} />
            <RefreshButton onRefresh={handleRefresh} />
          </div>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <KPICard
              key={index}
              title={kpi.title}
              value={kpi.value}
              change={kpi.change}
              trend={kpi.trend}
            />
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-gray-500">Chart placeholder - integrate with ApexCharts</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-sm">New order #1234</span>
                <span className="text-xs text-gray-500">2 min ago</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-sm">Payment received</span>
                <span className="text-xs text-gray-500">5 min ago</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-sm">Customer registered</span>
                <span className="text-xs text-gray-500">10 min ago</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard