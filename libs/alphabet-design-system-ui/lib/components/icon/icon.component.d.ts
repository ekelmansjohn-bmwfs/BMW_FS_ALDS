import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { IconsRegistryService } from '../../assets/icons/icons-registry.service';
import { IADSDecoratorsColorsBasic, IADSDecoratorsColorsFunctional, IADSDecoratorsColorsMain } from '../../types';
import { IADSDecoratorsSizesIcon } from '../../types/interfaces/decorators.sizes.icon.interface';
import * as i0 from "@angular/core";
export declare class ADSIconComponent implements OnChanges {
    private readonly element;
    private readonly iconsRegistry;
    color: IADSDecoratorsColorsMain | IADSDecoratorsColorsFunctional | IADSDecoratorsColorsBasic;
    css: string;
    label: string;
    size: IADSDecoratorsSizesIcon;
    type: string;
    constructor(element: ElementRef, iconsRegistry: IconsRegistryService);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSIconComponent, "ads-icon", never, { "color": "color"; "css": "css"; "label": "label"; "size": "size"; "type": "type"; }, {}, never, never, false, never>;
}
