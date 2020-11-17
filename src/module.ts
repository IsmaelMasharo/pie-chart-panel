import { PanelPlugin } from '@grafana/data';
import { PieChartOptions } from './types';
import { PieChartPanel } from './PieChartPanel';

export const plugin = new PanelPlugin<PieChartOptions>(PieChartPanel).setPanelOptions(builder => {
  return builder
    .addRadio({
      path: 'legendPosition',
      defaultValue: 'bottom',
      name: 'Legend Position',
      settings: {
        options: [
          {
            value: 'bottom',
            label: 'Bottom',
          },
          {
            value: 'right',
            label: 'Right',
          },
        ],
      },
    })
    .addSelect({
      path: 'colorScale',
      name: 'Color Scale',
      defaultValue: 'Blues',
      settings: {
        options: [
          {
            value: 'Oranges',
            label: 'Oranges',
          },
          {
            value: 'Blues',
            label: 'Blues',
          },
          {
            value: 'Greens',
            label: 'Greens',
          },
          {
            value: 'Greys',
            label: 'Greys',
          },
          {
            value: 'Purples',
            label: 'Purples',
          },
          {
            value: 'Reds',
            label: 'Reds',
          },
          {
            value: 'Viridis',
            label: 'Viridis',
          },
          {
            value: 'Cividis',
            label: 'Cividis',
          },
        ],
      },
    })
    .addBooleanSwitch({
      path: 'pieCentered',
      name: 'Pie Chart Centered',
      defaultValue: true,
      showIf: config => config.legendPosition === 'right',
    })
    .addBooleanSwitch({
      path: 'displayTotals',
      name: 'Display Totals',
      defaultValue: true,
    });
});
