import { LitElement, TemplateResult } from 'lit';
export declare class ZwcTemplate extends LitElement {
    allText: null;
    render(): TemplateResult;
    protected handleSlotChange(e: Event): void;
    emitTagContent(data: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-template': ZwcTemplate;
    }
}
