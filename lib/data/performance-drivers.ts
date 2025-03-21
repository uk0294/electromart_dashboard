// lib/data/performance-drivers.ts - Data specific to the Performance Drivers tab
import { rawMonthlyData, getMonthName } from './common';

// NPS Score data by month (duplicated from overview since both tabs need it)
export const npsData = rawMonthlyData.map(item => ({
  month: getMonthName(item.Month, item.Year),
  score: item.NPS_Score
}));

// KPI categories data for Performance Drivers tab
export const revenueSalesKPIs = [
    { name: 'Total Units', impact: 94 },
    { name: 'Total Orders', impact: 89 },
    { name: 'Weekend Sales', impact: 87 },
    { name: 'Avg Order Value Growth', impact: 57 },
    { name: 'Average Order Value', impact: 48 },
    { name: 'GMV Growth', impact: 32 }
  ].sort((a, b) => b.impact - a.impact);
  
  export const customerEngagementKPIs = [
    { name: 'NPS Score', impact: 93 },
    { name: 'First Orders', impact: 90 },
    { name: 'Total Unique Customers', impact: 90 },
    { name: 'Churn Rate', impact: 81 },
    { name: 'Customer Retention Rate', impact: 71 },
    { name: 'Repeat Orders', impact: 70 },
    { name: 'First Order Rate', impact: 61 },
    { name: 'Repeat Order Rate', impact: 61 },
    { name: 'Repeat Customers', impact: 56 }
  ].sort((a, b) => b.impact - a.impact);
  
//   export const marketingChannelKPIs = [
//     // No specific marketing channel KPIs provided in the data
//   ].sort((a, b) => b.impact - a.impact);
  
  export const productDiscountKPIs = [
    { name: 'Discount Rate', impact: 55 }
  ].sort((a, b) => b.impact - a.impact);
  
//   export const weatherEventKPIs = [
//     // No weather event KPIs provided in the data
//   ].sort((a, b) => b.impact - a.impact);
  
  export const additionalContextKPIs = [
    { name: 'Low NPS Risk', impact: 74 },
    { name: 'High Churn Risk', impact: 57 },
    { name: 'Risk Score', impact: 43 },
    { name: 'Logistic Inefficiency', impact: 29 },
    { name: 'Delivery Risk', impact: 28 }
  ].sort((a, b) => b.impact - a.impact);
  
  // Overall KPI impact (combined from all categories)
  // For overall impact, we averaged the available impacts in each category:
  // - Revenue & Sales: average ~68
  // - Customer Engagement: average ~75
  // - Product & Pricing (from Discount KPIs): 55
  // - Additional Context (as External Factors): ~46
  // - Marketing Channels: no data so impact 0
  export const overallKPIimpact = [
    { name: 'Customer Engagement', impact: 75 },
    { name: 'Revenue & Sales', impact: 68 },
    { name: 'Product & Pricing', impact: 55 },
    { name: 'External Factors', impact: 46 },
  ].sort((a, b) => b.impact - a.impact);
  
export const kpiDrivers = [
  { name: 'Marketing Spend', impact: 35 },
  { name: 'Promotions/Discounts', impact: 25 },
  { name: 'Seasonal Factors', impact: 15 },
  { name: 'NPS Score', impact: 12 },
  { name: 'Weather', impact: 8 },
  { name: 'Other Factors', impact: 5 },
];