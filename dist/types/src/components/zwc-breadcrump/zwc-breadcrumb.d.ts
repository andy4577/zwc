import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
import './zwc-breadcrumb-item';
import '../shared/zwc-template';
export declare class ZwcBreadcrumb extends LitElement {
    defaultSlot: HTMLSlotElement | undefined;
    separatorSlot: HTMLSlotElement | undefined;
    inverted: boolean;
    static styles?: CSSResultGroup | undefined;
    private getSeparator;
    private handleSlotChange;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-breadcrumb': ZwcBreadcrumb;
    }
}
