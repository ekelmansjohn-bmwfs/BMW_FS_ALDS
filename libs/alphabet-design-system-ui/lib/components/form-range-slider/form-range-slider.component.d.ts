import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ADSFormRangeSliderComponent implements AfterViewInit {
    private readonly cdr;
    rangeSlider: ElementRef;
    css: string;
    min: number;
    max: number;
    reverse: boolean;
    step: number;
    private wrapperElement;
    readonly id: string;
    className: string;
    left: number;
    position: number;
    width: number;
    value: number;
    constructor(cdr: ChangeDetectorRef);
    setSliderPosition(): void;
    ngAfterViewInit(): void;
    onChange(value: any): void;
    onTouched(): void;
    writeValue(value: number | null): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSFormRangeSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSFormRangeSliderComponent, "ads-form-range-slider", never, { "css": "css"; "min": "min"; "max": "max"; "reverse": "reverse"; "step": "step"; }, {}, never, never, false, never>;
}
