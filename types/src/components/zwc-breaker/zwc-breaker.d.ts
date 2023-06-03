import { TemplateResult } from 'lit';
import { Template } from '../base';
import '../shared/zwc-template';
export type BreakerData = {
    id: string;
    image: string;
    preline: string;
    title: string;
};
export declare class ZwcBreaker extends Template {
    title: string;
    showTitle: boolean;
    alignRight: boolean;
    /** data will receive HTML string from zwp-template */
    data: string;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-breaker': ZwcBreaker;
    }
}
