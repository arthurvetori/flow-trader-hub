export const usTreasuryCurve = [
  { maturity: '1M', yield: 5.37 },
  { maturity: '3M', yield: 5.39 },
  { maturity: '6M', yield: 5.38 },
  { maturity: '1Y', yield: 5.16 },
  { maturity: '2Y', yield: 4.88 },
  { maturity: '5Y', yield: 4.51 },
  { maturity: '10Y', yield: 4.60 },
  { maturity: '30Y', yield: 4.75 },
];

export const diFuturoCurve = [
  { maturity: 'F25', rate: 10.45 },
  { maturity: 'F26', rate: 10.82 },
  { maturity: 'F27', rate: 11.15 },
  { maturity: 'F29', rate: 11.45 },
  { maturity: 'F31', rate: 11.60 },
  { maturity: 'F33', rate: 11.65 },
];

export const fxRates = [
  { pair: 'USDBRL', last: 5.1245, change: 0.0125, changePct: 0.24 },
  { pair: 'EURUSD', last: 1.0845, change: -0.0015, changePct: -0.14 },
  { pair: 'GBPUSD', last: 1.2530, change: -0.0020, changePct: -0.16 },
  { pair: 'USDJPY', last: 156.45, change: 0.25, changePct: 0.16 },
  { pair: 'AUDUSD', last: 0.6650, change: 0.0010, changePct: 0.15 },
];

export const commodities = [
  { symbol: 'WTI Crude', last: 78.50, change: -0.45, changePct: -0.57 },
  { symbol: 'Brent Crude', last: 82.80, change: -0.50, changePct: -0.60 },
  { symbol: 'Gold', last: 2365.40, change: 15.20, changePct: 0.65 },
  { symbol: 'Silver', last: 28.50, change: 0.45, changePct: 1.60 },
  { symbol: 'Copper', last: 4.85, change: 0.05, changePct: 1.04 },
  { symbol: 'Soybeans', last: 1215.25, change: -5.50, changePct: -0.45 },
  { symbol: 'Corn', last: 465.50, change: -2.25, changePct: -0.48 },
];

export const economicReleases = [
  { time: '08:30', country: 'US', event: 'CPI MoM', actual: '0.3%', forecast: '0.4%', prev: '0.4%' },
  { time: '08:30', country: 'US', event: 'CPI YoY', actual: '3.4%', forecast: '3.4%', prev: '3.5%' },
  { time: '08:30', country: 'US', event: 'Core CPI MoM', actual: '0.3%', forecast: '0.3%', prev: '0.4%' },
  { time: '09:00', country: 'BR', event: 'IBC-Br', actual: '-0.34%', forecast: '-0.20%', prev: '0.40%' },
  { time: '18:30', country: 'BR', event: 'Selic Rate Decision', actual: '10.50%', forecast: '10.50%', prev: '10.75%' },
];

export const gapRisks = [
  { riskFactor: 'Pre-fixado (BRL)', dv01: -1.25, limit: -2.0, util: 62.5 },
  { riskFactor: 'IPCA (BRL)', dv01: -0.85, limit: -1.5, util: 56.6 },
  { riskFactor: 'Cupom Cambial', dv01: 0.45, limit: 1.0, util: 45.0 },
  { riskFactor: 'US Rates', dv01: -0.30, limit: -0.5, util: 60.0 },
];

export const historicalProduction = [
  { month: 'Jan', cdb: 2.5, debentures: 1.2, cpr: 0.8, rl: 0.5 },
  { month: 'Feb', cdb: 2.8, debentures: 1.5, cpr: 0.9, rl: 0.6 },
  { month: 'Mar', cdb: 3.1, debentures: 1.8, cpr: 1.1, rl: 0.7 },
  { month: 'Apr', cdb: 3.4, debentures: 2.0, cpr: 1.3, rl: 0.8 },
  { month: 'May', cdb: 3.8, debentures: 2.5, cpr: 1.5, rl: 0.9 },
  { month: 'Jun', cdb: 4.2, debentures: 2.9, cpr: 1.8, rl: 1.1 },
];
