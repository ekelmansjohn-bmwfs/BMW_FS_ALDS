import { Injectable } from '@angular/core';
import { Icon } from './icons.model';

@Injectable({
    providedIn: 'root',
})
export class IconsRegistryService {
    private readonly registry: Map<string, string> = new Map();

    registerIcons(icons: Array<Icon>): void {
        icons.forEach(icon => this.registry.set(icon.name, icon.data));
    }

    getIcon(name: string): string | undefined {
        return this.registry.get(name);
    }

    getIcons(): Map<string, string> {
        return this.registry;
    }
}
