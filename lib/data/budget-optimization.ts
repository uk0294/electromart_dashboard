// lib/data/budget-optimization.ts - Data specific to the Budget Optimization tab

// Budget weights for different marketing categories


  
export const budgetWeights = [
    {
        "category": "TV",
        "companyWeight": 0.05242,
        "modelWeight": 0.100174129
      },
      {
        "category": "Digital",
        "companyWeight": 0.03503,
        "modelWeight": 0.0000979824778
      },
      {
        "category": "Sponsorship",
        "companyWeight": 0.43156,
        "modelWeight": 0.159654673
      },
      {
        "category": "Content Marketing",
        "companyWeight": 0.00948,
        "modelWeight": 0.196997467
      },
      {
        "category": "Online Marketing",
        "companyWeight": 0.22879,
        "modelWeight": 0.16666607
      },
      {
        "category": "Affiliates",
        "companyWeight": 0.07249,
        "modelWeight": 0.129225339
      },
      {
        "category": "SEM",
        "companyWeight": 0.10774,
        "modelWeight": 0.178012317
      },
      {
        "category": "Radio",
        "companyWeight": 0.00551,
        "modelWeight": 0.0346798596
      },
      {
        "category": "Other",
        "companyWeight": 0.05673,
        "modelWeight": 0.0344921626
      }
  ];
  
  // Revenue and profit calculation weights
  export const revenueWeights = {
    "companyRevenueWeight": 0.47780,
    "modelRevenueWeight": 1.29
  };
  
  // List of optimization recommendations
  export const optimizationRecommendations = [
    {
      id: 1,
      title: "Reduce Sponsorship spend by 63%",
      description: "Current allocation (43.2%) far exceeds optimal return on investment"
    },
    {
      id: 2,
      title: "Increase Content Marketing by 197.8%",
      description: "Highly underutilized channel with strong potential ROI"
    },
    {
      id: 3,
      title: "Boost SEM investment by 65%",
      description: "Search marketing shows consistently high performance metrics"
    },
    {
      id: 4,
      title: "Increase Affiliate marketing by 78%",
      description: "Partnership channels providing efficient customer acquisition"
    }
  ];
  
  // Calculate budget allocations and revenue impacts based on input budget
  export function calculateBudgetAllocations(inputBudget: number) {
    // Calculate budget allocations
    const allocations = budgetWeights.map(item => ({
      category: item.category,
      currentAmount: inputBudget * item.companyWeight,
      currentPercentage: item.companyWeight * 100,
      recommendedAmount: inputBudget * item.modelWeight,
      recommendedPercentage: item.modelWeight * 100,
      changeAmount: (inputBudget * item.modelWeight) - (inputBudget * item.companyWeight),
      changePercentage: ((item.modelWeight - item.companyWeight) / item.companyWeight) * 100
    }));
  
    // Calculate revenue and profit impacts
    const companyRevenue = inputBudget * revenueWeights.companyRevenueWeight;
    const modelRevenue = inputBudget * revenueWeights.modelRevenueWeight;
    const revenueIncrease = ((modelRevenue - companyRevenue) / companyRevenue) * 100;
    const companyProfitLoss = ((companyRevenue - inputBudget) / inputBudget) * 100;
    const modelProfitLoss = ((modelRevenue - inputBudget) / inputBudget) * 100;
  
    return {
      allocations,
      companyRevenue,
      modelRevenue,
      revenueIncrease,
      companyProfitLoss,
      modelProfitLoss,
      inputBudget
    };
  }
  
  // For chart data visualization
  export function getChartData(inputBudget: number) {
    return budgetWeights.map(item => ({
      name: item.category,
      current: Math.round(inputBudget * item.companyWeight),
      recommended: Math.round(inputBudget * item.modelWeight)
    }));
  }