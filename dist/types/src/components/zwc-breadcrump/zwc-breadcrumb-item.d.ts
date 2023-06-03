import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
export declare class ZwcBreadcrumbItem extends LitElement {
    href?: string;
    icon?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    rel: string;
    text: string;
    inverted: boolean;
    static styles?: CSSResultGroup | undefined;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-breadcrumb-item': ZwcBreadcrumbItem;
    }
}
