import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { historicalProduction } from '../../data/mockData';

export const HistoricalProductionWidget = () => {
  return (
    <Card className="flex flex-col gap-2 h-full min-h-[400px]">
      <CardHeader className="pb-0">
        <CardTitle className="text-amber text-lg">Historical Production (BRL Billions)</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={historicalProduction} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCdb" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDeb" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorCpr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRl" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f472b6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f472b6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))', borderRadius: '0.5rem' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area type="monotone" dataKey="cdb" stroke="#fbbf24" fillOpacity={1} fill="url(#colorCdb)" name="CDB" />
            <Area type="monotone" dataKey="debentures" stroke="#4ade80" fillOpacity={1} fill="url(#colorDeb)" name="Debentures" />
            <Area type="monotone" dataKey="cpr" stroke="#818cf8" fillOpacity={1} fill="url(#colorCpr)" name="CPRs" />
            <Area type="monotone" dataKey="rl" stroke="#f472b6" fillOpacity={1} fill="url(#colorRl)" name="RL" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
