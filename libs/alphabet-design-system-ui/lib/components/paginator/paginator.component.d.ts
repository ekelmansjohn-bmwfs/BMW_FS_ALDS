import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export interface PaginationEvent {
    pageIndex: number;
    pageSize: number;
}
export declare class ADSPaginatorComponent implements OnChanges {
    private readonly cdr;
    private readonly scroll;
    pageIndex: number;
    pageSize: number;
    length: number;
    pageSizeOptions: number[];
    showPageSelection: boolean;
    showPageSizeSelection: boolean;
    position: 'left' | 'center' | 'right';
    readonly pageChanged: EventEmitter<PaginationEvent>;
    totalPages: number;
    pages: Array<number>;
    constructor(cdr: ChangeDetectorRef, scroll: ViewportScroller);
    changePage(page: number): void;
    selectPage(page: string): void;
    nextPage(): void;
    previousPage(): void;
    selectPageSize(pageSize: string): void;
    ngOnChanges(changes: SimpleChanges): void;
    private calculatePages;
    trackByIndex(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSPaginatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSPaginatorComponent, "ads-paginator", never, { "pageIndex": "pageIndex"; "pageSize": "pageSize"; "length": "length"; "pageSizeOptions": "pageSizeOptions"; "showPageSelection": "showPageSelection"; "showPageSizeSelection": "showPageSizeSelection"; "position": "position"; }, { "pageChanged": "pageChanged"; }, never, never, false, never>;
}
