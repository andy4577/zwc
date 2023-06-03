import { PropertyValueMap, TemplateResult } from 'lit';
import { Datepicker } from 'vanillajs-datepicker';
import { Base } from '../base';
import type { DatepickerOptions } from './Datepicker';
export declare class ZwcDatepicker extends Base {
    floatLabel: boolean;
    hasError: boolean;
    disabled: boolean;
    shape: boolean;
    placeholder: string;
    dateFormat: string;
    dataTodayHighlight: boolean;
    dataLanguage: string;
    locales: Record<string, any>[] | null;
    dataAutohide: boolean;
    dataShowCalendarWeeks: boolean;
    datepickerOptions: DatepickerOptions;
    labelText: string;
    private inputField;
    private isNotEmpty;
    private isActive;
    private datepickerInstance;
    private get options();
    protected render(): TemplateResult;
    protected firstUpdated(): void;
    setRoleAttr(datepickerInstance: Datepicker, role: string): void;
    protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected renderInputText(): TemplateResult;
    disconnectedCallback(): void;
    emitShow(e: CustomEvent): void;
    emitHide(e: CustomEvent): void;
    emitChangeYear(e: CustomEvent): void;
    emitChangeView(e: CustomEvent): void;
    emitChangeMonth(e: CustomEvent): void;
    emitChangeDate(e: CustomEvent): void;
    protected renderLabel(): TemplateResult;
    protected renderHelper(): TemplateResult;
    private setInputBoolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'zwc-datepicker': ZwcDatepicker;
    }
}
