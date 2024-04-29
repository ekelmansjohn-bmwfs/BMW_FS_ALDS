import { ChangeDetectorRef, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ADSStepComponent implements OnChanges {
    private readonly cdr;
    css: string;
    label: string;
    number: string;
    disabled: boolean;
    finished: boolean;
    errors: boolean;
    hidden: boolean;
    selected: boolean;
    readonly template: TemplateRef<unknown>;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSStepComponent, "ads-step", never, { "css": "css"; "label": "label"; "number": "number"; "disabled": "disabled"; "finished": "finished"; "errors": "errors"; "hidden": "hidden"; "selected": "selected"; }, {}, never, never, false, never>;
}
