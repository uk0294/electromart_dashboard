// components/dashboard/product-analysis.tsx - Fixed TypeScript any types
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Cell, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '@/lib/utils';

import {
  getCategoryDataForMonth,
  getSubcategoryDataForMonth,
  getTopProductsForMonth,
  getCategoryDataForYear,
  getSubcategoryDataForYear,
  getTopProductsForYear,
  topPerformingCategories,
  recommendedFocusProducts
} from '@/lib/data/product-analysis';

// Define props interface
interface ProductAnalysisProps {
  currentMonth: string;
}

// Define types for category and tooltip data
interface CategoryData {
  name: string;
  revenue: number;
  growth: number;
}

interface CategoryTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: CategoryData;
  }>;
  label?: string;
}

// Custom tooltip for the category chart
const CategoryTooltip = ({ active, payload, label }: CategoryTooltipProps) => {
  if (active && payload && payload.length) {
    // Extract the category data
    const data = payload[0].payload;
    
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium text-gray-800">{label}</p>
        <p className="text-blue-600 font-medium">{`Revenue: ${formatCurrency(data.revenue)}`}</p>
        <p className={data.growth >= 0 ? "text-green-600" : "text-red-600"}>
          {`Growth: ${data.growth >= 0 ? '+' : ''}${data.growth.toFixed(1)}%`}
        </p>
      </div>
    );
  }
  return null;
};

export default function ProductAnalysis({ currentMonth }: ProductAnalysisProps) {
  const [showYearlyData, setShowYearlyData] = useState(false);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [subcategoryData, setSubcategoryData] = useState<{ name: string; revenue: number }[]>([]);
  const [topProductsData, setTopProductsData] = useState<{ name: string; revenue: number }[]>([]);
  
  // Update data based on month and yearly toggle
  useEffect(() => {
    if (showYearlyData) {
      setCategoryData(getCategoryDataForYear());
      setSubcategoryData(getSubcategoryDataForYear());
      setTopProductsData(getTopProductsForYear());
    } else {
      setCategoryData(getCategoryDataForMonth(currentMonth));
      setSubcategoryData(getSubcategoryDataForMonth(currentMonth));
      setTopProductsData(getTopProductsForMonth(currentMonth));
    }
  }, [currentMonth, showYearlyData]);

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

      {/* Product Category Performance */}
      <Card className="overflow-hidden shadow-sm border border-gray-200 bg-white">
        <CardHeader className="border-b bg-blue-50/30 p-4">
          <CardTitle className="text-blue-800 font-bold text-lg">Product Category Performance</CardTitle>
          <CardDescription className="text-blue-600 text-sm">
            Revenue and growth by product category ({showYearlyData ? 'Full Year' : currentMonth})
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis 
                  yAxisId="left" 
                  orientation="left" 
                  tickFormatter={(value) => `$${value / 1000000}M`} 
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  tickFormatter={(value) => `${value}%`}
                  domain={[-100, 100]} 
                />
                <Tooltip content={<CategoryTooltip />} />
                <Legend wrapperStyle={{ paddingTop: 10 }} />
                
                {/* Revenue bars (purple) */}
                <Bar 
                  yAxisId="left" 
                  dataKey="revenue" 
                  name="Revenue" 
                  fill="#8884d8" 
                />
                
                {/* Growth bars (green/orange based on positive/negative) */}
                <Bar 
                  yAxisId="right" 
                  dataKey="growth" 
                  name="Growth %" 
                >
                  {categoryData.map((entry, index) => (
                    <Cell 
                      key={`cell-growth-${entry.name}-${index}`} 
                      fill={entry.growth >= 0 ? "#82ca9d" : "#ff8042"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Product Subcategory Performance - Only Revenue */}
      <Card className="overflow-hidden shadow-sm border border-gray-200 bg-white">
        <CardHeader className="border-b bg-purple-50/30 p-4">
          <CardTitle className="text-purple-800 font-bold text-lg">Product Subcategory Performance</CardTitle>
          <CardDescription className="text-purple-600 text-sm">
            Revenue by product subcategory ({showYearlyData ? 'Full Year' : currentMonth})
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={subcategoryData}
                margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  interval={0}
                  tick={(props) => {
                    const { x, y, payload } = props;
                    return (
                      <g transform={`translate(${x},${y})`}>
                        <text 
                          x={0} 
                          y={0} 
                          dy={16} 
                          textAnchor="end" 
                          fill="#666"
                          transform="rotate(-45)"
                        >
                          {payload.value}
                        </text>
                      </g>
                    );
                  }}
                  height={80}
                />
                <YAxis tickFormatter={(value) => `$${value / 1000000}M`} />
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Legend wrapperStyle={{ paddingTop: 10 }} />
                <Bar 
                  dataKey="revenue" 
                  fill="#9c27b0" 
                  name="Revenue" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Top Products Performance */}
      <Card className="overflow-hidden shadow-sm border border-gray-200 bg-white">
        <CardHeader className="border-b bg-green-50/30 p-4">
          <CardTitle className="text-green-800 font-bold text-lg">Top 10 Products</CardTitle>
          <CardDescription className="text-green-600 text-sm">
            Highest revenue products ({showYearlyData ? 'Full Year' : currentMonth})
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={topProductsData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" domain={[0, 'dataMax']} tickFormatter={(value) => `$${value / 1000000}M`} />
                <YAxis type="category" dataKey="name" width={100} />
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Bar 
                  dataKey="revenue" 
                  fill="#00897b" 
                  name="Revenue" 
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Two cards for bottom section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Performing Categories */}
        <Card className="overflow-hidden shadow-sm border border-gray-200 bg-white">
          <CardHeader className="border-b bg-amber-50/30 p-4">
            <CardTitle className="text-amber-800 font-bold text-lg">Top Performing Categories</CardTitle>
            <CardDescription className="text-amber-600 text-sm">
              Based on percentage growth
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {topPerformingCategories.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-amber-50/20 rounded-lg border border-amber-100 hover:bg-amber-50/40 transition-colors">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-green-600 font-bold">${item.revenue}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Focus Products */}
        <Card className="overflow-hidden shadow-sm border border-gray-200 bg-white">
          <CardHeader className="border-b bg-cyan-50/30 p-4">
            <CardTitle className="text-cyan-800 font-bold text-lg">Recommended Focus Products</CardTitle>
            <CardDescription className="text-cyan-600 text-sm">
              Based on percentage growth
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {recommendedFocusProducts.map((item) => (
                <div key={item.rank} className="flex items-center gap-4 p-4 rounded-lg border bg-blue-50/20 border-blue-100 hover:bg-blue-50/40 transition-colors">
                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center text-xl font-bold
                    ${item.rank === 1 ? 'bg-green-100 text-green-700' : 
                      item.rank === 2 ? 'bg-blue-100 text-blue-700' : 
                      'bg-purple-100 text-purple-700'}`}>
                    {item.rank}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.product}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-green-600 font-medium mr-2">+{item.growth}% growth</span>
                      <span className="text-sm text-gray-500">{item.reason}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}