import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ADSTabComponent {
    css: string;
    id: string;
    label: string;
    routing: string;
    selected: boolean;
    readonly clickEmitter: EventEmitter<any>;
    templateRef: TemplateRef<unknown>;
    tabClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSTabComponent, "ads-tab", never, { "css": "css"; "id": "id"; "label": "label"; "routing": "routing"; "selected": "selected"; }, { "clickEmitter": "clickEmitter"; }, never, never, false, never>;
}
