export type WidgetType = 
  | 'MARKET_DATA'
  | 'YIELD_CURVES'
  | 'ECONOMIC_RELEASES'
  | 'GAP_POSITION'
  | 'FLOW_DATA'
  | 'PRICING_ENGINE';

export interface WindowState {
  id: string;
  type: WidgetType;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
}
