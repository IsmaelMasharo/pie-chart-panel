type legendPositions = 'bottom' | 'right';
type colorScales = 'Oranges' | 'Blues' | 'Greens' | 'Greys' | 'Purples' | 'Reds' | 'Viridis' | 'Cividis';
export interface PieChartOptions {
  pieCentered: boolean;
  legendPosition: legendPositions;
  displayTotals: boolean;
  colorScale: colorScales;
}
