// components/dashboard/budget-optimization.tsx - Enhanced Budget Optimization tab content
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '@/lib/utils';
import { 
  calculateBudgetAllocations,
  getChartData,
  optimizationRecommendations 
} from '@/lib/data/budget-optimization';

export default function BudgetOptimization() {
  const defaultBudget = 105813796; // Default budget value (same as in the screenshots)
  const [totalBudget, setTotalBudget] = useState(defaultBudget);
  const [budgetInput, setBudgetInput] = useState(defaultBudget.toString());
  const [budgetData, setBudgetData] = useState(calculateBudgetAllocations(defaultBudget));
  const [chartData, setChartData] = useState(getChartData(defaultBudget));
  const [isUpdating, setIsUpdating] = useState(false);
  const previousBudgetRef = useRef(defaultBudget);
  
  // Calculate the data whenever totalBudget changes
  useEffect(() => {
    setBudgetData(calculateBudgetAllocations(totalBudget));
    setChartData(getChartData(totalBudget));
    
    if (previousBudgetRef.current !== totalBudget) {
      setIsUpdating(true);
      const timer = setTimeout(() => {
        setIsUpdating(false);
      }, 800);
      previousBudgetRef.current = totalBudget;
      return () => clearTimeout(timer);
    }
  }, [totalBudget]);

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudgetInput(e.target.value);
  };

  const handleBudgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBudget = parseFloat(budgetInput);
    if (!isNaN(newBudget) && newBudget > 0) {
      setTotalBudget(newBudget);
      setIsUpdating(true);
    } else {
      // Reset to current value if invalid input
      setBudgetInput(totalBudget.toString());
    }
  };

  // Format percentage with + or - sign
  const formatPercentage = (value: number) => {
    return value >= 0 
      ? `+${value.toFixed(1)}%` 
      : `${value.toFixed(1)}%`;
  };

  // Text color based on value
  const getTextColorClass = (value: number) => {
    return value >= 0 ? 'text-green-500' : 'text-red-500';
  };

  // Custom tooltip formatter for the bar chart
  const customTooltipFormatter = (value: number, name: string) => {
    if (name === "Current Budget") {
      return [`${formatCurrency(value)}`, "Current Budget"];
    }
    return [`${formatCurrency(value)}`, "Recommended Budget"];
  };

  // Custom legend for the bar chart to avoid key warning
  const renderLegend = () => {
    return (
      <div className="flex items-center justify-center mt-4 space-x-8">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#8884d8] mr-2"></div>
          <span>Current Budget</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#82ca9d] mr-2"></div>
          <span>Recommended Budget</span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pb-6">
          <CardTitle className="text-2xl text-blue-800">Marketing Budget Optimization</CardTitle>
          <CardDescription className="text-blue-600">Set your total marketing budget and see optimized allocation</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleBudgetSubmit} className="flex flex-col sm:flex-row gap-4 mb-8 items-end">
            <div className="flex-1">
              <label htmlFor="total-budget" className="block text-sm font-medium text-gray-700 mb-2">
                Total Marketing Budget
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="total-budget"
                  id="total-budget"
                  value={budgetInput}
                  onChange={handleBudgetChange}
                  className="block w-full rounded-md border-gray-300 pl-8 pr-12 border p-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all duration-200 hover:border-blue-300"
                  placeholder="0.00"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm">CAD</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
            >
              Update Budget
            </button>
          </form>

          <div className={`transition-all duration-500 ${isUpdating ? 'opacity-50' : 'opacity-100'}`}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fill: '#666' }} />
                <YAxis tick={{ fill: '#666' }} />
                <Tooltip formatter={customTooltipFormatter} />
                {/* Use custom legend to avoid key warning */}
                <Bar 
                  dataKey="current" 
                  fill="#8884d8" 
                  animationDuration={800}
                  animationBegin={0}
                  name="Current Budget"
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="recommended" 
                  fill="#82ca9d" 
                  animationDuration={800} 
                  animationBegin={200}
                  name="Recommended Budget"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
            {renderLegend()}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className={`shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 ${isUpdating ? 'scale-[0.98] opacity-80' : 'scale-100 opacity-100'}`}>
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b">
            <CardTitle className="text-emerald-800">Budget Reallocation Impact</CardTitle>
            <CardDescription className="text-emerald-600">Projected revenue improvement</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col pt-6">
            <div className="text-center mb-4">
              <p className={`text-5xl font-bold text-green-600 transition-all duration-500 ${isUpdating ? 'scale-110' : 'scale-100'}`}>
                {formatPercentage(budgetData.revenueIncrease)}
              </p>
              <p className="text-gray-500 mt-2">Projected Revenue Increase</p>
            </div>
            <Separator className="my-4 bg-gray-200" />
            <div className="grid grid-cols-2 gap-y-6 text-center">
              <div className="transition-all duration-500">
                <p className="text-lg font-bold">{formatCurrency(budgetData.companyRevenue)}</p>
                <p className="text-sm text-gray-500">Current Revenue</p>
              </div>
              <div className="transition-all duration-500">
                <p className="text-lg font-bold">{formatCurrency(budgetData.modelRevenue)}</p>
                <p className="text-sm text-gray-500">Model's Revenue</p>
              </div>
              
              <div className="transition-all duration-500">
                <p className={`text-lg font-bold ${getTextColorClass(budgetData.companyProfitLoss)}`}>
                  {formatPercentage(budgetData.companyProfitLoss)}
                </p>
                <p className="text-sm text-gray-500">Current Profit/Loss</p>
              </div>
              <div className="transition-all duration-500">
                <p className={`text-lg font-bold ${getTextColorClass(budgetData.modelProfitLoss)}`}>
                  {formatPercentage(budgetData.modelProfitLoss)}
                </p>
                <p className="text-sm text-gray-500">Model's Profit/Loss</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <CardTitle className="text-indigo-800">Optimization Recommendations</CardTitle>
            <CardDescription className="text-indigo-600">Key strategic suggestions</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {optimizationRecommendations.map((item) => (
                <li key={item.id} className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1 group">
                  <div className="h-7 w-7 flex-none rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-medium group-hover:bg-blue-600 transition-colors">
                    {item.id}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className={`shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 ${isUpdating ? 'opacity-80' : 'opacity-100'}`}>
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b">
          <CardTitle className="text-purple-800">Budget Allocation Comparison</CardTitle>
          <CardDescription className="text-purple-600">Current vs Recommended allocation percentages</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current %</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended %</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {budgetData.allocations.map((item, index) => (
                  <tr key={index} className="transition-colors duration-200 hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatCurrency(item.currentAmount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.currentPercentage.toFixed(1)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatCurrency(item.recommendedAmount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.recommendedPercentage.toFixed(1)}%
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${item.changeAmount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {formatCurrency(item.changeAmount)} ({formatPercentage(item.changePercentage)})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}