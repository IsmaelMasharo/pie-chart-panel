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
    .addBooleanSwitch({
      path: 'pieCentered',
      name: 'Pie Chart Centered',
      defaultValue: true,
      showIf: config => config.legendPosition === 'right',
    });
});
