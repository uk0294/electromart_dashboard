// lib/data/marketing-roi.ts - Data specific to the Marketing ROI tab
import { rawMonthlyData } from './common';

// Get the latest month data for marketing channel distribution
const latestMonth = rawMonthlyData[rawMonthlyData.length - 1];

// Marketing channel distribution based on the latest month data (June 2024)
export const marketingSpendByChannel = [
  { 
    name: 'TV', 
    spend: Math.round(latestMonth["Total Investment"] * latestMonth["TV Percentage"] / 100),
    roi: 2.7 // Estimated ROI for TV
  },
  { 
    name: 'Digital', 
    spend: Math.round(latestMonth["Total Investment"] * latestMonth["Digital Percentage"] / 100),
    roi: 4.5 // Estimated ROI for Digital
  },
  { 
    name: 'Sponsorship', 
    spend: Math.round(latestMonth["Total Investment"] * latestMonth["Sponsorship Percentage"] / 100),
    roi: 1.2 // Estimated ROI for Sponsorship
  },
  { 
    name: 'Online Marketing', 
    spend: Math.round(latestMonth["Total Investment"] * latestMonth["Online Marketing Percentage"] / 100),
    roi: 3.8 // Estimated ROI for Online Marketing
  },
  { 
    name: 'Affiliates', 
    spend: Math.round(latestMonth["Total Investment"] * latestMonth["Affiliates Percentage"] / 100),
    roi: 3.5 // Estimated ROI for Affiliates
  },
  { 
    name: 'SEM', 
    spend: Math.round(latestMonth["Total Investment"] * latestMonth["SEM Percentage"] / 100),
    roi: 5.1 // Estimated ROI for SEM
  }
];

// Additional ROI-related data could be added here
export const channelTimeImpact = [
  { channel: 'Social Media', impactDelay: '2-5 days' },
  { channel: 'Search', impactDelay: '1-3 days' },
  { channel: 'Email', impactDelay: 'Same day - 2 days' },
  { channel: 'TV', impactDelay: '1-3 weeks' },
  { channel: 'Display', impactDelay: '3-7 days' }
];