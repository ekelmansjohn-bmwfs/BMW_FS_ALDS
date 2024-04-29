import { AfterContentChecked, ChangeDetectorRef, ElementRef, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { ADSAccordionComponent } from '../../components/accordion/accordion.component';
import * as i0 from "@angular/core";
export declare class ADSBlockAccordionsComponent implements OnChanges, AfterContentChecked {
    private readonly cdr;
    css: string;
    closeOthers: boolean;
    accordions: ElementRef;
    accordionElements: QueryList<ADSAccordionComponent> | undefined;
    private contentChildrenIds;
    constructor(cdr: ChangeDetectorRef);
    openCloseAccordionItems(id: string): void;
    updateAccordionElements(): void;
    ngAfterContentChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSBlockAccordionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSBlockAccordionsComponent, "ads-block-accordions", never, { "css": "css"; "closeOthers": "closeOthers"; }, {}, ["accordionElements"], ["*"], false, never>;
}
