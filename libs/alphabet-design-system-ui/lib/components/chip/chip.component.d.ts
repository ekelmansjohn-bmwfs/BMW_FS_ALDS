import { EventEmitter } from '@angular/core';
import { IADSDecoratorsColorsMain, IADSDecoratorsSizesChip, IADSDecoratorsTypesChip } from '../../types';
import * as i0 from "@angular/core";
export declare class ADSChipComponent {
    avatar: string;
    color: IADSDecoratorsColorsMain;
    css: string;
    disabled: boolean;
    flag: string;
    id: string;
    icon: string;
    label: string;
    selected: boolean;
    size: IADSDecoratorsSizesChip;
    sublabel: string;
    type: IADSDecoratorsTypesChip;
    readonly clickEmitter: EventEmitter<Event>;
    displayIcon(): boolean;
    displayAvatar(): boolean;
    displayFlag(): boolean;
    isDisabled(): boolean | null;
    click(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSChipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSChipComponent, "ads-chip", never, { "avatar": "avatar"; "color": "color"; "css": "css"; "disabled": "disabled"; "flag": "flag"; "id": "id"; "icon": "icon"; "label": "label"; "selected": "selected"; "size": "size"; "sublabel": "sublabel"; "type": "type"; }, { "clickEmitter": "clickEmitter"; }, never, never, false, never>;
}
