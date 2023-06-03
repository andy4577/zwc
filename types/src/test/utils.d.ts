import { TemplateResult } from 'lit';
export declare const NODE_TYPES: Readonly<{
    ELEMENT_NODE: 1;
    TEXT_NODE: 3;
    COMMENT_NODE: 8;
    DOCUMENT_FRAGMENT_NODE: 11;
}>;
export declare function fixture<T extends ChildNode>(template: TemplateResult): Promise<T & Element>;
export declare function fixtureCleanUp(): void;
