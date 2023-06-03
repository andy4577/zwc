/**
 * Returns true if device is < BREAKPOINT_XS
 *
 * @returns {boolean} - is device mobile
 */
export declare const isMobile: () => boolean;
/**
 * If given element is outside visible viewport, call native scrollIntoView to scroll to the element
 *
 * @param {HTMLElement} el - element to scroll to
 */
export declare const scrollToElement: (el: HTMLElement) => void;
/**
 * Toggles parent classes based on child horizontal-scroll position
 *
 * - For hiding/showing horizontal scroll arrows ¡
 *
 * @param {HTMLElement} wrapper - wrapping parent element
 * @param {HTMLElement} el - scrolling child element
 */
export declare const toggleHorizontalScrollArrows: (wrapper: HTMLElement, el: HTMLElement) => void;
/**
 * get the closest parent element with a matching selector
 *
 * @param elem
 * @param selector
 * @returns {null|*}
 */
export declare const getClosest: (elem: any, selector: any) => any;
