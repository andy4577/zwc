export interface DatepickerOptionsFormat {
    toValue: (date: Date, format: object, locale: object) => string;
    toDisplay: (date: Date, format: object, locale: object) => string;
}
export type DatepickerOptionsOrientationVertical = 'top' | 'middle' | 'bottom' | 'auto';
export type DatepickerOptionsOrientationHorizontal = 'left' | 'center' | 'right' | 'auto';
export type DatepickerOptionsOrientation = `${DatepickerOptionsOrientationVertical} ${DatepickerOptionsOrientationHorizontal}` | 'auto';
export interface DatepickerOptions {
    autohide?: boolean;
    beforeShowDay?: (date: Date) => object | string | boolean;
    beforeShowDecade?: (date: Date) => object | string | boolean;
    beforeShowMonth?: (date: Date) => object | string | boolean;
    beforeShowYear?: (date: Date) => object | string | boolean;
    buttonClass?: string;
    calendarWeeks?: boolean;
    clearBtn?: boolean;
    container?: string | HTMLElement;
    dateDelimiter?: string;
    datesDisabled?: string[];
    daysOfWeekDisabled?: number[];
    daysOfWeekHighlighted?: number[];
    defaultViewDate?: string | Date | number;
    format?: string | DatepickerOptionsFormat;
    language?: string;
    maxDate?: string | Date | number;
    maxNumberOfDates?: number;
    maxView?: number;
    minDate?: string | Date | number;
    nextArrow?: string;
    prevArrow?: string;
    orientation?: DatepickerOptionsOrientation;
    pickLevel?: number;
    prevArray?: string;
    showDaysOfWeek?: boolean;
    showOnClick?: boolean;
    showOnFocus?: boolean;
    startView?: number;
    title?: string;
    todayBtn?: boolean;
    todayBtnMode?: number;
    todayHighlight?: boolean;
    updateOnBlur?: boolean;
    weekStart?: number;
}
