// components/dashboard/electromart-dashboard.tsx - Main dashboard container
"use client"
// components/dashboard/electromart-dashboard.tsx - Main dashboard container with month navigation
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Overview from './overview';
import PerformanceDrivers from './performance-drivers';
import MarketingROI from './marketing-roi';
import BudgetOptimization from './budget-optimization';
import ProductAnalysis from './product-analysis';
import ChatBot from './chatbot';

import { revenueByMonth } from '@/lib/data';

export default function ElectroMartDashboard() {
  const [tabValue, setTabValue] = useState("overview");
  
  // Month navigation state
  const months = ['Jul 23', 'Aug 23', 'Sep 23', 'Oct 23', 'Nov 23', 'Dec 23', 'Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24'];
  const [currentMonthIndex, setCurrentMonthIndex] = useState(months.length - 1); // Start with the latest month (June 2024)
  const [currentMonth, setCurrentMonth] = useState(months[months.length - 1]);
  
  // Update current month when index changes
  useEffect(() => {
    setCurrentMonth(months[currentMonthIndex]);
  }, [currentMonthIndex, months]);
  
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
    return revenueByMonth.find(item => item.name === currentMonth) || revenueByMonth[revenueByMonth.length - 1];
  };
  
  const currentMonthData = getCurrentMonthData();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-2xl font-bold text-blue-800">ElectroMart Marketing Analytics</h1>
          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center">
              <button 
                onClick={goToPreviousMonth}
                disabled={currentMonthIndex === 0}
                className={`p-1 rounded-md ${currentMonthIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
                aria-label="Previous month"
              >
                <ChevronLeft size={20} />
              </button>
              
              <span className="mx-2 px-3 py-1 font-medium bg-blue-50 rounded-md">
                {currentMonth}
              </span>
              
              <button 
                onClick={goToNextMonth}
                disabled={currentMonthIndex === months.length - 1}
                className={`p-1 rounded-md ${currentMonthIndex === months.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
                aria-label="Next month"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="text-sm text-gray-600">
              Data period: July 2023 - June 2024
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6">
        <Tabs value={tabValue} onValueChange={setTabValue} className="space-y-6">
          <TabsList className="bg-slate-200">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance-drivers">Performance Drivers</TabsTrigger>
            <TabsTrigger value="marketing-roi">Marketing ROI</TabsTrigger>
            <TabsTrigger value="budget-optimization">Budget Optimization</TabsTrigger>
            <TabsTrigger value="product-analysis">Product Analysis</TabsTrigger>
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

          <TabsContent value="marketing-roi">
            <MarketingROI currentMonth={currentMonth} />
          </TabsContent>

          <TabsContent value="budget-optimization">
            <BudgetOptimization currentMonth={currentMonth} />
          </TabsContent>

          <TabsContent value="product-analysis">
            <ProductAnalysis currentMonth={currentMonth} />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-4 px-6">
        <div className="text-center text-sm text-gray-500">
          ElectroMart Marketing Analytics Dashboard • Current view: {currentMonth}
        </div>
      </footer>

      {/* Add the ChatBot component */}
      <ChatBot />
    </div>
  );
}