import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { fxRates as initialFx, commodities as initialCmdty } from '../../data/mockData';

export const MarketDataWidget = () => {
  const [fxRates, setFxRates] = useState(initialFx);
  const [commodities, setCommodities] = useState(initialCmdty);
  const [tickActive, setTickActive] = useState<Record<string, 'up' | 'down' | null>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newTicks: Record<string, 'up' | 'down' | null> = {};

      setFxRates(prev => prev.map(item => {
        // Random tick between -0.0050 and 0.0050
        const tick = (Math.random() - 0.5) * 0.01;
        const newLast = item.last + tick;
        const newChange = item.change + tick;
        const newPct = (newChange / (newLast - newChange)) * 100;
        
        newTicks[item.pair] = tick > 0 ? 'up' : 'down';

        return { ...item, last: newLast, change: newChange, changePct: newPct };
      }));

      setCommodities(prev => prev.map(item => {
        // Random tick between -0.50 and 0.50
        const tick = (Math.random() - 0.5) * 1.0;
        const newLast = item.last + tick;
        const newChange = item.change + tick;
        const newPct = (newChange / (newLast - newChange)) * 100;
        
        newTicks[item.symbol] = tick > 0 ? 'up' : 'down';

        return { ...item, last: newLast, change: newChange, changePct: newPct };
      }));

      setTickActive(newTicks);

      // Clear the tick animation class after 1s
      setTimeout(() => setTickActive({}), 1000);

    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex flex-col gap-4">
      <CardHeader className="pb-2 border-b border-border bg-slate-50/50">
        <CardTitle className="text-primary text-lg">Market Data (Live)</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-2">FOREIGN EXCHANGE</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pair</TableHead>
                <TableHead className="text-right">Last</TableHead>
                <TableHead className="text-right">Chg</TableHead>
                <TableHead className="text-right">Chg %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fxRates.map(fx => (
                <TableRow key={fx.pair}>
                  <TableCell className="font-bold">{fx.pair}</TableCell>
                  <TableCell className={`text-right font-mono ${tickActive[fx.pair] === 'up' ? 'flash-green' : tickActive[fx.pair] === 'down' ? 'flash-red' : ''}`}>
                    {fx.last.toFixed(4)}
                  </TableCell>
                  <TableCell className={`text-right font-mono ${fx.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {fx.change > 0 ? '+' : ''}{fx.change.toFixed(4)}
                  </TableCell>
                  <TableCell className={`text-right font-mono ${fx.changePct >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {fx.changePct > 0 ? '+' : ''}{fx.changePct.toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-2">COMMODITIES</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead className="text-right">Last</TableHead>
                <TableHead className="text-right">Chg</TableHead>
                <TableHead className="text-right">Chg %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {commodities.map(c => (
                <TableRow key={c.symbol}>
                  <TableCell className="font-bold">{c.symbol}</TableCell>
                  <TableCell className={`text-right font-mono ${tickActive[c.symbol] === 'up' ? 'flash-green' : tickActive[c.symbol] === 'down' ? 'flash-red' : ''}`}>
                    {c.last.toFixed(2)}
                  </TableCell>
                  <TableCell className={`text-right font-mono ${c.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {c.change > 0 ? '+' : ''}{c.change.toFixed(2)}
                  </TableCell>
                  <TableCell className={`text-right font-mono ${c.changePct >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {c.changePct > 0 ? '+' : ''}{c.changePct.toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
