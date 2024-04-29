import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ADSFormRadioComponent implements ControlValueAccessor {
    css: string;
    checked: boolean;
    disabled: boolean;
    icon: string;
    id: string;
    fullWidth: boolean;
    label: string;
    labelPosition: 'left' | 'right';
    name: string;
    value: string | boolean;
    private model;
    onChange(value: any): void;
    onTouched(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    select(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSFormRadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSFormRadioComponent, "ads-form-radio", never, { "css": "css"; "checked": "checked"; "disabled": "disabled"; "icon": "icon"; "id": "id"; "fullWidth": "fullWidth"; "label": "label"; "labelPosition": "labelPosition"; "name": "name"; "value": "value"; }, {}, never, never, false, never>;
}
