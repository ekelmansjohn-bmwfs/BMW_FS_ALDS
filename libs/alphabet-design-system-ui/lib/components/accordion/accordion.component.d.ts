import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { ADSChevronPosition } from '../../types/enums/chevron-position.enum';
import * as i0 from "@angular/core";
export declare class ADSAccordionComponent implements OnChanges, AfterViewInit {
    private readonly windowRef;
    private readonly cdr;
    readonly accordionChange: EventEmitter<string>;
    region: ElementRef;
    content: ElementRef;
    templateRef: TemplateRef<unknown>;
    css: string;
    header: string;
    expanded: boolean;
    chevronPosition: ADSChevronPosition;
    readonly id: string;
    readonly ADSChevronPosition: typeof ADSChevronPosition;
    regionElement: HTMLDivElement;
    contentElement: HTMLDivElement;
    constructor(windowRef: Window, cdr: ChangeDetectorRef);
    toggle(): void;
    close(): void;
    private setHeight;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSAccordionComponent, "ads-accordion", never, { "css": "css"; "header": "header"; "expanded": "expanded"; "chevronPosition": "chevronPosition"; }, { "accordionChange": "accordionChange"; }, never, ["*"], false, never>;
}
