import { TemplateResult } from 'lit';
import { Base } from '../base/base';
import type { ZwcTemplate } from '../shared/zwc-template/zwc-template';
type PictureData = {
    src: string;
    alt: string;
};
export declare class ZwcQuote extends Base {
    data: string;
    quoteText: string;
    author: string;
    title: string;
    showAuthorInfo: boolean;
    showAuthorImage: boolean;
    hasInvertedContent: boolean;
    background: string;
    picture: PictureData;
    content: ZwcTemplate;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-quote': ZwcQuote;
    }
}
export {};
