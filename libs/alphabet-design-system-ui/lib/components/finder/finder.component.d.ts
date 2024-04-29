import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IFinderNode } from '../../types/interfaces/finder.interface';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class ADSFinderComponent implements OnChanges, AfterViewInit, OnInit {
    private readonly windowRef;
    private readonly cdr;
    css: string;
    description: string;
    deselect: string | undefined;
    select: string | undefined;
    list: Array<IFinderNode>;
    isMultiple: boolean;
    readonly finderChangeEmitter: EventEmitter<IFinderNode>;
    readonly reOrderEmitter: EventEmitter<CdkDragDrop<Array<IFinderNode>>>;
    search: string;
    nodePath: Array<{
        id: string;
        name: string;
    }>;
    searchresults: Array<string>;
    constructor(windowRef: Window, cdr: ChangeDetectorRef);
    private selectFirstNodeWhenNeeded;
    private clearSearchData;
    ngOnInit(): void;
    levelUp(): void;
    searchNodes(value: string): void;
    searchNodeById(id: string): void;
    selectNode(node: IFinderNode): void;
    toggleOption(node: IFinderNode): void;
    nodeInPath(id: string): boolean;
    scrollIntoViewHorizontal(id: string): void;
    trackByIndex(index: number): number;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    getVisibleChildCount(node: IFinderNode): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSFinderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSFinderComponent, "ads-finder", never, { "css": "css"; "description": "description"; "deselect": "deselect"; "select": "select"; "list": "list"; "isMultiple": "isMultiple"; }, { "finderChangeEmitter": "finderChangeEmitter"; "reOrderEmitter": "reOrderEmitter"; }, never, never, false, never>;
}
