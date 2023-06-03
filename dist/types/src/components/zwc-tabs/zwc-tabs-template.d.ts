import { LitElement, TemplateResult } from 'lit';
export type TabData = {
    id: string;
    label: string;
    body: string;
};
export declare class ZwcTabsTemplate extends LitElement {
    allText: null;
    render(): TemplateResult;
    protected handleSlotChange(e: Event): void;
    emitTagContent(data: TabData[]): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-tabs-template': ZwcTabsTemplate;
    }
}
