import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ADSHorizontalScrollerComponent implements AfterViewInit {
    private readonly windowRef;
    private readonly cdr;
    scrollable: ElementRef;
    css: string;
    labelScrollButtonLeft: string;
    labelScrollButtonRight: string;
    readonly id: string;
    scrollParent: HTMLElement;
    scrollObject: Record<string, number | boolean>;
    constructor(windowRef: Window, cdr: ChangeDetectorRef);
    initScrollable(): void;
    updateScrollable(): void;
    scroll(direction: string): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSHorizontalScrollerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSHorizontalScrollerComponent, "ads-horizontal-scroller", never, { "css": "css"; "labelScrollButtonLeft": "labelScrollButtonLeft"; "labelScrollButtonRight": "labelScrollButtonRight"; }, {}, never, ["*"], false, never>;
}
