import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ADSSideBarComponent implements OnChanges, AfterViewInit {
    private readonly cdr;
    private readonly document;
    readonly closeEmitter: EventEmitter<boolean>;
    sidebar: ElementRef;
    labelClose: string;
    openerId: string;
    title: string;
    visible: boolean;
    hideBodyScrollBar: boolean;
    hidden: boolean;
    css: 'is-visible' | 'is-hidden';
    overflowY: string;
    readonly id: string;
    constructor(cdr: ChangeDetectorRef, document: Document);
    openSideBar(): void;
    closeSideBar(): void;
    focusOnCloser(): void;
    focusOnOpener(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSSideBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSSideBarComponent, "ads-side-bar", never, { "labelClose": "labelClose"; "openerId": "openerId"; "title": "title"; "visible": "visible"; "hideBodyScrollBar": "hideBodyScrollBar"; }, { "closeEmitter": "closeEmitter"; }, never, ["*"], false, never>;
}
