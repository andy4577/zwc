import type { Chart, ChartType } from 'chart.js';
export declare const legendMargin: {
    id: string;
    beforeInit(chart: Chart, _args: any, options: ILegendMarginOptions): void;
};
export interface ILegendMarginOptions {
    margin?: number;
}
declare module 'chart.js' {
    interface LegendElement {
        fit: () => unknown;
    }
    interface PluginOptionsByType<TType extends ChartType> {
        legendMargin?: ILegendMarginOptions;
    }
}
