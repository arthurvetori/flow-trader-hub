import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { newsFeed } from '../../data/mockData';

export const NewsFeedWidget = () => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-2 border-b border-border bg-muted/30">
        <CardTitle className="text-primary text-lg">Market Headlines</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-y-auto">
        <ul className="divide-y divide-border">
          {newsFeed.map((news) => (
            <li key={news.id} className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-muted-foreground font-mono">{news.time}</span>
                <span className="text-xs font-semibold text-primary/70">{news.source}</span>
              </div>
              <p className="text-sm font-medium leading-snug">{news.headline}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
