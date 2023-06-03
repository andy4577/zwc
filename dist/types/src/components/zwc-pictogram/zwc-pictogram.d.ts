import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
export declare class ZwcPictogram extends LitElement {
    static styles?: CSSResultGroup | undefined;
    dark: boolean;
    pictogram: string;
    get pictogramClass(): string;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-pictogram': ZwcPictogram;
    }
}
