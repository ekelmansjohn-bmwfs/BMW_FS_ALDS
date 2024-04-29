import { ChangeDetectorRef, EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ADSStepPanelComponent implements OnChanges {
    private readonly cdr;
    selected: boolean;
    finished: boolean;
    displayButtons: boolean;
    previousLabel: string;
    nextLabel: string;
    readonly stepChangeEmitter: EventEmitter<string>;
    readonly template: TemplateRef<unknown>;
    constructor(cdr: ChangeDetectorRef);
    next(): void;
    previous(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSStepPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSStepPanelComponent, "ads-step-panel", never, { "selected": "selected"; "finished": "finished"; "displayButtons": "displayButtons"; "previousLabel": "previousLabel"; "nextLabel": "nextLabel"; }, { "stepChangeEmitter": "stepChangeEmitter"; }, never, ["*", "[buttons]"], false, never>;
}
