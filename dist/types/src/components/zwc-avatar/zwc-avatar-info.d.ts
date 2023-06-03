import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
import './zwc-avatar';
export declare class ZwcAvatarInfo extends LitElement {
    backgroundColor: string;
    color: string;
    title: string;
    subtitle: string;
    size: string;
    outline: boolean;
    orientation: 'horizontal' | 'vertical';
    static styles?: CSSResultGroup | undefined;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-avatar-info': ZwcAvatarInfo;
    }
}
