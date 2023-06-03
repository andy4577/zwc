import { TemplateResult } from 'lit';
import { Base } from '../base';
import type { ChartComponentLike, ChartData, ChartOptions, ChartType, Plugin } from 'chart.js';
import { Chart } from 'chart.js';
/**
 * Base Chart of chartjs-web-components
 */
export declare abstract class ZwcBaseChart extends Base {
    abstract componentsToRegister: ChartComponentLike[];
    abstract type: ChartType;
    abstract options: ChartOptions;
    abstract defaultOptions: ChartOptions;
    abstract data: ChartData;
    chartConstructor: typeof Chart;
    chart: Chart | undefined;
    plugins: Plugin<ChartType>[];
    canvasRef: import("lit-html/directives/ref").Ref<HTMLCanvasElement>;
    defaultPlugins: Plugin<ChartType>[];
    get mergedOptions(): ChartOptions;
    firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected handleResize(): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-base-chart': ZwcBaseChart;
    }
}
