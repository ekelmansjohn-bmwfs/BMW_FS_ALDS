import { Icon } from './icons.model';
import * as i0 from "@angular/core";
export declare class IconsRegistryService {
    private readonly registry;
    registerIcons(icons: Array<Icon>): void;
    getIcon(name: string): string | undefined;
    getIcons(): Map<string, string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconsRegistryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IconsRegistryService>;
}
