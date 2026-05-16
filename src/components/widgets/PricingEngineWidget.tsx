import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';

export const PricingEngineWidget = () => {
  const [amount, setAmount] = useState('10000000');
  const [rate, setRate] = useState('10.5');
  const [days, setDays] = useState('252');

  const calculatePU = () => {
    const r = parseFloat(rate) / 100;
    const d = parseFloat(days);
    const pu = 1000 / Math.pow(1 + r, d / 252);
    return pu.toFixed(6);
  };

  const calculateMtM = () => {
    const pu = parseFloat(calculatePU());
    const amt = parseFloat(amount);
    return ((amt / 1000) * pu).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-amber text-lg">LTN Pricer (Mock)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6 mt-2">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-muted-foreground font-semibold uppercase">Notional (BRL)</label>
            <Input 
              type="number" 
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
              className="font-mono"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-muted-foreground font-semibold uppercase">Market Rate (%)</label>
            <Input 
              type="number" 
              value={rate}
              step="0.01"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRate(e.target.value)}
              className="font-mono"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-muted-foreground font-semibold uppercase">Days to Mat (DU)</label>
            <Input 
              type="number" 
              value={days}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDays(e.target.value)}
              className="font-mono"
            />
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 flex flex-col gap-3 border border-border">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground font-medium">Unit Price (PU)</span>
            <span className="text-amber font-mono font-bold text-lg">{calculatePU()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground font-medium">Mark-to-Market</span>
            <span className="text-green-400 font-mono font-bold text-lg">R$ {calculateMtM()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
