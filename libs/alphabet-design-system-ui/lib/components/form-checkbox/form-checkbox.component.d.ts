import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ADSFormCheckboxComponent implements ControlValueAccessor {
    css: string;
    checked: boolean;
    disabled: boolean;
    id: string;
    icon: string;
    fullWidth: boolean;
    hideLabel: boolean;
    label: string;
    labelPosition: 'left' | 'right';
    labelColor: 'primary' | 'accent' | 'default';
    size: 'small' | 'regular';
    type: 'checkbox' | 'switch';
    value: string;
    private model;
    onChange(value: any): void;
    onTouched(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    onModelChange(event: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSFormCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSFormCheckboxComponent, "ads-form-checkbox", never, { "css": "css"; "checked": "checked"; "disabled": "disabled"; "id": "id"; "icon": "icon"; "fullWidth": "fullWidth"; "hideLabel": "hideLabel"; "label": "label"; "labelPosition": "labelPosition"; "labelColor": "labelColor"; "size": "size"; "type": "type"; "value": "value"; }, {}, never, never, false, never>;
}
