import { TemplateResult } from 'lit';
import { Base } from '../base';
type Theme = 'white' | 'light' | 'dark';
export declare class ZwcTag extends Base {
    label: string;
    /**
     * The theme name to apply.
     */
    theme: Theme;
    get key(): string;
    render(): TemplateResult;
    emitChange(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-tag': ZwcTag;
    }
}
export {};
