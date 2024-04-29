import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ADSPopUpComponent implements OnChanges, AfterViewInit {
    private readonly cdr;
    private readonly document;
    readonly closeEmitter: EventEmitter<boolean>;
    popup: ElementRef;
    labelClose: string;
    openerId: string;
    title: string;
    visible: boolean;
    css: 'is-visible' | 'is-hidden';
    readonly id: string;
    constructor(cdr: ChangeDetectorRef, document: Document);
    openPopUp(): void;
    closePopUp(): void;
    focusOnCloser(): void;
    focusOnOpener(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSPopUpComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSPopUpComponent, "ads-popup", never, { "labelClose": "labelClose"; "openerId": "openerId"; "title": "title"; "visible": "visible"; }, { "closeEmitter": "closeEmitter"; }, never, ["*"], false, never>;
}
