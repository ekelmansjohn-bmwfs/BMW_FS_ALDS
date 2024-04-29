import { AfterViewInit, ElementRef } from '@angular/core';
import { IADSDecoratorsColorsBasic, IADSDecoratorsColorsFunctional, IADSDecoratorsColorsMain, IADSDecoratorsSizesIcon } from '../../types';
import { CollisionDetectionService } from '../../utils';
import * as i0 from "@angular/core";
export declare class ADSTooltipComponent implements AfterViewInit {
    private readonly windowRef;
    private readonly collisionDetection;
    tooltip: ElementRef;
    css: string;
    color: IADSDecoratorsColorsMain | IADSDecoratorsColorsFunctional | IADSDecoratorsColorsBasic;
    icon: string;
    label: string;
    size: IADSDecoratorsSizesIcon;
    readonly id: string;
    private buttonElement;
    private tipElement;
    private wrapperElement;
    constructor(windowRef: Window, collisionDetection: CollisionDetectionService);
    private show;
    private hide;
    tooltipMouseOver(): void;
    tooltipMouseOut(): void;
    tooltipFocus(): void;
    tooltipBlur(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSTooltipComponent, "ads-tooltip", never, { "css": "css"; "color": "color"; "icon": "icon"; "label": "label"; "size": "size"; }, {}, never, never, false, never>;
}
