import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { usTreasuryCurve, diFuturoCurve } from '../../data/mockData';

export const YieldCurveWidget = () => {
  return (
    <Card className="flex flex-col gap-4 h-full min-h-[500px]">
      <CardHeader className="pb-0">
        <CardTitle className="text-amber text-lg">Yield Curves</CardTitle>
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
                contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#4ade80' }}
              />
              <Line type="monotone" dataKey="yield" stroke="#4ade80" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Yield" />
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
                contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#fbbf24' }}
              />
              <Line type="monotone" dataKey="rate" stroke="#fbbf24" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Rate" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
