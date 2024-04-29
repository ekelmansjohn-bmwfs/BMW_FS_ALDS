import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, UntypedFormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ADSFormFieldValidationComponent implements AfterViewInit {
    private readonly cdr;
    control: UntypedFormControl | AbstractControl;
    error: string;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSFormFieldValidationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSFormFieldValidationComponent, "ads-form-field-validation", never, { "control": "control"; }, {}, never, never, false, never>;
}
