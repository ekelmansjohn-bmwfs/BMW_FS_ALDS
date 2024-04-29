import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export type CarouselDataItem = {
    src: string;
    alt: string;
};
type AnimationDirection = 'left' | 'right';
export declare class ADSCarouselComponent implements OnInit {
    private readonly cdr;
    private readonly elRef;
    items: Array<CarouselDataItem>;
    interval: number;
    showControls: boolean;
    showIndicators: boolean;
    animationDuration: number;
    readonly itemClick: EventEmitter<CarouselDataItem>;
    activeIndex: number;
    previousActiveIndex?: number;
    direction: AnimationDirection;
    private isAnimating;
    constructor(cdr: ChangeDetectorRef, elRef: ElementRef);
    ngOnInit(): void;
    goNext(): void;
    goPrev(): void;
    setActiveIndex(index: number): void;
    getAnimationClass(index: number): string;
    trackByIndex(index: number): number;
    private updateIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<ADSCarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ADSCarouselComponent, "ads-carousel", never, { "items": "items"; "interval": "interval"; "showControls": "showControls"; "showIndicators": "showIndicators"; "animationDuration": "animationDuration"; }, { "itemClick": "itemClick"; }, never, never, false, never>;
}
export {};
