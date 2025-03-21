// lib/data/overview.ts - Updated with better scaling factors
import { rawMonthlyData, getMonthName } from './common';

// Define the data types
export interface RevenueMetrics {
  name: string;
  revenue: number;
  total_orders: number;
  average_order_value: number;
  isCurrentMonth?: boolean;
}

export interface GrowthMetrics {
  name: string;
  revenue_growth: number;
  orders_growth: number;
  aov_growth: number;
  isCurrentMonth?: boolean;
}

// Monthly total orders data
export const totalOrdersByMonth = [
  87534, 155, 100804, 202216, 127268, 154008, 
  140510, 141135, 148790, 127863, 153356, 118952
];

// Monthly average order value data
export const averageOrderValueByMonth = [
  1990.16, 2684.49, 4183.97, 2486.09, 2603.85, 2829.85, 
  2755.63, 2349.29, 2715.26, 2656.78, 2669.95, 2571.74
];

// Create enhanced revenue data with orders and AOV
export const enhancedRevenueData: RevenueMetrics[] = rawMonthlyData.map((item, index) => {
  // Get the monthName in the format 'Jan 23'
  const monthName = getMonthName(item.Month, item.Year);
  
  return {
    name: monthName,
    revenue: item.GMV,
    total_orders: totalOrdersByMonth[index] || 0,
    average_order_value: averageOrderValueByMonth[index] || 0,
    isCurrentMonth: false
  };
});

// Calculate growth percentages for each metric
export const growthMetricsData: GrowthMetrics[] = enhancedRevenueData.map((item, index) => {
  // First month has no growth (0%)
  if (index === 0) {
    return {
      name: item.name,
      revenue_growth: 0,
      orders_growth: 0,
      aov_growth: 0,
      isCurrentMonth: false
    };
  }
  
  // Calculate percentage changes from previous month
  const prevMonth = enhancedRevenueData[index - 1];
  
  const revenue_growth = ((item.revenue - prevMonth.revenue) / prevMonth.revenue) * 100;
  const orders_growth = ((item.total_orders - prevMonth.total_orders) / prevMonth.total_orders) * 100;
  const aov_growth = ((item.average_order_value - prevMonth.average_order_value) / prevMonth.average_order_value) * 100;
  
  return {
    name: item.name,
    revenue_growth: revenue_growth,
    orders_growth: orders_growth,
    aov_growth: aov_growth,
    isCurrentMonth: false
  };
});

// Constants for scaling the metrics for visualization
// Adjusted for better visibility based on the ranges of values
export const SCALING_FACTORS = {
  ORDERS: 25,    // Scale orders to be closer to revenue scale
  AOV: 150      // Scale AOV to be visible on the same chart
};

// Get all months in order
export const months = enhancedRevenueData.map(item => item.name);

// Yearly aggregated data
export const yearlyData = {
  "GMV": 4044151618,
  "Total Investment": 8465103701.313126,
  "TV Percentage": 5.2412867313,
  "Digital Percentage": 3.5038232865,
  "Sponsorship Percentage": 43.161641203,
  "Content Marketing Percentage": 0.9483609061,
  "Online Marketing Percentage": 22.8750432785,
  "Affiliates Percentage": 7.2497380377,
  "SEM Percentage": 10.7738955615,
  "Radio Percentage": 0.5516767502,
  "Other Percentage": 5.6730014988,
  "NPS Score": 49.56,
  "ROI_Multiple": 0.4777438955,
  "Key Insight": "The ROI (0.48) is relatively low, suggesting inefficiencies in marketing spend. Sponsorship (43.16%) dominates the budget but may not be yielding optimal returns. Online Marketing (22.88%) and SEM (10.77%) have significant investments, but Digital (3.50%) remains underutilized. NPS score (49.56) is stable but could improve with better customer engagement. A shift toward data-driven digital strategies, increased investment in SEM and Digital, and reevaluation of Sponsorship efficiency could enhance profitability and ROI."
};

// NPS Score data by month
export const npsData = rawMonthlyData.map(item => ({
  month: getMonthName(item.Month, item.Year),
  score: item.NPS_Score
}));