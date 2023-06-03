import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
type ButtonType = 'button' | 'link';
type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';
type ButtonStatus = 'primary' | 'secondary' | 'tertiary-negative' | 'tertiary-positive' | 'tertiary-alert' | 'text';
export declare class ZwcButton extends LitElement {
    static styles?: CSSResultGroup | undefined;
    type: ButtonType;
    size: ButtonSize;
    status: ButtonStatus;
    text: string;
    isInverted: boolean;
    isDisabled: boolean;
    isIconAlt: boolean;
    color: undefined;
    backgroundColor: undefined;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-button': ZwcButton;
    }
}
export {};
