import { MarketDataWidget } from './components/widgets/MarketDataWidget';
import { YieldCurveWidget } from './components/widgets/YieldCurveWidget';
import { EconomicReleasesWidget } from './components/widgets/EconomicReleasesWidget';
import { GapPositionWidget } from './components/widgets/GapPositionWidget';
import { HistoricalProductionWidget } from './components/widgets/HistoricalProductionWidget';
import { PricingEngineWidget } from './components/widgets/PricingEngineWidget';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 lg:p-8">
      <header className="mb-8 border-b border-border pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-wider text-amber">FLOW TRADER HUB</h1>
          <p className="text-muted-foreground text-sm">Dashboard & Analytics v2.0</p>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Market & Pricing (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <MarketDataWidget />
          <PricingEngineWidget />
        </div>

        {/* Middle Column - Curves & Gaps (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <YieldCurveWidget />
          <GapPositionWidget />
        </div>

        {/* Right Column - Flow & Macros (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <HistoricalProductionWidget />
          <EconomicReleasesWidget />
        </div>
      </main>
    </div>
  );
}

export default App;
