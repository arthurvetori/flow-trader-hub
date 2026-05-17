import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { portfolioSummary } from '../../data/mockData';
import { TrendingUp, Activity, Briefcase } from 'lucide-react';

export const PortfolioSummaryWidget = () => {
  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <Card className="h-full bg-gradient-to-br from-white to-slate-50 border-slate-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-primary text-lg flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-blue-600" />
          Portfolio Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 pt-4">
        <div className="col-span-2 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500 font-semibold mb-1">Total AUM</p>
          <p className="text-3xl font-bold tracking-tight text-slate-900">{formatBRL(portfolioSummary.totalAUM)}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm text-slate-500 font-semibold">Daily PnL</p>
            <Activity className="h-4 w-4 text-green-600" />
          </div>
          <div>
            <p className="text-xl font-bold text-green-600">+{formatBRL(portfolioSummary.dailyPnL)}</p>
            <p className="text-xs text-green-600 font-medium">+{portfolioSummary.dailyReturn}%</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm text-slate-500 font-semibold">YTD Return</p>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <p className="text-xl font-bold text-slate-900">+{portfolioSummary.ytdReturn}%</p>
            <p className="text-xs text-slate-500 font-medium">{portfolioSummary.activePositions} Active Pos</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
