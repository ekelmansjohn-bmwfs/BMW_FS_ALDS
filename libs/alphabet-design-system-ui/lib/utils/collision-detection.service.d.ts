import * as i0 from "@angular/core";
export declare class CollisionDetectionService {
    readonly windowRef: Window;
    private dimensions;
    constructor(windowRef: Window);
    detect(parent: HTMLElement, child: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CollisionDetectionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CollisionDetectionService>;
}
