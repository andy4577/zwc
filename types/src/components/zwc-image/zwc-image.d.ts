import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
export declare class ZwcImage extends LitElement {
    src: string;
    size: string;
    rounded: boolean;
    centered: boolean;
    static styles?: CSSResultGroup | undefined;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-image': ZwcImage;
    }
}
