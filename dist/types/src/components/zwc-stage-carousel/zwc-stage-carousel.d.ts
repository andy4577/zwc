import { TemplateResult } from 'lit';
import { Base } from '../base';
type StageType = 'none' | 'button' | 'link' | 'dropdown' | 'dropdownLink';
export declare class ZwcStageCarousel extends Base {
    type: StageType;
    headline: string;
    emphasized: string;
    subline: string;
    paginationRight: boolean;
    inverted: boolean;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-stage-carousel': ZwcStageCarousel;
    }
}
export {};
