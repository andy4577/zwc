import type { ChartComponentLike, ChartData, ChartOptions, Plugin } from 'chart.js';
import { Chart } from 'chart.js';
import { ZwcBaseChart } from '../zwc-chart-base';
import { PropertyValues } from 'lit';
export type TBar = 'bar';
export declare class ZwcChartBar extends ZwcBaseChart {
    componentsToRegister: ChartComponentLike[];
    type: TBar;
    defaultOptions: ChartOptions<TBar>;
    plugins: Plugin<TBar>[];
    options: ChartOptions<TBar>;
    data: ChartData<TBar>;
    updated(changed: PropertyValues<this>): void;
    handleDataChange(chart: Chart, newData: ChartData<TBar>): {
        labels: unknown[];
        dataSetsDiff: (number | [number, number] | null)[][];
        direction: number;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-chart-bar': ZwcChartBar;
    }
}
