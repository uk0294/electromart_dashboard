# ElectroMart Analytics Dashboard

ElectroMart Analytics Dashboard is a modern, interactive web application designed to visualize and analyze marketing performance data for a fictional electronics retailer. Built with Next.js and React, this dashboard provides comprehensive insights into marketing ROI, budget optimization, performance drivers, and product analysis.

![ElectroMart Dashboard Preview](https://via.placeholder.com/800x450?text=ElectroMart+Dashboard+Preview)

## Features

- **Interactive Dashboard Interface**: Navigate through different time periods and view analytics for specific months
- **Multiple Data Visualization Views**:
  - **Overview**: Revenue trends, marketing channel distribution, and key insights
  - **Performance Drivers**: KPI impact analysis with detailed metrics
  - **Budget Optimization**: Interactive tools to optimize marketing budget allocation
  - **Product Analysis**: Product category performance, top products, and growth analysis
- **AI-Powered Chatbot Assistant**: Get quick answers and insights about marketing data
- **Dynamic Data Period**: Automatically adjusts to display relevant date ranges
- **Responsive Design**: Optimized for both desktop and mobile devices

## Technologies Used

- **Next.js 15.2.3**: React framework for server-rendered applications
- **React 18**: JavaScript library for building user interfaces
- **TypeScript**: Static typing for enhanced code quality and developer experience
- **Recharts**: Composable charting library built on React components
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Unstyled, accessible components for building high‑quality web interfaces
- **Lucide React**: Beautiful & consistent icon pack as React components

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/electromart-dashboard.git
   cd electromart-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory (if needed for API keys, etc.):
   ```
   # Example environment variables
   NEXT_PUBLIC_API_URL=your_api_url_here
   ```

### Running the Application

#### Development Mode

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

#### Production Build

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Deployment

This project is configured for easy deployment on Vercel:

1. Push your repository to GitHub
2. Import the project in Vercel dashboard
3. Configure environment variables if needed
4. Deploy

## Project Structure

```
electromart-dashboard/
├── components/           # React components
│   ├── dashboard/        # Dashboard specific components
│   │   ├── budget-optimization.tsx
│   │   ├── chatbot.tsx
│   │   ├── electromart-dashboard.tsx
│   │   ├── kpi-category.tsx
│   │   ├── marketing-roi.tsx
│   │   ├── overview.tsx
│   │   ├── performance-drivers.tsx
│   │   ├── product-analysis.tsx
│   │   └── revenue-trend.tsx
│   └── ui/              # Reusable UI components
├── lib/                 # Utility functions and shared logic
│   ├── data/            # Data modules
│   │   ├── budget-optimization.ts
│   │   ├── common.ts
│   │   ├── marketing-roi.ts
│   │   ├── overview.ts
│   │   ├── performance-drivers.ts
│   │   └── product-analysis.ts
│   └── utils.ts         # Helper functions
├── app/                 # Next.js App Router
│   └── page.tsx         # Main entry point
├── public/              # Static assets
├── styles/              # Global styles
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Usage Guide

### Navigation

- Use the tabs at the top to navigate between different analytics views
- Use the left and right arrows in the header to navigate between different months
- The date range shown updates dynamically based on the selected month

### Dashboard Sections

#### Overview
Shows high-level metrics including revenue, marketing spend, ROI, and NPS score. Includes a revenue trend chart and marketing channel distribution.

#### Performance Drivers
Displays the relative impact of different KPI categories on revenue. Includes detailed breakdowns of various KPI types and their formulas.

#### Budget Optimization
Interactive tool that allows you to input a budget amount and see optimized allocations across different marketing channels, with projected revenue improvements.

#### Product Analysis
Visualizes product category performance, subcategory revenue, and top products by revenue. Includes recommendations for high-growth focus products.

### AI Assistant

Click the chat bubble in the bottom right corner to interact with the AI assistant. You can ask questions about:
- Budget recommendations
- ROI analysis
- Top products
- NPS score trends
- KPI impact

## Customization

### Changing Data Sources

The dashboard currently uses mock data defined in the `lib/data` directory. To connect to real data sources:

1. Modify the data provider files in `lib/data/`
2. Update the API calls or data fetching logic
3. Ensure the data structure matches the expected format for the visualization components

### Styling

The project uses Tailwind CSS for styling. To customize the appearance:

1. Modify the `tailwind.config.js` file to adjust colors, fonts, and other design tokens
2. Update component classes as needed
3. Add custom CSS in the `styles` directory if required

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Data visualization inspired by best practices in dashboard design
- Mock data represents realistic marketing analytics scenarios
- Icons provided by Lucide React
- UI components based on shadcn/ui
