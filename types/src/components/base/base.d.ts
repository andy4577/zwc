import { LitElement } from 'lit';
/**
 * @class Base extends LitElement
 *
 * It encapsulates all common methods and properties needed for all
 * ZWC elements
 */
export declare class Base extends LitElement {
    static shadowRootOptions: ShadowRootInit;
    /**
     * It removes shadow-root from created elements
     * this allows light-dom where styles are leaked into
     * components. Generally not recommended.
     * However since we have all styles ready it is beneficial
     * to allow styles to be inherited from global styles. Later we can encapsulate
     * styles when needed.
     * @returns this
     */
    protected createRenderRoot(): Element | ShadowRoot;
}
