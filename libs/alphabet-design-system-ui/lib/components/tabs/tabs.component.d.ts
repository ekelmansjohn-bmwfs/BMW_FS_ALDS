import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { ADSTabPanelComponent } from '../tab-panel/tab-panel.component';
import { ADSTabComponent } from '../tab/tab.component';
import * as i0 from "@angular/core";
export interface TabSelectedEvent {
    index: number;
    routing: string;
}
export declare class ADSTabsComponent implements AfterViewInit, OnChanges {
    private readonly cdr;
    tablist: ElementRef;
    tabs: QueryList<ADSTabComponent>;
    panels: QueryList<ADSTabPanelComponent>;
    css: string;
    routingTab: string;
    readonly tabSelected: EventEmitter<TabSelectedEvent>;
    private readonly id;
    private tabButtonItems;
    private tabPanelItems;
    private selected;
    private focused;
    constructor(cdr: ChangeDetectorRef);
    private focus;
    private select;
    private deselect;
    private togglePanel;
    trackByIndex(index: number): number;
    ngAfterViewInit(): void;
    private initTabs;
    ngOnChanges(changes: SimpleChanges): void;
    private updateRoutingTab;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSTabsComponent, "ads-tabs", never, { "css": "css"; "routingTab": "routingTab"; }, { "tabSelected": "tabSelected"; }, ["tabs", "panels"], never, false, never>;
}
