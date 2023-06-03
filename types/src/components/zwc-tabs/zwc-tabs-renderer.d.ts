import { TemplateResult } from 'lit';
import { Base } from '../base';
import '../zwc-icon';
import { TabData } from './zwc-tabs-template';
export type TabsAlignment = 'stretch' | 'left' | 'center' | 'right';
export declare class ZwcTabsRenderer extends Base {
    tabsData: TabData[];
    layout: TabsAlignment;
    icons: string;
    scrollToTab: boolean;
    headers: NodeListOf<HTMLButtonElement>;
    contentDivs: NodeListOf<HTMLDivElement>;
    tabsWrapper: HTMLDivElement;
    tabsHeader: HTMLDivElement;
    currentTabIndex: number;
    nextTabIndex: number;
    prevTabIndex: number;
    protected render(): TemplateResult;
    firstUpdated(): void;
    toggleTabsSliderArrows(): void;
    private handleSliderScroll;
    protected renderTabContents(tabs: TabData[]): TemplateResult;
    protected renderTabHeaders(tabs: TabData[]): TemplateResult;
    protected handleTabSwitch(e: Event): void;
    private setHeaderTabSelected;
    private setContentTabSelected;
    /**
     * Returns next leftScroll coordinate.
     * @param {String} direction 'forward' | 'back'
     * @param {Number} tabsWrapperCenter Coordinate 'x' value for wrapper center.
     * @param {Array<Number>} tabOffsetsCenters Array of tab left offsets for each tab
     * @returns Number
     */
    private getLeftScroll;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-tabs-renderer': ZwcTabsRenderer;
    }
}
