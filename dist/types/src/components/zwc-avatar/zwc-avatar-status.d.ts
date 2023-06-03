import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
import './zwc-avatar';
import '../zwc-badge/zwc-badge';
export declare class ZwcAvatarStatus extends LitElement {
    backgroundColor: string;
    color: string;
    size: string;
    outline: boolean;
    static styles?: CSSResultGroup | undefined;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-avatar-status': ZwcAvatarStatus;
    }
}
