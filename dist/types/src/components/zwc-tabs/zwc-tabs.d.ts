import { TemplateResult } from 'lit';
import { Base } from '../base';
import { TabData, ZwcTabsTemplate } from './zwc-tabs-template';
import { TabsAlignment } from './zwc-tabs-renderer';
import './zwc-tabs-template';
import './zwc-tabs-renderer';
/**
 * ZWC Tab Web component.
 * @usage
 *
    <zwc-tabs>
      <zwc-tabs-template>
        <template tab="tab-1">
          <div class="label">Header Tab 1</div>
          <div class="body">
            Body content for tab 1.
          </div>
        </template>
        <template tab="tab-2">
          <div class="label">Header Tab 2</div>
          <div class="body">
            Body content for tab 2.
          </div>
        </template>
        <template tab="tab-3">
          <div class="label">Header 3</div>
          <div class="body">
            Body content for tab 3.
          </div>
        </template>
      </zwc-tabs-template>
    </zwc-tabs>
  <!-- or -->
    <zwc-tabs
      data='[{"id":"tab-2","label":"Header Tab 2","body":"Body content for tab 2."},{"id":"tab-3","label":"Header 3","body":"Body content for tab 3."}]'
      ></zwc-tabs>
 */
export declare class ZwcTabs extends Base {
    data: TabData[];
    layout: TabsAlignment;
    icons: string;
    scrollToTab: boolean;
    collector: ZwcTabsTemplate;
    protected render(): TemplateResult;
    protected firstUpdated(): void;
    protected handleChange(ev: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-tabs': ZwcTabs;
    }
}
