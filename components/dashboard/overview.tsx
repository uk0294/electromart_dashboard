// components/dashboard/overview.tsx - Fixed unused props
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import RevenueTrend from './revenue-trend';
import { 
  rawMonthlyData,
  COLORS 
} from '@/lib/data/common';
import {
  yearlyData
} from '@/lib/data/overview';
import { formatCurrency } from '@/lib/utils';

// Updated props interface to match the enhanced data format
interface OverviewProps {
  currentMonth: string;
  currentMonthData: {
    name: string;
    revenue: number;
    total_orders: number;
    average_order_value: number;
    isCurrentMonth?: boolean;
  };
}

export default function Overview({ currentMonth }: OverviewProps) {
  const [showYearlyData, setShowYearlyData] = useState(false);
  
  // Find the raw data for the current month
  const monthParts = currentMonth.split(' ');
  const monthName = monthParts[0];
  const yearSuffix = monthParts[1];
  const fullYear = parseInt(`20${yearSuffix}`);
  
  // Convert month name to number
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthNumber = monthNames.indexOf(monthName) + 1;
  
  // Find the raw data entry for this month
  const currentMonthRawData = rawMonthlyData.find(
    item => item.Month === monthNumber && item.Year === fullYear
  ) || rawMonthlyData[0];
  
  // Use either monthly or yearly data based on toggle
  const displayData = showYearlyData ? yearlyData : currentMonthRawData;
  const displayPeriod = showYearlyData ? 'Full Year' : currentMonth;

  // Get data for display with proper type handling
  const displayRevenue = displayData.GMV;
  const displayInvestment = displayData["Total Investment"];
  const displayROI = displayData.ROI_Multiple;
  
  // Handle NPS Score with different property names
  const displayNPS = 'NPS Score' in displayData
    ? displayData["NPS Score"] 
    : ('NPS_Score' in displayData ? displayData.NPS_Score : 0);
    
  const displayInsight = displayData["Key Insight"];
  
  // Create marketing channel distribution data for pie chart
  const channelDistribution = [
    { 
      name: 'TV', 
      value: Math.round(displayData["TV Percentage"] || 0),
      id: 'tv'
    },
    { 
      name: 'Digital', 
      value: Math.round(displayData["Digital Percentage"] || 0),
      id: 'digital'
    },
    { 
      name: 'Sponsorship', 
      value: Math.round(displayData["Sponsorship Percentage"] || 0),
      id: 'sponsorship'
    },
    { 
      name: 'Online Marketing', 
      value: Math.round(displayData["Online Marketing Percentage"] || 0),
      id: 'online-marketing'
    },
    { 
      name: 'Affiliates', 
      value: Math.round(displayData["Affiliates Percentage"] || 0),
      id: 'affiliates'
    },
    { 
      name: 'SEM', 
      value: Math.round(displayData["SEM Percentage"] || 0),
      id: 'sem'
    },
    { 
      name: 'Radio', 
      value: Math.round(displayData["Radio Percentage"] || 0),
      id: 'radio'
    },
    { 
      name: 'Other', 
      value: Math.round(displayData["Other Percentage"] || 0),
      id: 'other'
    }
  ].filter(item => item.value > 0); // Remove zero-value items

  return (
    <div className="space-y-6">
      {/* Toggle button for yearly/monthly view */}
      <div className="flex justify-end">
        <button 
          onClick={() => setShowYearlyData(!showYearlyData)}
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
        >
          <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="18" rx="2" ry="2"></rect>
            <line x1="2" y1="10" x2="22" y2="10"></line>
            <line x1="7" y1="2" x2="7" y2="6"></line>
            <line x1="17" y1="2" x2="17" y2="6"></line>
          </svg>
          <span>{showYearlyData ? "Showing Full Year" : "View Full Year"}</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden border-l-4 border-l-blue-500">
          <CardHeader className="pb-2 bg-blue-50/50">
            <CardTitle className="text-sm font-medium text-blue-800">Revenue ({displayPeriod})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">{formatCurrency(displayRevenue)}</div>
            <div className="mt-2 text-xs text-gray-500">
              Monthly revenue
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-l-4 border-l-green-500">
          <CardHeader className="pb-2 bg-green-50/50">
            <CardTitle className="text-sm font-medium text-green-800">Marketing Spend ({displayPeriod})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">{formatCurrency(displayInvestment)}</div>
            <div className="mt-2 text-xs text-gray-500">
              Allocated for {currentMonth}
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-l-4 border-l-purple-500">
          <CardHeader className="pb-2 bg-purple-50/50">
            <CardTitle className="text-sm font-medium text-purple-800">ROI ({displayPeriod})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-800">{displayROI.toFixed(2)}x</div>
            <div className="mt-2 text-xs text-gray-500">
              Return on marketing investment
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-l-4 border-l-amber-500">
          <CardHeader className="pb-2 bg-amber-50/50">
            <CardTitle className="text-sm font-medium text-amber-800">NPS Score ({displayPeriod})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-800">{displayNPS}</div>
            <div className="mt-2 text-xs text-gray-500">
              Customer satisfaction
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Side-by-side charts layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <Card className="overflow-hidden shadow-sm border border-gray-200 bg-white">
          <CardHeader className="border-b bg-blue-50/30 p-4">
            <CardTitle className="text-blue-800 font-bold text-lg">Revenue Trend</CardTitle>
            <CardDescription className="text-blue-600 text-sm">
              Monthly revenue, orders, and average order value
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <RevenueTrend currentMonth={currentMonth} />
          </CardContent>
        </Card>

        {/* Marketing Channel Distribution */}
        <Card className="overflow-hidden shadow-sm border border-gray-200 bg-white">
          <CardHeader className="border-b bg-green-50/30 p-4">
            <CardTitle className="text-teal-800 font-bold text-lg">Marketing Channel Distribution</CardTitle>
            <CardDescription className="text-teal-600 text-sm">
              Spend allocation by channel ({displayPeriod})
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({name, value}) => `${name}: ${value}%`}
                  >
                    {channelDistribution.map((entry, index) => (
                      <Cell key={entry.id} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      <Alert className="bg-blue-50 border border-blue-200">
        <div className="flex items-center">
          <Info className="h-5 w-5 text-blue-500 mr-2" />
          <AlertTitle className="text-blue-800 font-semibold">Key Insights for {displayPeriod}</AlertTitle>
        </div>
        <AlertDescription>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">{displayInsight}</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}