import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class IconsRegistryService {
    constructor() {
        this.registry = new Map();
    }
    registerIcons(icons) {
        icons.forEach(icon => this.registry.set(icon.name, icon.data));
    }
    getIcon(name) {
        return this.registry.get(name);
    }
    getIcons() {
        return this.registry;
    }
}
IconsRegistryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: IconsRegistryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
IconsRegistryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: IconsRegistryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: IconsRegistryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMtcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYWxwaGFiZXQtZGVzaWduLXN5c3RlbS11aS9zcmMvbGliL2Fzc2V0cy9pY29ucy9pY29ucy1yZWdpc3RyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxvQkFBb0I7SUFIakM7UUFJcUIsYUFBUSxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO0tBYTlEO0lBWEcsYUFBYSxDQUFDLEtBQWtCO1FBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7O2lIQWJRLG9CQUFvQjtxSEFBcEIsb0JBQW9CLGNBRmpCLE1BQU07MkZBRVQsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4vaWNvbnMubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvbnNSZWdpc3RyeVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZWdpc3RyeTogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICByZWdpc3Rlckljb25zKGljb25zOiBBcnJheTxJY29uPik6IHZvaWQge1xyXG4gICAgICAgIGljb25zLmZvckVhY2goaWNvbiA9PiB0aGlzLnJlZ2lzdHJ5LnNldChpY29uLm5hbWUsIGljb24uZGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEljb24obmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5nZXQobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWNvbnMoKTogTWFwPHN0cmluZywgc3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnk7XHJcbiAgICB9XHJcbn1cclxuIl19