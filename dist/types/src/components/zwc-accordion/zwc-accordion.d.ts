import { TemplateResult } from 'lit';
import { Base } from '../base';
type Position = 'left' | 'right';
interface AccordionItem {
    key: string;
    title: string;
    bodyText: string;
}
export declare class ZwcAccordion extends Base {
    iconPosition: Position;
    openMultiple: boolean;
    data: AccordionItem[];
    activeDivs: NodeListOf<HTMLDivElement>;
    protected render(): TemplateResult;
    private renderAccordionItem;
    private clickHandler;
    private closeAll;
    private closeItem;
    private openItem;
    private getAccordionItem;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-accordion': ZwcAccordion;
    }
}
export {};
