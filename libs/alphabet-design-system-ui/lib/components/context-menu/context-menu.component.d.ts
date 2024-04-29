import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { CollisionDetectionService } from '../../utils';
import * as i0 from "@angular/core";
export declare class ADSContextMenuComponent implements AfterViewInit {
    private readonly windowRef;
    private readonly document;
    private readonly cdr;
    private readonly collisionDetection;
    contextMenu: ElementRef;
    css: string;
    size: 'small' | 'regular';
    readonly id: string;
    private buttonElement;
    private menuElement;
    private menuElementItems;
    private selectedMenuItem;
    visible: boolean;
    constructor(windowRef: Window, document: Document, cdr: ChangeDetectorRef, collisionDetection: CollisionDetectionService);
    private toggle;
    private first;
    private last;
    private next;
    private previous;
    private selectMenuItem;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSContextMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSContextMenuComponent, "ads-context-menu", never, { "css": "css"; "size": "size"; }, {}, never, ["*"], false, never>;
}
