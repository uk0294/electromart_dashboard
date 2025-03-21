// lib/data/index.ts - Export all data from separate files for backward compatibility

// Re-export everything from individual files
export * from './common';
export * from './overview';
// In index.ts
export { npsData } from './overview';
export * from './performance-drivers';
export * from './marketing-roi';
export * from './budget-optimization';
export * from './product-analysis';