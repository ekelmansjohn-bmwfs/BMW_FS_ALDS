import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ADSConfirmationBoxComponent implements OnDestroy {
    private readonly document;
    private readonly cdr;
    readonly confirmationBox: ElementRef;
    type: 'confirm' | 'alert' | 'no-actions';
    readonly confirmed: EventEmitter<boolean>;
    title: string;
    message: string;
    visible: boolean;
    sourceElement?: HTMLElement;
    events: Array<Subscription>;
    constructor(document: Document, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    confirmKeydown(event: KeyboardEvent): void;
    ok(): void;
    cancel(): void;
    show(title: string, message?: string, sourceElement?: HTMLElement | undefined): void;
    hide(): void;
    private bindConfirmationEvents;
    private unsubscribeAll;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSConfirmationBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSConfirmationBoxComponent, "ads-confirmation-box", never, { "type": "type"; }, { "confirmed": "confirmed"; }, never, ["*"], false, never>;
}
