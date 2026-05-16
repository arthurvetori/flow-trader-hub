import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { gapRisks } from '../../data/mockData';

export const GapPositionWidget = () => {
  return (
    <Card className="flex flex-col gap-4 h-full">
      <CardHeader className="pb-0">
        <CardTitle className="text-amber text-lg">Gap Position Management</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-6 pt-4">
        <div className="flex-1 min-h-[200px]">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">DV01 EXPOSURE BY RISK FACTOR (M BRL)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={gapRisks} margin={{ top: 5, right: 20, bottom: 25, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="riskFactor" stroke="hsl(var(--muted-foreground))" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} angle={-20} textAnchor="end" />
              <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))', borderRadius: '0.5rem' }}
                cursor={{ fill: 'hsl(var(--muted))' }}
              />
              <ReferenceLine y={0} stroke="hsl(var(--muted-foreground))" />
              <Bar dataKey="dv01" fill="#f87171" name="DV01" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-2">LIMIT UTILIZATION</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Risk Factor</TableHead>
                <TableHead className="text-right">DV01 (M)</TableHead>
                <TableHead className="text-right">Limit (M)</TableHead>
                <TableHead className="text-right">Util %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gapRisks.map((risk, i) => (
                <TableRow key={i}>
                  <TableCell>{risk.riskFactor}</TableCell>
                  <TableCell className="text-right font-bold text-red-400">{risk.dv01.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{risk.limit.toFixed(2)}</TableCell>
                  <TableCell className={`text-right ${risk.util > 80 ? 'text-red-400' : 'text-amber'}`}>
                    {risk.util.toFixed(1)}%
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
