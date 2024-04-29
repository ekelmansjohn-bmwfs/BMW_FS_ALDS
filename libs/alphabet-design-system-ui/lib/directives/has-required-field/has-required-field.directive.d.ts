import { ElementRef, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ADSHasRequiredFieldDirective implements OnInit {
    private readonly el;
    constructor(el: ElementRef);
    adsHasRequiredField: AbstractControl;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSHasRequiredFieldDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ADSHasRequiredFieldDirective, "[adsHasRequiredField]", never, { "adsHasRequiredField": "adsHasRequiredField"; }, {}, never, never, false, never>;
}
