// components/dashboard/overview.tsx - Overview tab content with month filtering
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { LineChart, PieChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Pie, Cell, ResponsiveContainer } from 'recharts';

import { 
  revenueByMonth, 
  marketingSpendByChannel, 
  npsData, 
  COLORS, 
  totalRevenue, 
  totalMarketingSpend, 
  avgROI 
} from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

// Define props interface
interface OverviewProps {
  currentMonth: string;
  currentMonthData: {
    name: string;
    revenue: number;
    target: number;
  };
}

export default function Overview({ currentMonth, currentMonthData }: OverviewProps) {
  // Filter data for the current month
  const currentMonthNps = npsData.find(item => item.month === currentMonth) || npsData[npsData.length - 1];
  
  // Get monthly data for display
  const monthlyRevenue = currentMonthData.revenue;
  const monthlyTarget = currentMonthData.target;
  
  // Calculate monthly ROI (simplified for demo)
  const monthlyROI = parseFloat((avgROI * (monthlyRevenue / (totalRevenue / 12))).toFixed(2));
  
  // Estimated monthly spend (simplified for demo)
  const monthlySpend = Math.round(totalMarketingSpend / 12);
  
  // Highlight the current month in the chart
  const highlightedRevenueData = revenueByMonth.map(item => ({
    ...item,
    isCurrentMonth: item.name === currentMonth
  }));

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:gwhen deploying the code on vercal it gave this rid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue ({currentMonth})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(monthlyRevenue)}</div>
            <p className="text-xs text-gray-500">
              {monthlyRevenue > monthlyTarget 
                ? `${((monthlyRevenue / monthlyTarget - 1) * 100).toFixed(1)}% above target` 
                : `${((monthlyTarget / monthlyRevenue - 1) * 100).toFixed(1)}% below target`}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Marketing Spend ({currentMonth})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(monthlySpend)}</div>
            <p className="text-xs text-gray-500">Estimated for {currentMonth}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">ROI ({currentMonth})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{monthlyROI}x</div>
            <p className="text-xs text-gray-500">Return on marketing investment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">NPS Score ({currentMonth})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMonthNps.score}</div>
            <p className="text-xs text-gray-500">Customer satisfaction</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue vs target (current month highlighted)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={highlightedRevenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value: any) => formatCurrency(value)} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8884d8"
                  name="Revenue"
                  strokeWidth={2}
                  dot={(props: any) => {
                    const { cx, cy, payload } = props;
                    // Make the current month's dot larger and highlighted
                    return payload.isCurrentMonth ? (
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r={6} 
                        fill="#8884d8" 
                        stroke="#fff" 
                        strokeWidth={2} 
                      />
                    ) : (
                      <circle cx={cx} cy={cy} r={4} fill="#8884d8" />
                    );
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#82ca9d" 
                  name="Target" 
                  strokeDasharray="5 5" 
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marketing Channel Distribution</CardTitle>
            <CardDescription>Spend allocation by channel ({currentMonth})</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketingSpendByChannel}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="spend"
                  nameKey="name"
                  label={({name, percent}: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {marketingSpendByChannel.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => formatCurrency(value)} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Key Insights for {currentMonth}</AlertTitle>
        <AlertDescription>
          <ul className="list-disc pl-5 mt-2">
            {currentMonth === 'Dec 23' && (
              <li>Holiday season drove 32% higher sales compared to previous month</li>
            )}
            {monthlyRevenue > monthlyTarget && (
              <li>Revenue exceeded target by {((monthlyRevenue / monthlyTarget - 1) * 100).toFixed(1)}%</li>
            )}
            {currentMonthNps.score > 85 && (
              <li>NPS score is exceptionally high at {currentMonthNps.score}</li>
            )}
            <li>
              {monthlyROI > 4.5 
                ? `Strong ROI of ${monthlyROI}x indicates efficient marketing spend` 
                : `ROI of ${monthlyROI}x suggests opportunity to optimize marketing channels`}
            </li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}