// components/dashboard/electromart-dashboard.tsx - Fixed unused imports and hook dependencies
"use client"
import { useState, useEffect, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

import Overview from './overview';
import PerformanceDrivers from './performance-drivers';  // Using the enhanced version
import BudgetOptimization from './budget-optimization';
import ProductAnalysis from './product-analysis';
import ChatBot from './chatbot';  // Using the enhanced chatbot

// Import the enhanced revenue data
import { enhancedRevenueData } from '@/lib/data/overview';

// Define the type for revenue item
interface RevenueItem {
  name: string;
  revenue: number;
  total_orders: number;
  average_order_value: number;
  isCurrentMonth?: boolean;
}

export default function ElectroMartDashboard() {
  const [tabValue, setTabValue] = useState("overview");
  
  // Month navigation state
  // Wrap months array in useMemo to fix exhaustive-deps warning
  const months = useMemo(() => [
    'Jul 23', 'Aug 23', 'Sep 23', 'Oct 23', 'Nov 23', 'Dec 23',
    'Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24'
  ], []);
  
  const [currentMonthIndex, setCurrentMonthIndex] = useState(1); // Start with August 2023
  const [currentMonth, setCurrentMonth] = useState(months[1]);
  
  // Calculate dynamic data period based on current month - FIXED VERSION
  const getDynamicDataPeriod = useMemo(() => {
    return (index: number) => {
      // Always show a 3-month window centered on the current month (or adjusted at edges)
      const startIdx = Math.max(0, index - 1);
      const endIdx = Math.min(months.length - 1, index + 1);
      
      return `${months[startIdx]} - ${months[endIdx]}`;
    };
  }, [months]);
  
  const [dataPeriod, setDataPeriod] = useState(() => getDynamicDataPeriod(currentMonthIndex));
  
  // Update current month when index changes
  useEffect(() => {
    setCurrentMonth(months[currentMonthIndex]);
    // Update the data period when month changes
    setDataPeriod(getDynamicDataPeriod(currentMonthIndex));
  }, [currentMonthIndex, months, getDynamicDataPeriod]);
  
  // Navigation functions
  const goToPreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };
  
  const goToNextMonth = () => {
    if (currentMonthIndex < months.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };
  
  // Filter data for the current month
  const getCurrentMonthData = () => {
    return enhancedRevenueData.find((item: RevenueItem) => item.name === currentMonth) || enhancedRevenueData[currentMonthIndex];
  };
  
  const currentMonthData = getCurrentMonthData();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">ElectroMart Analytics</h1>
            <div className="hidden md:flex ml-6 bg-blue-50 px-3 py-1 rounded-full text-blue-600 text-sm font-medium items-center">
              <span className="mr-1">Dashboard</span>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center">
              <button 
                onClick={goToPreviousMonth}
                disabled={currentMonthIndex === 0}
                className={`p-2 rounded-md ${currentMonthIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
                aria-label="Previous month"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="mx-2 px-4 py-2 font-medium bg-blue-50 rounded-lg border border-blue-100 text-blue-700 flex items-center shadow-sm">
                <Calendar size={16} className="mr-2" />
                <span>{currentMonth}</span>
              </div>
              
              <button 
                onClick={goToNextMonth}
                disabled={currentMonthIndex === months.length - 1}
                className={`p-2 rounded-md ${currentMonthIndex === months.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
                aria-label="Next month"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="text-sm bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm border border-gray-200">
              Data period: {dataPeriod}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6">
        <Tabs value={tabValue} onValueChange={setTabValue} className="space-y-6">
          <TabsList className="bg-slate-200 p-1 rounded-lg shadow-sm">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 transition-all"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="performance-drivers" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 transition-all"
            >
              Performance Drivers
            </TabsTrigger>
            <TabsTrigger 
              value="budget-optimization" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 transition-all"
            >
              Budget Optimization
            </TabsTrigger>
            <TabsTrigger 
              value="product-analysis" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 transition-all"
            >
              Product Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Overview 
              currentMonth={currentMonth} 
              currentMonthData={currentMonthData} 
            />
          </TabsContent>

          <TabsContent value="performance-drivers">
            <PerformanceDrivers currentMonth={currentMonth} />
          </TabsContent>

          <TabsContent value="budget-optimization">
            <BudgetOptimization />
          </TabsContent>

          <TabsContent value="product-analysis">
            <ProductAnalysis currentMonth={currentMonth} />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-4 px-6 bg-white shadow-inner">
        <div className="text-center text-sm text-gray-500">
          ElectroMart Analytics Dashboard • Current view: {currentMonth}
        </div>
      </footer>

      {/* Add the enhanced ChatBot component */}
      <ChatBot />
    </div>
  );
}