import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Line, ResponsiveContainer, Cell } from 'recharts';

import KPICategory from './kpi-category';
import {
  overallKPIimpact,
  revenueSalesKPIs,
  customerEngagementKPIs,
  marketingChannelKPIs,
  productDiscountKPIs,
  weatherEventKPIs,
  additionalContextKPIs,
  npsData,
  COLORS
} from '@/lib/data';

// Define interface for component props
interface PerformanceDriversProps {
  currentMonth: string;
}

// Define specific types for the props inside the chart
interface NpsData {
  month: string;
  score: number;
}

export default function PerformanceDrivers({ currentMonth }: PerformanceDriversProps) {
  // Remove unused 'currentMonthNps' variable
  // const currentMonthNps = npsData.find(item => item.month === currentMonth) || npsData[npsData.length - 1];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Overall KPI&apos;s Impact</CardTitle>
          <CardDescription>Relative influence of KPI categories on revenue ({currentMonth})</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={overallKPIimpact} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={150} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="impact" fill="#8884d8" name="Impact on Revenue (%)" radius={[0, 4, 4, 0]}>
                {overallKPIimpact.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue & Sales KPIs */}
      <KPICategory 
        title="1. Revenue and Sales KPIs" 
        data={revenueSalesKPIs} 
        color="#0088FE" 
      />

      {/* Customer & Engagement KPIs */}
      <KPICategory 
        title="2. Customer & Engagement KPIs" 
        data={customerEngagementKPIs} 
        color="#00C49F" 
      />

      {/* Marketing and Channel Performance KPIs */}
      <KPICategory 
        title="3. Marketing and Channel Performance KPIs" 
        data={marketingChannelKPIs} 
        color="#FFBB28" 
      />

      {/* Product & Discount KPIs */}
      <KPICategory 
        title="4. Product & Discount KPIs" 
        data={productDiscountKPIs} 
        color="#FF8042" 
      />

      {/* Weather Events */}
      <KPICategory 
        title="5. Weather Events" 
        data={weatherEventKPIs} 
        color="#8884d8" 
      />

      {/* Additional Contextual KPIs */}
      <KPICategory 
        title="6. Additional Contextual KPIs" 
        data={additionalContextKPIs} 
        color="#82ca9d" 
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>NPS Score Trend</CardTitle>
            <CardDescription>Customer satisfaction correlation with revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={npsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[70, 90]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#82ca9d" 
                  name="NPS Score"
                  dot={(props: { cx: number; cy: number; payload: NpsData }) => {
                    const { cx, cy, payload } = props;
                    // Make the current month's dot larger and highlighted
                    return payload.month === currentMonth ? (
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r={6} 
                        fill="#82ca9d" 
                        stroke="#fff" 
                        strokeWidth={2} 
                      />
                    ) : (
                      <circle cx={cx} cy={cy} r={4} fill="#82ca9d" />
                    );
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Seasonal Performance Analysis</CardTitle>
            <CardDescription>Impact of seasons and holidays on revenue ({currentMonth})</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 mb-4">Analysis for {currentMonth}</p>
              <p className="text-sm text-gray-400">Holiday seasons (Nov-Dec) show 32% higher sales</p>
              <p className="text-sm text-gray-400">Weather correlation: -0.25 with extreme temperatures</p>
              <p className="text-sm text-gray-400">Payday weeks show 18% higher conversion rates</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
