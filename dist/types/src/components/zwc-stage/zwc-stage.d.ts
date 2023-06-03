import { Base } from '../base/base';
import { TemplateResult } from 'lit';
import '../zwc-pictogram';
import '../zwc-promise-label';
import type { IPromise } from '../zwc-promise-label';
type StageType = 'image' | 'shape' | 'pictogram';
export declare class ZwcStage extends Base {
    type: StageType;
    /**
     * Sets image on left side when type="shape"
     */
    reversed: boolean;
    /** Sets inverted class on element */
    inverted: boolean;
    /** Align text left when type="shape" */
    leftAligned: boolean;
    /** Sets background class */
    background: string;
    preline: string;
    headline: string;
    pictogram: string;
    pictogramDark: boolean;
    /** Sets src att when type="image | shape" */
    imageSrc: string;
    promiseTitle: string;
    promiseSubtitle: string;
    promiseType: IPromise;
    get getImageSrc(): string;
    protected renderPromise(): TemplateResult | string;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-stage': ZwcStage;
    }
}
export {};
