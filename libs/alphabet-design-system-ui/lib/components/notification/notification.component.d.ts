import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { IADSDecoratorsColorsFunctional, IADSDecoratorsTypesNotifications } from '../../types';
import * as i0 from "@angular/core";
export declare class ADSNotificationComponent implements AfterViewInit {
    private readonly cdr;
    css: string;
    description: string;
    label: string;
    status: IADSDecoratorsColorsFunctional;
    type: IADSDecoratorsTypesNotifications;
    automaticClose: boolean;
    visible: boolean;
    destroyed: boolean;
    constructor(cdr: ChangeDetectorRef);
    hide(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSNotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSNotificationComponent, "ads-notification", never, { "css": "css"; "description": "description"; "label": "label"; "status": "status"; "type": "type"; "automaticClose": "automaticClose"; }, {}, never, ["*"], false, never>;
}
