export declare const LOREM: {
    preline: string;
    headline: string;
    subtitle: string;
    body: string;
};
export declare const AUTHOR: {
    name: string;
    title: string;
};
export declare const INPUT_TYPES: {
    Text: string;
    Password: string;
    Number: string;
    Search: string;
    Tel: string;
    Url: string;
};
export declare const GRID_COLUMNS: number[];
export declare const LINKS: {
    label: string;
    href: string;
}[];
export declare const FOOTER_LINKS: {
    usefulLinks: {
        link: string;
        title: string;
    }[];
    navigation: {
        link: string;
        title: string;
    }[];
    legal: {
        link: string;
        title: string;
    }[];
};
export declare const SOCIAL_NETWORKS: string[];
/**
 * Generate X number of Lorem Ipsum sentences
 *
 * @param {Number} sentences - number of sentences to generate
 * @returns {String} - Lorem ipsum sentences
 */
export declare const loremIpsum: (sentences?: number) => string;
/**
 * Generate splide arrows
 * See https://splidejs.com/guides/arrows
 *
 * Options:
 * - buttons: Boolean - Append .btn shape class to arrows
 * - iconClass: String - custom icon class
 * - halfCircle: Boolean - append 'splide__arrows--half-circle' class to wrapper
 *
 * @param {Object} options
 * @returns {String} - Splide arrows
 */
export declare const generateSplideArrows: (options?: Record<string, any>) => string;
/**
 * Generates social bar links with wrapping div
 *
 * @returns {String} - social links with wrapper
 */
export declare const generateSocialLinks: () => string;
/**
 * Generates <li> items for footer links
 *
 * @returns {String} - footer links
 */
export declare const createLinkList: (list: any, classes: any) => string;
/**
 * Generates <label> checkbox items
 *
 * @returns {String} - checkbox labels
 */
export declare const createCheckboxLabels: (names: any) => string;
export declare const generateSocialShare: (number: any) => string;
