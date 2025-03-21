import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Line, ResponsiveContainer, Cell } from 'recharts';
import { AlertCircle, ChevronDown, ChevronUp, Info } from 'lucide-react';

import KPICategory from './kpi-category';
import { COLORS } from '@/lib/data/common';
import {
  overallKPIimpact,
  revenueSalesKPIs,
  customerEngagementKPIs,
  productDiscountKPIs,
  additionalContextKPIs,
  npsData
} from '@/lib/data/performance-drivers';

// Define interface for component props
interface PerformanceDriversProps {
  currentMonth: string;
}

// Define types for the chart data
interface NpsDataItem {
  month: string;
  score: number;
}

// KPI Information components
interface KPISectionProps {
  title: string;
  children: React.ReactNode;
}

const KPISection = ({ title, children }: KPISectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="border border-blue-200 rounded-lg overflow-hidden bg-white">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors"
      >
        <h3 className="text-lg font-medium text-blue-800">{title}</h3>
        {isExpanded ? <ChevronUp size={20} className="text-blue-500" /> : <ChevronDown size={20} className="text-blue-500" />}
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-4 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

interface KPIItemProps {
  name: string;
  formula: string;
  description?: string;
}

const KPIItem = ({ name, formula, description }: KPIItemProps) => (
  <div className="border-l-4 border-blue-200 pl-4 py-2 hover:bg-blue-50 transition-colors rounded">
    <div className="font-medium text-blue-800">{name}</div>
    <div className="text-sm text-gray-700 mt-1">
      <span className="font-semibold">Formula:</span> {formula}
    </div>
    {description && (
      <div className="text-sm text-gray-600 mt-1 italic">
        {description}
      </div>
    )}
  </div>
);

export default function PerformanceDrivers({ currentMonth }: PerformanceDriversProps) {
  const [showKPIInfo, setShowKPIInfo] = useState(false);

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
                  <Cell key={`cell-overall-${entry.name}-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Button to toggle KPI information - matching the dashboard style */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowKPIInfo(!showKPIInfo)}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:from-blue-700 hover:to-indigo-700 transition-colors"
        >
          <Info size={18} />
          <span className="font-medium">{showKPIInfo ? "Hide KPI Reference Guide" : "Show KPI Reference Guide"}</span>
          {showKPIInfo ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* KPI Information with collapsible sections */}
      <div className={`transition-all duration-500 ease-in-out ${showKPIInfo ? 'opacity-100 max-h-[5000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <Card className="border border-blue-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <AlertCircle size={20} className="text-blue-500" />
              </div>
              <div>
                <CardTitle className="text-blue-800">Key Performance Indicators Reference Guide</CardTitle>
                <CardDescription className="text-blue-600">
                  Detailed formulas and explanations for all KPIs used in performance analysis
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <KPISection title="Sales and Revenue KPIs">
              <KPIItem 
                name="Delivery Timeliness" 
                formula="(Number of on-time deliveries / Total number of deliveries) × 100%" 
              />
              <KPIItem 
                name="First Order Rate" 
                formula="(Number of first-time orders / Total number of orders) × 100%" 
                description="This indicates new customer acquisition effectiveness."
              />
              <KPIItem 
                name="Repeat Order Rate" 
                formula="(Number of repeat orders / Total number of orders) × 100%" 
              />
              <KPIItem 
                name="Total Spends per Customer (CLTV - Customer Lifetime Value)" 
                formula="Average Order Value × Number of Orders × Retention Period" 
                description="This helps identify high-value customer segments."
              />
              <KPIItem 
                name="High Spender" 
                formula="Customers with spending >75th percentile of all customer spending" 
              />
              <KPIItem 
                name="Low Spender" 
                formula="Customers with spending <=75th percentile of all customer spending" 
              />
            </KPISection>

            <KPISection title="Discount and Pricing KPIs">
              <KPIItem 
                name="Discount Seeker" 
                formula="(Number of discounted purchases / Total purchases by customer) × 100%" 
                description="Helps in targeting price-sensitive segments."
              />
              <KPIItem 
                name="Discount Rate Threshold" 
                formula="Discount Rate Threshold = min(discount_percentage) where cumulative_gmv ≥ (0.90 × total_gmv)" 
              />
              <KPIItem 
                name="Customer Retention Rate" 
                formula="Repeat Customers/Total Unique Customers × 100%" 
                description="This measures loyalty and satisfaction. 7.7% of customers continue to make purchases."
              />
              <KPIItem 
                name="Warehouse Efficiency" 
                formula="(Total orders processed / Labor hours) or (Items picked per hour)" 
                description="This indicates operational productivity."
              />
            </KPISection>

            <KPISection title="Risk Metrics (KRIs)">
              <KPIItem 
                name="Delivery Risk" 
                formula="(Delayed deliveries / Total deliveries) × 100%" 
                description="This identifies potential operational weaknesses."
              />
              <KPIItem 
                name="Low NPS Risk" 
                formula="(Detractors / Total respondents) × 100%" 
                description="This predicts customer dissatisfaction issues."
              />
              <KPIItem 
                name="High Churn Risk" 
                formula="Historical churn rate or predictive model based on behavior patterns" 
                description="95.3% of customers stopped making purchases within the given period. This helps identify at-risk customers for intervention."
              />
            </KPISection>

            <KPISection title="Environmental Factors">
              <KPIItem 
                name="Correlation of Weather and Sales" 
                formula="Pearson correlation coefficient between weather metrics and sales figures" 
              />
              <KPIItem 
                name="Impact of Rain/Snow on Delay" 
                formula="((Sales on precipitation days - Sales on non-precipitation days) / Sales on non-precipitation days) × 100%" 
              />
              <KPIItem 
                name="Change in Sales on Weekends" 
                formula="((Weekend avg. sales - Weekday avg. sales) / Weekday avg. sales) × 100%" 
                description="Sales on weekends are 19% higher compared to weekdays."
              />
              <KPIItem 
                name="Average Mean Temperature Impact" 
                formula="Correlation coefficients and regression analysis" 
                description="The relationship between mean temperature and purchasing behavior. This supports seasonal merchandising strategies."
              />
            </KPISection>

            <KPISection title="Operational KPIs">
              <KPIItem 
                name="Customer Order Frequency" 
                formula="(Total Orders in a Month)/(Total Unique Customers in that Month)" 
              />
              <KPIItem 
                name="SLA Compliance" 
                formula="(Number of deliveries meeting SLA / Total deliveries) × 100%" 
                description="This measures operational reliability."
              />
              <KPIItem 
                name="Order Cancellation Rate" 
                formula="Number of canceled orders / Total number of orders" 
              />
              <KPIItem 
                name="Variance of Procurement SLA" 
                formula="Standard deviation of 53.46" 
              />
            </KPISection>
          </CardContent>
        </Card>
      </div>

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

      {/* Product & Discount KPIs */}
      <KPICategory 
        title="4. Product & Discount KPIs" 
        data={productDiscountKPIs} 
        color="#FF8042" 
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
                  key="nps-score-line"
                  type="monotone" 
                  dataKey="score" 
                  stroke="#82ca9d" 
                  name="NPS Score"
                  isAnimationActive={false}
                  activeDot={{ r: 8, fill: "#82ca9d", stroke: "#fff" }}
                  dot={(dot) => {
                    const { cx, cy, index, payload } = dot;
                    return (
                      <circle 
                        key={`dot-${index}`}
                        cx={cx} 
                        cy={cy} 
                        r={payload.month === currentMonth ? 6 : 4} 
                        fill="#82ca9d"
                        stroke={payload.month === currentMonth ? "#fff" : "none"}
                        strokeWidth={payload.month === currentMonth ? 2 : 0}
                      />
                    );
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}