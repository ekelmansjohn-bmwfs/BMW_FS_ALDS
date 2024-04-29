import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { EditorConfig } from '@ckeditor/ckeditor5-core';
import * as i0 from "@angular/core";
export declare class ADSFormHtmlComponent implements OnChanges, ControlValueAccessor {
    private readonly cdr;
    constructor(cdr: ChangeDetectorRef);
    value: string;
    content: string;
    placeholder: string;
    disabled: boolean;
    touched: boolean;
    Editor: typeof DecoupledEditor;
    config: EditorConfig;
    ngOnChanges(changes: SimpleChanges): void;
    onReady(editor: DecoupledEditor): void;
    onChange(value: string): void;
    onTouched(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    markAsTouched(): void;
    setDisabledState(disabled: boolean): void;
    writeValue(value: string): void;
    onEditorChange({ editor }: ChangeEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSFormHtmlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSFormHtmlComponent, "ads-form-html", never, { "content": "content"; "placeholder": "placeholder"; }, {}, never, never, false, never>;
}
