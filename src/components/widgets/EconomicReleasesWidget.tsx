import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { economicReleases } from '../../data/mockData';

export const EconomicReleasesWidget = () => {
  return (
    <Card>
      <CardHeader className="pb-2 border-b border-border bg-slate-50/50">
        <CardTitle className="text-primary text-lg">Economic Releases</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Event</TableHead>
              <TableHead className="text-right">Actual</TableHead>
              <TableHead className="text-right">Forecast</TableHead>
              <TableHead className="text-right">Prev</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {economicReleases.map((release, i) => (
              <TableRow key={i}>
                <TableCell className="text-muted-foreground">{release.time}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={release.country === 'US' ? 'border-blue-500 text-blue-500' : 'border-green-500 text-green-500'}>
                    {release.country}
                  </Badge>
                </TableCell>
                <TableCell>{release.event}</TableCell>
                <TableCell className="text-right font-bold">{release.actual}</TableCell>
                <TableCell className="text-right text-muted-foreground">{release.forecast}</TableCell>
                <TableCell className="text-right text-muted-foreground">{release.prev}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
