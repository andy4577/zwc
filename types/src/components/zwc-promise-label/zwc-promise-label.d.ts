import { TemplateResult } from 'lit';
import { Base } from '../base';
export type IPromise = 'promise' | 'social' | 'none';
export declare class ZwcPromise extends Base {
    title: string;
    subtitle: string;
    promise: IPromise;
    inverted: boolean;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-promise': ZwcPromise;
    }
}
