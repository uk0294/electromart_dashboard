// components/dashboard/revenue-trend.tsx - Simplified with single graph
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '@/lib/utils';
import { enhancedRevenueData, SCALING_FACTORS } from '@/lib/data/overview';

interface RevenueTrendProps {
  currentMonth: string;
}

// Custom tooltip for Revenue, Orders, and AOV
const MetricsTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium text-gray-800 mb-1">{label}</p>
        <p className="text-blue-600 mb-1">
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
          Revenue: {formatCurrency(payload[0].value)}
        </p>
        <p className="text-green-600 mb-1">
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
          Orders: {Math.round(payload[1].value / SCALING_FACTORS.ORDERS).toLocaleString()}
        </p>
        <p className="text-purple-600">
          <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-1"></span>
          Avg Order Value: {formatCurrency(payload[2].value / SCALING_FACTORS.AOV)}
        </p>
      </div>
    );
  }
  return null;
};

export default function RevenueTrend({ currentMonth }: RevenueTrendProps) {
  const [metricsData, setMetricsData] = useState(enhancedRevenueData);
  
  // Highlight current month on initial render
  useEffect(() => {
    // Update metrics data to highlight current month
    setMetricsData(
      enhancedRevenueData.map(item => ({
        ...item,
        isCurrentMonth: item.name === currentMonth
      }))
    );
  }, [currentMonth]);

  // Custom dot renderer function for metrics chart
  const renderMetricsDot = (props: any) => {
    const { cx, cy, payload, dataKey, stroke } = props;
    
    // Make the current month's dot larger and highlighted
    if (payload.isCurrentMonth) {
      return (
        <circle 
          cx={cx} 
          cy={cy} 
          r={6} 
          fill={stroke} 
          stroke="#fff" 
          strokeWidth={2} 
        />
      );
    }
    return <circle cx={cx} cy={cy} r={4} fill={stroke} />;
  };

  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={metricsData} 
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" />
          <YAxis 
            yAxisId="left" 
            orientation="left"
            tickFormatter={(value) => `$${value / 1000000}M`}
          />
          <Tooltip content={<MetricsTooltip />} />
          <Legend />
          
          {/* Revenue Line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke="#8884d8"
            strokeWidth={2}
            dot={renderMetricsDot}
            activeDot={{ r: 8 }}
          />
          
          {/* Orders Line (scaled to fit) */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey={(item) => item.total_orders * SCALING_FACTORS.ORDERS}
            name="Orders"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={renderMetricsDot}
          />
          
          {/* Average Order Value Line (scaled to fit) */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey={(item) => item.average_order_value * SCALING_FACTORS.AOV}
            name="Avg Order Value"
            stroke="#9c27b0"
            strokeWidth={2}
            dot={renderMetricsDot}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}