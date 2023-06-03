import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
import './zwc-avatar';
export declare class ZwcAvatarList extends LitElement {
    backgroundColor: string;
    size: string;
    avatars: never[];
    static styles?: CSSResultGroup | undefined;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-avatar-list': ZwcAvatarList;
    }
}
