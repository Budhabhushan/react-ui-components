import { default as React } from '../../../node_modules/react';

export type DatePickerProps = {
    placeholder?: string;
    value?: string;
    onChange?: (date: string) => void;
    minDate?: string;
    maxDate?: string;
};
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
