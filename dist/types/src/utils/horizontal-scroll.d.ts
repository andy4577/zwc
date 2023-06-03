/**
 * Calculates offset coordinate for each element array.
 * @example calcLeftOffsets([200, 300, 400]) // [(200 / 2), (200 + 300 / 2), (200 + 300 + 400 / 2)] => [100, 350, 700];
 *
 * @param {Array<Number>} elementsWidthArray Array representing actual width of each element. e.i. [200, 205, 300, ...]
 * @returns Array
 */
export declare const calcLeftOffsets: (elementsWidthArray: number[]) => number[];
