import { ChangeDetectorRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IADSLanguage } from '../../types';
import * as i0 from "@angular/core";
export declare class ADSLanguageSelectorComponent implements OnChanges {
    private readonly cdr;
    currentLanguage: string;
    availableLanguages: ReadonlyArray<IADSLanguage>;
    css: string;
    readonly languageChangeEmitter: EventEmitter<string>;
    currentLanguageObject: IADSLanguage | undefined;
    constructor(cdr: ChangeDetectorRef);
    switchLanguage(language: string): void;
    trackByCode(index: number, el: IADSLanguage): string;
    ngOnChanges(changes: SimpleChanges): void;
    private updateCurrentLanguageObject;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSLanguageSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSLanguageSelectorComponent, "ads-language-selector", never, { "currentLanguage": "currentLanguage"; "availableLanguages": "availableLanguages"; "css": "css"; }, { "languageChangeEmitter": "languageChangeEmitter"; }, never, never, false, never>;
}
