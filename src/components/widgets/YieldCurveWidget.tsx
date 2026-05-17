import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { usTreasuryCurve, diFuturoCurve } from '../../data/mockData';

export const YieldCurveWidget = () => {
  return (
    <Card className="flex flex-col gap-4 h-full min-h-[500px]">
      <CardHeader className="pb-2 border-b border-border bg-slate-50/50">
        <CardTitle className="text-primary text-lg">Yield Curves</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-6 pt-4">
        <div className="flex-1 min-h-[200px]">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">US TREASURY YIELD CURVE (%)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={usTreasuryCurve} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="maturity" stroke="hsl(var(--muted-foreground))" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis domain={['auto', 'auto']} stroke="hsl(var(--muted-foreground))" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#2563eb' }}
              />
              <Line type="monotone" dataKey="yield" stroke="#2563eb" strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Yield" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 min-h-[200px]">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">B3 DI FUTURO CURVE (%)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={diFuturoCurve} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="maturity" stroke="hsl(var(--muted-foreground))" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis domain={['auto', 'auto']} stroke="hsl(var(--muted-foreground))" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#16a34a' }}
              />
              <Line type="monotone" dataKey="rate" stroke="#16a34a" strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Rate" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
