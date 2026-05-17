import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { MarketDataWidget } from './components/widgets/MarketDataWidget';
import { YieldCurveWidget } from './components/widgets/YieldCurveWidget';
import { EconomicReleasesWidget } from './components/widgets/EconomicReleasesWidget';
import { GapPositionWidget } from './components/widgets/GapPositionWidget';
import { HistoricalProductionWidget } from './components/widgets/HistoricalProductionWidget';
import { PricingEngineWidget } from './components/widgets/PricingEngineWidget';
import { NewsFeedWidget } from './components/widgets/NewsFeedWidget';
import { PortfolioSummaryWidget } from './components/widgets/PortfolioSummaryWidget';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 lg:p-8">
      <header className="mb-6 border-b border-slate-200 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">FLOW TRADER HUB</h1>
          <p className="text-slate-500 text-sm font-medium mt-1">Dashboard & Analytics</p>
        </div>
      </header>

      <main>
        <Tabs defaultValue="trading" className="w-full">
          <TabsList className="mb-6 bg-slate-200/50 p-1">
            <TabsTrigger value="trading" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Trading Desk</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Risk & Analytics</TabsTrigger>
            <TabsTrigger value="flow" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Flow Production</TabsTrigger>
          </TabsList>

          <TabsContent value="trading" className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-0 border-none p-0 outline-none">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <MarketDataWidget />
              <PricingEngineWidget />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              <NewsFeedWidget />
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-0 border-none p-0 outline-none">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <YieldCurveWidget />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <GapPositionWidget />
            </div>
          </TabsContent>

          <TabsContent value="flow" className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-0 border-none p-0 outline-none">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <PortfolioSummaryWidget />
              <EconomicReleasesWidget />
            </div>
            <div className="lg:col-span-8 flex flex-col gap-6">
              <HistoricalProductionWidget />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
