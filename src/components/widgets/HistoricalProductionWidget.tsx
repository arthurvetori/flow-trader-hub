import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { historicalProduction } from '../../data/mockData';

export const HistoricalProductionWidget = () => {
  return (
    <Card className="flex flex-col gap-2 h-full min-h-[400px]">
      <CardHeader className="pb-2 border-b border-border bg-slate-50/50">
        <CardTitle className="text-primary text-lg">Historical Production (BRL Billions)</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={historicalProduction} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCdb" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDeb" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#16a34a" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorCpr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRl" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area type="monotone" dataKey="cdb" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorCdb)" name="CDB" />
            <Area type="monotone" dataKey="debentures" stroke="#16a34a" strokeWidth={2} fillOpacity={1} fill="url(#colorDeb)" name="Debentures" />
            <Area type="monotone" dataKey="cpr" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorCpr)" name="CPRs" />
            <Area type="monotone" dataKey="rl" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorRl)" name="RL" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
