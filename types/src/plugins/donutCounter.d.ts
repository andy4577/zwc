import type { Chart, ChartType } from 'chart.js';
export declare const donutCounter: {
    id: string;
    afterDraw(chart: Chart, _args: any, options: IDonutCounterOptions): void;
};
export interface IDonutCounterOptions {
    fontColor?: string;
    fontSize?: number;
    fontFamily?: string;
}
declare module 'chart.js' {
    interface PluginOptionsByType<TType extends ChartType> {
        donutCounter?: IDonutCounterOptions;
    }
}
