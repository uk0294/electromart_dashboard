// // lib/data.ts - Contains all data for the dashboard based on actual metrics

// // Helper function to format month names
// const getMonthName = (month: number, year: number): string => {
//   const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   return `${monthNames[month - 1]} ${year.toString().substring(2)}`;
// };

// // Monthly revenue data (based on actual GMV values)
// export const revenueByMonth = [
//   { name: 'Jul 23', revenue: 174206832, target: 160000000 },
//   { name: 'Aug 23', revenue: 416096, target: 165000000 },
//   { name: 'Sep 23', revenue: 421760671, target: 170000000 },
//   { name: 'Oct 23', revenue: 502727831, target: 175000000 },
//   { name: 'Nov 23', revenue: 331386937, target: 180000000 },
//   { name: 'Dec 23', revenue: 435820199, target: 185000000 },
//   { name: 'Jan 24', revenue: 387192999, target: 190000000 },
//   { name: 'Feb 24', revenue: 331567025, target: 195000000 },
//   { name: 'Mar 24', revenue: 404003023, target: 200000000 },
//   { name: 'Apr 24', revenue: 339703548, target: 205000000 },
//   { name: 'May 24', revenue: 409453151, target: 210000000 },
//   { name: 'Jun 24', revenue: 305913306, target: 215000000 },
// ];

// // Raw data from the provided JSON
// export const rawMonthlyData = [
//   {
//     "Month": 7,
//     "Year": 2023,
//     "GMV": 174206832,
//     "Total Investment": 170617754.42667842,
//     "TV Percentage": 1.2620621147,
//     "Digital Percentage": 14.8461320275,
//     "Sponsorship Percentage": 43.4554408393,
//     "Content Marketing Percentage": 0.0054677635,
//     "Online Marketing Percentage": 7.7792466528,
//     "Affiliates Percentage": 3.2074848294,
//     "SEM Percentage": 29.4441657728,
//     "Radio Percentage": 0.0000005861,
//     "Other Percentage": 0.0000005861,
//     "NPS_Score": 54.6,
//     "ROI_Multiple": 1.0210357802,
//     "Key Insight": "The ROI (1.02) indicates low profitability, requiring better budget optimization. Sponsorship (43.46%) and SEM (29.44%) dominate spending, while Content Marketing (0.005%) and Radio (~0%) are underutilized despite their potential. The NPS score (54.6) suggests moderate customer satisfaction, highlighting the need for better engagement strategies. Reallocating investments towards data-driven digital marketing could improve efficiency and long-term growth. Optimizing the marketing mix is essential to maximize ROI and enhance customer retention."
//   },
//   {
//     "Month": 8,
//     "Year": 2023,
//     "GMV": 416096,
//     "Total Investment": 50643060.89216936,
//     "TV Percentage": 0.1271264619,
//     "Digital Percentage": 25.2368964585,
//     "Sponsorship Percentage": 20.9965933998,
//     "Content Marketing Percentage": 0.0001248963,
//     "Online Marketing Percentage": 2.5520626467,
//     "Affiliates Percentage": 1.4549669589,
//     "SEM Percentage": 49.6322291779,
//     "Radio Percentage": 0.0000019746,
//     "Other Percentage": 0.0000019746,
//     "NPS_Score": 60.0,
//     "ROI_Multiple": 0.008216249,
//     "Key Insight": "The ROI (0.0082) is extremely low, indicating poor marketing efficiency and an urgent need for optimization. Nearly half of the budget is spent on SEM (49.63%), but it is not driving strong sales, while Digital (25.24%) and Sponsorship (21.00%) are also underperforming. Content Marketing (0.0001%) and Radio (~0%) are almost neglected, missing long-term brand-building opportunities. The NPS Score (60.0) shows improved customer satisfaction, but sales remain weak. Urgent action is needed to reevaluate the SEM strategy, optimize budget allocation, and explore organic marketing efforts to boost ROI."
//   },
//   {
//     "Month": 9,
//     "Year": 2023,
//     "GMV": 421760671,
//     "Total Investment": 962543798.6467243,
//     "TV Percentage": 4.0304697015,
//     "Digital Percentage": 1.4093151919,
//     "Sponsorship Percentage": 65.2309551024,
//     "Content Marketing Percentage": 0.6340408433,
//     "Online Marketing Percentage": 17.0173970432,
//     "Affiliates Percentage": 5.2343241138,
//     "SEM Percentage": 6.4434980039,
//     "Radio Percentage": 0.0000001039,
//     "Other Percentage": 0.0000001039,
//     "NPS_Score": 46.9,
//     "ROI_Multiple": 0.4381729658,
//     "Key Insight": "The ROI (0.44) is low despite a massive investment (~962M), indicating inefficient spending. A huge portion (65.23%) goes to Sponsorship, but its impact on GMV is weak. Digital (1.41%) and SEM (6.44%) are underutilized, missing potential online sales. Online Marketing (17.02%) and Affiliates (5.23%) have moderate spending but need better execution. The declining NPS Score (46.9) suggests brand perception issues. Reducing Sponsorship spend and reallocating funds to high-performing digital channels while improving customer engagement are crucial next steps."
//   },
//   {
//     "Month": 10,
//     "Year": 2023,
//     "GMV": 502727831,
//     "Total Investment": 1701562973.6833823,
//     "TV Percentage": 3.6112157997,
//     "Digital Percentage": 7.4181678619,
//     "Sponsorship Percentage": 49.7616208367,
//     "Content Marketing Percentage": 2.0240654092,
//     "Online Marketing Percentage": 14.323171175,
//     "Affiliates Percentage": 4.0984149372,
//     "SEM Percentage": 18.7633439802,
//     "Radio Percentage": 0.0000000588,
//     "Other Percentage": 0.0000000588,
//     "NPS_Score": 44.4,
//     "ROI_Multiple": 0.2954506173,
//     "Key Insight": "Despite an extremely high investment (~1.7B), the ROI (0.30) remains very low, indicating inefficient budget allocation. Sponsorship (49.76%) dominates spending but fails to generate strong returns. Digital (7.42%) and SEM (18.76%) have moderate budgets but need optimization. Online Marketing (14.32%) and Affiliates (4.10%) contribute but require better execution. The NPS score (44.4) continues to decline, suggesting growing customer dissatisfaction. Reducing Sponsorship spend, optimizing SEM and digital channels, and enhancing customer engagement are critical next steps."
//   },
//   {
//     "Month": 11,
//     "Year": 2023,
//     "GMV": 331386937,
//     "Total Investment": 512162204.1619138,
//     "TV Percentage": 8.2408067319,
//     "Digital Percentage": 2.490361416,
//     "Sponsorship Percentage": 27.671147545,
//     "Content Marketing Percentage": 0.3292573866,
//     "Online Marketing Percentage": 38.1940998198,
//     "Affiliates Percentage": 12.8782766523,
//     "SEM Percentage": 10.1960504484,
//     "Radio Percentage": 0.0000001953,
//     "Other Percentage": 0.0000001953,
//     "NPS_Score": 47.0,
//     "ROI_Multiple": 0.6470351274,
//     "Key Insight": "Investment (~512M) is significantly lower than the previous month (~1.7B), yet the ROI (0.65) has improved considerably, indicating better budget efficiency. Online Marketing (38.19%) takes the highest share, contributing effectively to returns. Sponsorship (27.67%) still holds a significant portion but needs further assessment for effectiveness. Digital (2.49%) and SEM (10.20%) remain underutilized. The improved NPS score (47.0) suggests better customer satisfaction. Further reallocating resources from low-impact channels to digital and performance-driven marketing can enhance ROI."
//   },
//   {
//     "Month": 12,
//     "Year": 2023,
//     "GMV": 435820199,
//     "Total Investment": 1067453117.1634455,
//     "TV Percentage": 5.0564302428,
//     "Digital Percentage": 2.8697841409,
//     "Sponsorship Percentage": 53.1221631739,
//     "Content Marketing Percentage": 0.9998629906,
//     "Online Marketing Percentage": 21.0817273369,
//     "Affiliates Percentage": 6.3955389021,
//     "SEM Percentage": 10.4744932128,
//     "Radio Percentage": 0.0000000937,
//     "Other Percentage": 0.0000000937,
//     "NPS_Score": 45.8,
//     "ROI_Multiple": 0.4082804125,
//     "Key Insight": "Investment (~1.07B) has increased compared to November (~512M), but ROI (0.41) has dropped, indicating inefficient spending. Sponsorship (53.12%) dominates the budget but is not yielding proportionate returns. Online Marketing (21.08%) plays a significant role but requires further optimization. Digital (2.87%) and SEM (10.47%) are still underutilized. The NPS score (45.8) has slightly declined, suggesting potential customer dissatisfaction. Reducing Sponsorship spending, reallocating budget to performance-driven channels like SEM and Digital, and enhancing customer engagement strategies are necessary for improving efficiency and returns."
//   },
//   {
//     "Month": 1,
//     "Year": 2024,
//     "GMV": 387192999,
//     "Total Investment": 741960000.0000002,
//     "TV Percentage": 5.9032831959,
//     "Digital Percentage": 0.6145883875,
//     "Sponsorship Percentage": 5.6606825166,
//     "Content Marketing Percentage": 1.2130033964,
//     "Online Marketing Percentage": 30.8641975309,
//     "Affiliates Percentage": 9.933150035,
//     "SEM Percentage": 5.6606825166,
//     "Radio Percentage": 3.6390101892,
//     "Other Percentage": 36.5114022319,
//     "NPS_Score": 47.1,
//     "ROI_Multiple": 0.5218515809,
//     "Key Insight": "Investment (~742M) is lower than December (~1.07B), yet ROI (0.52) has improved, indicating better efficiency. The budget is more evenly distributed, reducing over-reliance on Sponsorship (5.66%) and shifting focus to Online Marketing (30.86%). However, a large portion (36.51%) is categorized as 'Other,' requiring further breakdown to assess its impact. Digital (0.61%) and SEM (5.66%) remain underfunded despite their potential. The NPS score (47.1) has improved slightly, suggesting better customer perception. Optimizing the 'Other' category, increasing Digital & SEM investments, and refining Online Marketing strategies can further enhance ROI."
//   },
//   {
//     "Month": 2,
//     "Year": 2024,
//     "GMV": 331567025,
//     "Total Investment": 480520000.0000003,
//     "TV Percentage": 5.3816857096,
//     "Digital Percentage": 3.980377546,
//     "Sponsorship Percentage": 24.4018049346,
//     "Content Marketing Percentage": 1.2419274714,
//     "Online Marketing Percentage": 41.3975823812,
//     "Affiliates Percentage": 13.4542142739,
//     "SEM Percentage": 10.1424076834,
//     "Radio Percentage": 0.0000002081,
//     "Other Percentage": 0.0000002081,
//     "NPS_Score": 50.3,
//     "ROI_Multiple": 0.6900171169,
//     "Key Insight": "Investment (~481M) has decreased compared to January (~742M), yet ROI (0.69) has significantly improved, indicating highly efficient budget allocation. Online Marketing (41.40%) is the dominant focus and appears to be driving strong returns. Sponsorship (24.40%) is still a major expense but has been reduced compared to earlier months. Digital (3.98%) and SEM (10.14%) have received slight increases but could be further optimized. The NPS score (50.3) has improved significantly, suggesting stronger customer satisfaction. Maintaining this efficient spending strategy while fine-tuning Digital & SEM investments and further evaluating Sponsorship returns can maximize future growth."
//   },
//   {
//     "Month": 3,
//     "Year": 2024,
//     "GMV": 404003023,
//     "Total Investment": 1000246214.2925962,
//     "TV Percentage": 9.2977107707,
//     "Digital Percentage": 2.0994830773,
//     "Sponsorship Percentage": 41.5797624682,
//     "Content Marketing Percentage": 0.3699089231,
//     "Online Marketing Percentage": 18.4332797426,
//     "Affiliates Percentage": 6.2161361651,
//     "SEM Percentage": 5.1923129762,
//     "Radio Percentage": 0.8697858463,
//     "Other Percentage": 15.9416200305,
//     "NPS_Score": 49.0,
//     "ROI_Multiple": 0.4039035762,
//     "Key Insight": "Investment (~1.00B) has more than doubled compared to February (~481M), yet ROI (0.40) has significantly dropped, signaling inefficient budget allocation. Sponsorship (41.58%) has surged again, which may be limiting returns. Online Marketing (18.43%) and SEM (5.19%) have decreased, potentially impacting overall efficiency. Digital (2.10%) remains underfunded despite its proven value in previous months. The NPS score (49.0) has declined slightly, indicating a minor dip in customer satisfaction. Reducing reliance on Sponsorship, reallocating funds toward Online Marketing, Digital, and SEM, and optimizing spending efficiency are crucial to improving profitability."
//   },
//   {
//     "Month": 4,
//     "Year": 2024,
//     "GMV": 339703548,
//     "Total Investment": 568482413.7931037,
//     "TV Percentage": 9.1563012837,
//     "Digital Percentage": 1.533718808,
//     "Sponsorship Percentage": 42.7600803669,
//     "Content Marketing Percentage": 0.0613487523,
//     "Online Marketing Percentage": 29.0501679422,
//     "Affiliates Percentage": 10.0151838162,
//     "SEM Percentage": 7.4231990307,
//     "Radio Percentage": 0.0000001759,
//     "Other Percentage": 0.0000001759,
//     "NPS_Score": 51.8,
//     "ROI_Multiple": 0.5975621053,
//     "Key Insight": "Investment (~568M) has decreased significantly from March (~1.00B), leading to a noticeable improvement in ROI (0.60 from 0.40). Sponsorship (42.76%) remains high, limiting efficiency, while Online Marketing (29.05%) has seen an increase, likely contributing to better returns. Digital (1.53%) remains underutilized, missing potential opportunities. SEM (7.42%) has improved slightly but still has room for growth. The NPS score (51.8) has increased, indicating improved customer sentiment. To further enhance ROI, reducing Sponsorship spending, increasing Digital and SEM investment, and continuing to optimize Online Marketing strategies are recommended."
//   },
//   {
//     "Month": 5,
//     "Year": 2024,
//     "GMV": 409453151,
//     "Total Investment": 780570000.0,
//     "TV Percentage": 1.7551276631,
//     "Digital Percentage": 0.9864586136,
//     "Sponsorship Percentage": 40.5857258158,
//     "Content Marketing Percentage": 1.0120809152,
//     "Online Marketing Percentage": 30.2983717027,
//     "Affiliates Percentage": 8.7115825615,
//     "SEM Percentage": 8.8525052205,
//     "Radio Percentage": 1.4092265908,
//     "Other Percentage": 6.3889209168,
//     "NPS_Score": 47.3,
//     "ROI_Multiple": 0.5245566074,
//     "Key Insight": "Investment (~781M) has increased compared to April (~568M), but ROI (0.52) has slightly declined from 0.60, indicating a decrease in budget efficiency. Sponsorship (40.59%) still dominates spending but does not seem to yield proportional returns. Online Marketing (30.30%) remains strong and continues to be a key driver. SEM (8.85%) has seen slight growth but may still be underfunded. Digital (0.99%) remains extremely low, missing out on significant opportunities. The NPS score (47.3) has declined, suggesting a slight drop in customer satisfaction. To improve performance, shifting budget from Sponsorship to Digital and SEM, optimizing Online Marketing, and improving customer engagement strategies are critical."
//   },
//   {
//     "Month": 6,
//     "Year": 2024,
//     "GMV": 305913306,
//     "Total Investment": 428342164.2531141,
//     "TV Percentage": 3.8817492691,
//     "Digital Percentage": 3.316882215,
//     "Sponsorship Percentage": 58.4778778834,
//     "Content Marketing Percentage": 0.105244426,
//     "Online Marketing Percentage": 18.6096549242,
//     "Affiliates Percentage": 6.4621774174,
//     "SEM Percentage": 8.7208691779,
//     "Radio Percentage": 0.0000002335,
//     "Other Percentage": 0.0000002335,
//     "NPS_Score": 50.5,
//     "ROI_Multiple": 0.7141797645,
//     "Key Insight": "Despite a significant drop in investment (~428M from ~781M in May), ROI (0.71) has improved, indicating better budget efficiency. However, Sponsorship spending (58.48%) has reached its highest level yet, which may limit further efficiency gains. Online Marketing (18.61%) has decreased, which might impact digital engagement. SEM (8.72%) has remained steady but could be further optimized. Digital (3.32%) has slightly improved but is still underutilized. The NPS score (50.5) has increased, showing improved customer perception. To further enhance efficiency, reducing Sponsorship allocation and increasing Digital & SEM investments while strengthening Online Marketing is recommended."
//   }
// ];

// // NPS Score data by month
// export const npsData = rawMonthlyData.map(item => ({
//   month: getMonthName(item.Month, item.Year),
//   score: item.NPS_Score
// }));

// // Calculate total marketing spend
// export const totalMarketingSpend = rawMonthlyData.reduce(
//   (sum, item) => sum + item["Total Investment"],
//   0
// );

// // Calculate total revenue (GMV)
// export const totalRevenue = rawMonthlyData.reduce(
//   (sum, item) => sum + item.GMV,
//   0
// );

// // Calculate average ROI
// export const avgROI = rawMonthlyData.reduce(
//   (sum, item) => sum + item.ROI_Multiple,
//   0
// ) / rawMonthlyData.length;

// // Marketing channel distribution based on the latest month data (June 2024)
// const latestMonth = rawMonthlyData[rawMonthlyData.length - 1];
// export const marketingSpendByChannel = [
//   { 
//     name: 'TV', 
//     spend: Math.round(latestMonth["Total Investment"] * latestMonth["TV Percentage"] / 100),
//     roi: 2.7 // Estimated ROI for TV
//   },
//   { 
//     name: 'Digital', 
//     spend: Math.round(latestMonth["Total Investment"] * latestMonth["Digital Percentage"] / 100),
//     roi: 4.5 // Estimated ROI for Digital
//   },
//   { 
//     name: 'Sponsorship', 
//     spend: Math.round(latestMonth["Total Investment"] * latestMonth["Sponsorship Percentage"] / 100),
//     roi: 1.2 // Estimated ROI for Sponsorship
//   },
//   { 
//     name: 'Online Marketing', 
//     spend: Math.round(latestMonth["Total Investment"] * latestMonth["Online Marketing Percentage"] / 100),
//     roi: 3.8 // Estimated ROI for Online Marketing
//   },
//   { 
//     name: 'Affiliates', 
//     spend: Math.round(latestMonth["Total Investment"] * latestMonth["Affiliates Percentage"] / 100),
//     roi: 3.5 // Estimated ROI for Affiliates
//   },
//   { 
//     name: 'SEM', 
//     spend: Math.round(latestMonth["Total Investment"] * latestMonth["SEM Percentage"] / 100),
//     roi: 5.1 // Estimated ROI for SEM
//   }
// ];

// // KPI categories data for Performance Drivers tab
// export const revenueSalesKPIs = [
//   { name: 'GMV Growth', impact: 32 },
//   { name: 'Average Order Value', impact: 28 },
//   { name: 'Conversion Rate', impact: 25 },
//   { name: 'Customer Acquisition', impact: 22 },
//   { name: 'Repeat Purchase Rate', impact: 18 }
// ].sort((a, b) => b.impact - a.impact);

// export const customerEngagementKPIs = [
//   { name: 'NPS Score', impact: 30 },
//   { name: 'Customer Retention', impact: 28 },
//   { name: 'Website Traffic', impact: 25 },
//   { name: 'Email Open Rate', impact: 22 },
//   { name: 'App Downloads', impact: 15 }
// ].sort((a, b) => b.impact - a.impact);

// export const marketingChannelKPIs = [
//   { name: 'Digital Ad Performance', impact: 26 },
//   { name: 'SEM Efficiency', impact: 24 },
//   { name: 'Social Media Engagement', impact: 22 },
//   { name: 'Online Marketing ROI', impact: 20 },
//   { name: 'Affiliate Network Growth', impact: 18 }
// ].sort((a, b) => b.impact - a.impact);

// export const productDiscountKPIs = [
//   { name: 'Promotional Discount Rate', impact: 24 },
//   { name: 'Price Elasticity', impact: 22 },
//   { name: 'Discount Conversion Rate', impact: 20 },
//   { name: 'Profit Margin', impact: 18 },
//   { name: 'Coupon Redemption Rate', impact: 16 }
// ].sort((a, b) => b.impact - a.impact);

// export const weatherEventKPIs = [
//   { name: 'Seasonal Fluctuations', impact: 14 },
//   { name: 'Weather Conditions', impact: 12 },
//   { name: 'Holiday Impact', impact: 10 },
//   { name: 'Special Event Boosts', impact: 8 }
// ].sort((a, b) => b.impact - a.impact);

// export const additionalContextKPIs = [
//   { name: 'Market Competition', impact: 20 },
//   { name: 'Economic Indicators', impact: 18 },
//   { name: 'Supply Chain Efficiency', impact: 16 },
//   { name: 'Technology Adoption', impact: 14 }
// ].sort((a, b) => b.impact - a.impact);

// // Overall KPI impact (combined from all categories)
// export const overallKPIimpact = [
//   { name: 'Marketing Channels', impact: 35 },
//   { name: 'Revenue & Sales', impact: 25 },
//   { name: 'Customer Engagement', impact: 20 },
//   { name: 'Product & Pricing', impact: 12 },
//   { name: 'External Factors', impact: 8 }
// ].sort((a, b) => b.impact - a.impact);

// export const kpiDrivers = [
//   { name: 'Marketing Spend', impact: 35 },
//   { name: 'Promotions/Discounts', impact: 25 },
//   { name: 'Seasonal Factors', impact: 15 },
//   { name: 'NPS Score', impact: 12 },
//   { name: 'Weather', impact: 8 },
//   { name: 'Other Factors', impact: 5 },
// ];

// // Product category performance data
// export const categoryPerformance = [
//   { name: 'Smartphones', revenue: 250000000, growth: 12, adSpend: 80000000 },
//   { name: 'Laptops', revenue: 220000000, growth: 8, adSpend: 70000000 },
//   { name: 'TVs', revenue: 180000000, growth: 15, adSpend: 60000000 },
//   { name: 'Audio', revenue: 120000000, growth: 5, adSpend: 50000000 },
//   { name: 'Gaming', revenue: 160000000, growth: 20, adSpend: 55000000 },
//   { name: 'Accessories', revenue: 90000000, growth: 10, adSpend: 30000000 },
// ];

// // Budget optimization data
// export const optimizedBudget = [
//   { name: 'Digital', current: Math.round(latestMonth["Total Investment"] * latestMonth["Digital Percentage"] / 100), recommended: Math.round(latestMonth["Total Investment"] * 15 / 100) },
//   { name: 'Sponsorship', current: Math.round(latestMonth["Total Investment"] * latestMonth["Sponsorship Percentage"] / 100), recommended: Math.round(latestMonth["Total Investment"] * 30 / 100) },
//   { name: 'Online Marketing', current: Math.round(latestMonth["Total Investment"] * latestMonth["Online Marketing Percentage"] / 100), recommended: Math.round(latestMonth["Total Investment"] * 25 / 100) },
//   { name: 'TV', current: Math.round(latestMonth["Total Investment"] * latestMonth["TV Percentage"] / 100), recommended: Math.round(latestMonth["Total Investment"] * 5 / 100) },
//   { name: 'SEM', current: Math.round(latestMonth["Total Investment"] * latestMonth["SEM Percentage"] / 100), recommended: Math.round(latestMonth["Total Investment"] * 15 / 100) },
//   { name: 'Affiliates', current: Math.round(latestMonth["Total Investment"] * latestMonth["Affiliates Percentage"] / 100), recommended: Math.round(latestMonth["Total Investment"] * 10 / 100) },
// ];

// export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];