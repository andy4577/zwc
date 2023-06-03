import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
export declare class ZwcIcon extends LitElement {
    static styles?: CSSResultGroup | undefined;
    size: string;
    icon: string;
    color: undefined;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-icon': ZwcIcon;
    }
}
