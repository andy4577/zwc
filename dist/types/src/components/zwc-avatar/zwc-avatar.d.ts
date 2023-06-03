import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
export declare class ZwcAvatar extends LitElement {
    backgroundColor: string;
    color: string;
    size: string;
    outline: boolean;
    static styles?: CSSResultGroup | undefined;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-avatar': ZwcAvatar;
    }
}
