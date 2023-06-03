import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
import '../zwc-icon';
type Status = 'primary' | 'dark' | 'success' | 'danger' | 'info' | 'unknown';
export declare class ZwcBadge extends LitElement {
    static styles?: CSSResultGroup | undefined;
    status: Status;
    text: string;
    color: undefined;
    backgroundColor: undefined;
    size: string;
    hasPadding: boolean;
    render(): TemplateResult;
    protected handleDefaultSlot(e: Event): void;
    sanitize(node: Node): string | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-badge': ZwcBadge;
    }
}
export {};
