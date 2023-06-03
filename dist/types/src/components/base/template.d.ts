import { Base } from './base';
import type { ZwcTemplate } from '../shared/zwc-template';
export declare abstract class Template extends Base {
    /**
     * Declare in extended class
     * decorated data property
     * @state()
     * data: string = '';
     */
    abstract data: string;
    content: ZwcTemplate;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected handleChange(ev: Event): void;
}
