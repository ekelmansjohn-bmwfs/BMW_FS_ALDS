import { AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ADSMarkdownComponent implements AfterViewInit, OnChanges {
    private readonly element;
    code: string;
    css: string;
    language: string;
    constructor(element: ElementRef);
    createMarkdown(): void;
    copyCode(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSMarkdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSMarkdownComponent, "ads-markdown", never, { "code": "code"; "css": "css"; "language": "language"; }, {}, never, ["*"], false, never>;
}
