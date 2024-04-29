import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ADSEditInPlaceComponent {
    value?: string;
    placeholder?: string;
    readonly valueChange: EventEmitter<string>;
    isEditing: boolean;
    inputRef?: ElementRef<HTMLInputElement>;
    private copiedValue?;
    startEditing(): void;
    cancel(): void;
    finishEditing(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSEditInPlaceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSEditInPlaceComponent, "ads-edit-in-place", never, { "value": "value"; "placeholder": "placeholder"; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
