import { TemplateResult } from 'lit';
import { Template } from '../base';
import '../shared/zwc-template';
type LinkData = {
    href: string;
    target: string;
};
export declare class ZwcCard extends Template {
    cardBackground: string;
    hasCenteredContent: boolean;
    hasInvertedContent: boolean;
    hasCardClickable: boolean;
    link: LinkData;
    /** data will receive HTML string from zwp-template */
    data: string;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-card': ZwcCard;
    }
}
export {};
