import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import * as i0 from "@angular/core";
let ADSBlockFooterComponent = class ADSBlockFooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
};
ADSBlockFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSBlockFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ADSBlockFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.6", type: ADSBlockFooterComponent, selector: "ads-block-footer", ngImport: i0, template: "<footer>\r\n    <p>\r\n        <ng-content></ng-content>\r\n        <span class=\"footer_copyright text-size-small\"\r\n            >&copy; {{ year }}\r\n            <span i18n=\"@@ADSBlockFooterCopyright\">Alphabet International GmbH</span></span\r\n        >\r\n    </p>\r\n</footer>\r\n", styles: [":root{--ads-color-white: #fff;--ads-color-white_foreground: #000;--ads-color-gray-6: #f0f0f0;--ads-color-gray-6_foreground: #000;--ads-color-gray-12: #e0e0e0;--ads-color-gray-12_foreground: #000;--ads-color-gray-20: #cccccc;--ads-color-gray-20_foreground: #000;--ads-color-gray-50: gray;--ads-color-gray-50_foreground: #fff;--ads-color-gray-70: #4d4d4d;--ads-color-gray-70_foreground: #fff;--ads-color-gray-85: #262626;--ads-color-gray-85_foreground: #fff;--ads-color-black: #000;--ads-color-black_foreground: #fff;--ads-color-error: #d21e36;--ads-color-error_hover: #a5182b;--ads-color-error-background: #fceaea;--ads-color-info: #1e236e;--ads-color-info-background: var(--ads-color-gray-6);--ads-color-success: #01964c;--ads-color-success_hover: #016332;--ads-color-success-background: #eaf6eb;--ads-color-warning: #ef7d00;--ads-color-warning-background: #fff7ef;--ads-color-notification: #ffd900;--ads-color-notification-background: #fffdf0;--ads-color-primary: #1e236e;--ads-color-primary-40: #a5a7c5;--ads-color-primary-65: #6e71a2;--ads-color-primary-foreground: #fff;--ads-color-primary_active: #0a0c26;--ads-color-primary_active-foreground: #fff;--ads-color-primary_focus: #0f1136;--ads-color-primary_focus-foreground: #fff;--ads-color-primary_hover: #131646;--ads-color-primary_hover-foreground: #fff;--ads-color-secondary: #00d7e7;--ads-color-secondary-40: #9aeff5;--ads-color-secondary-65: #5ae5ef;--ads-color-secondary-foreground: #fff;--ads-color-secondary_active: #00828b;--ads-color-secondary_active-foreground: #fff;--ads-color-secondary_focus: #0095a0;--ads-color-secondary_focus-foreground: #fff;--ads-color-secondary_hover: #00a8b4;--ads-color-secondary_hover-foreground: #fff;--ads-color-accent: #ff6d6a;--ads-color-accent-40: #ffc5c3;--ads-color-accent-65: #ffa19f;--ads-color-accent-foreground: #fff;--ads-color-accent_active: #ff5451;--ads-color-accent_active-foreground: #fff;--ads-color-accent_hover: #ff3b37;--ads-color-accent_hover-foreground: #fff;--ads-color-accent_focus: #ff221e;--ads-color-accent_focus-foreground: #fff;--ads-color-disabled: #e0e0e0;--ads-color-disabled-foreground: gray;--ads-color-app: #fff;--ads-color-app-text: #262626;--ads-color-app-navigation: #1e236e;--ads-color-app-navigation-divider: #6e71a2;--ads-color-app-navigation-menu-item-foreground: #fff;--ads-color-app-navigation-menu-item-background: #1e236e;--ads-color-app-navigation-menu-item-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-background_hover: #1e236e;--ads-color-app-navigation-menu-item-foreground_focus: #fff;--ads-color-app-navigation-menu-item-background_focus: #fff;--ads-color-app-navigation-menu-item-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-background_selected: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground: #fff;--ads-color-app-navigation-menu-item-icon-background: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_hover: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-menu-item-icon-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_selected: #1e236e;--ads-color-app-navigation-toolbar: #fff;--ads-color-app-navigation-toolbar-divider: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_selected: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_selected: #f0f0f0;--ads-color-solid-gradient-primary-to-accent: linear-gradient(90deg, #1e236e 0%, #ff6d6a 100%);--ads-color-solid-gradient-secondary-to-accent: linear-gradient(-170deg, rgba(0, 215, 231, 0) 60%, #00d7e7 125%), linear-gradient(170deg, #ff6d6a 60%, #ff6d6a 125%);--ads-color-solid-gradient-accent-to-secondary-to-primary: linear-gradient(90deg, #ff6d6a 0%, #00d7e7 50%, #1e236e 100%);--ads-color-solid-gradient-gray-to-primary: linear-gradient(90deg, #e0e0e0 0%, #a5a7c5 100%);--ads-color-image-gradient-primary-to-accent: linear-gradient(90deg, rgba(30, 35, 110, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-primary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(30, 35, 110, .7) 100%);--ads-color-image-gradient-secondary-to-accent: linear-gradient(90deg, rgba(0, 215, 231, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-secondary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(0, 215, 231, .7) 100%);--ads-color-image-gradient-mask: linear-gradient(to bottom, rgba(0,0,0,0) 48%, rgba(0,0,0,.5) 80%, rgba(0,0,0,1) 100%);--ads-color-image-gradient-darken-bottom: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .1) 40%, rgba(0, 0, 0, .4) 100%);--ads-color-app-gradient-secondary-to-accent: linear-gradient(160deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .4) 90%), linear-gradient(220deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 60%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-large: linear-gradient(170deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .5) 90%), linear-gradient(210deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 70%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-foreground: #fff;--ads-color-app-gradient-primary-to-accent: linear-gradient(200deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .7) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 60%, rgba(30, 35, 110, .4) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-large: linear-gradient(190deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .6) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 70%, rgba(30, 35, 110, .5) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-foreground: #1e236e;--ads-color-app-gradient-primary-inverted: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 60%, rgba(255, 109, 106, .4) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 65%, rgba(0, 215, 231, .45) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-large: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 75%, rgba(255, 109, 106, .05) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 75%, rgba(0, 215, 231, .02) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-foreground: #1e236e;--ads-ring_active: 0 0 0 2px #fff, 0 0 0 5px #1e236e;--ads-ring_focus: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_hover: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_transparent: 0 0 0 2px transparent, 0 0 0 3px transparent;--ads-ring_focus-inset: inset 0 0 0 2px #fff, inset 0 0 0 3px #1e236e;--ads-ring_focus-inset-inverted: inset 0 0 0 2px #1e236e, inset 0 0 0 4px #fff;--ads-ring-focus-with-contextmenu: 0 0 0 1px #fff, 0 0 0 2px #555cd1, 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-0: 0 0 0 0 rgba(0, 0, 0, 0);--ads-shadow-depth-1: 0 .4px .4px rgba(0, 0, 0, .05), 0 1px 1px rgba(0, 0, 0, .036), 0 1.9px 1.9px rgba(0, 0, 0, .03), 0 3.4px 3.4px rgba(0, 0, 0, .025), 0 6.3px 6.3px rgba(0, 0, 0, .02), 0 15px 15px rgba(0, 0, 0, .014);--ads-shadow-depth-2: 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-3: 0 .7px .7px rgba(0, 0, 0, .017), 0 1.7px 1.7px rgba(0, 0, 0, .024), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .036), 0 10.4px 10.4px rgba(0, 0, 0, .043), 0 25px 25px rgba(0, 0, 0, .06);--ads-shadow-depth-4: 0 1px 1px rgba(0, 0, 0, .014), 0 2.3px 2.3px rgba(0, 0, 0, .02), 0 4.4px 4.4px rgba(0, 0, 0, .025), 0 7.8px 7.8px rgba(0, 0, 0, .03), 0 14.6px 14.6px rgba(0, 0, 0, .036), 0 35px 35px rgba(0, 0, 0, .05);--ads-shadow-depth-5: 0 1.2px 1.2px rgba(0, 0, 0, .014), 0 3px 3px rgba(0, 0, 0, .02), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.1px 10.1px rgba(0, 0, 0, .03), 0 18.8px 18.8px rgba(0, 0, 0, .036), 0 45px 45px rgba(0, 0, 0, .05);--ads-shadow-depth-6: 0 .9px .9px rgba(0, 0, 0, .011), 0 1.9px 1.9px rgba(0, 0, 0, .016), 0 3.2px 3.2px rgba(0, 0, 0, .019), 0 4.8px 4.8px rgba(0, 0, 0, .022), 0 6.9px 6.9px rgba(0, 0, 0, .025), 0 9.7px 9.7px rgba(0, 0, 0, .028), 0 13.8px 13.8px rgba(0, 0, 0, .031), 0 20.1px 20.1px rgba(0, 0, 0, .034), 0 30.9px 30.9px rgba(0, 0, 0, .039), 0 55px 55px rgba(0, 0, 0, .05)}:host{display:block;width:100%}footer{position:relative;z-index:auto;display:block;width:100%;padding:1rem;margin:0 0 4rem;text-align:right}@media (min-width: 769px){footer{padding:2rem 2rem 2rem 8rem;margin:0}}footer p{margin:0}footer .footer_copyright{display:block;color:var(--ads-color-primary);font-family:Alphabet sans pro,sans-serif;font-weight:600}@media (min-width: 769px){footer .footer_copyright{display:inline-block}}footer ::ng-deep .footer_divider{margin-right:.5rem;margin-left:.5rem;color:var(--ads-color-gray-50);font-size:.875rem}@media (min-width: 769px){footer ::ng-deep .footer_divider{margin-right:1rem;margin-left:1rem}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
ADSBlockFooterComponent = __decorate([
    UntilDestroy()
], ADSBlockFooterComponent);
export { ADSBlockFooterComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSBlockFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ads-block-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<footer>\r\n    <p>\r\n        <ng-content></ng-content>\r\n        <span class=\"footer_copyright text-size-small\"\r\n            >&copy; {{ year }}\r\n            <span i18n=\"@@ADSBlockFooterCopyright\">Alphabet International GmbH</span></span\r\n        >\r\n    </p>\r\n</footer>\r\n", styles: [":root{--ads-color-white: #fff;--ads-color-white_foreground: #000;--ads-color-gray-6: #f0f0f0;--ads-color-gray-6_foreground: #000;--ads-color-gray-12: #e0e0e0;--ads-color-gray-12_foreground: #000;--ads-color-gray-20: #cccccc;--ads-color-gray-20_foreground: #000;--ads-color-gray-50: gray;--ads-color-gray-50_foreground: #fff;--ads-color-gray-70: #4d4d4d;--ads-color-gray-70_foreground: #fff;--ads-color-gray-85: #262626;--ads-color-gray-85_foreground: #fff;--ads-color-black: #000;--ads-color-black_foreground: #fff;--ads-color-error: #d21e36;--ads-color-error_hover: #a5182b;--ads-color-error-background: #fceaea;--ads-color-info: #1e236e;--ads-color-info-background: var(--ads-color-gray-6);--ads-color-success: #01964c;--ads-color-success_hover: #016332;--ads-color-success-background: #eaf6eb;--ads-color-warning: #ef7d00;--ads-color-warning-background: #fff7ef;--ads-color-notification: #ffd900;--ads-color-notification-background: #fffdf0;--ads-color-primary: #1e236e;--ads-color-primary-40: #a5a7c5;--ads-color-primary-65: #6e71a2;--ads-color-primary-foreground: #fff;--ads-color-primary_active: #0a0c26;--ads-color-primary_active-foreground: #fff;--ads-color-primary_focus: #0f1136;--ads-color-primary_focus-foreground: #fff;--ads-color-primary_hover: #131646;--ads-color-primary_hover-foreground: #fff;--ads-color-secondary: #00d7e7;--ads-color-secondary-40: #9aeff5;--ads-color-secondary-65: #5ae5ef;--ads-color-secondary-foreground: #fff;--ads-color-secondary_active: #00828b;--ads-color-secondary_active-foreground: #fff;--ads-color-secondary_focus: #0095a0;--ads-color-secondary_focus-foreground: #fff;--ads-color-secondary_hover: #00a8b4;--ads-color-secondary_hover-foreground: #fff;--ads-color-accent: #ff6d6a;--ads-color-accent-40: #ffc5c3;--ads-color-accent-65: #ffa19f;--ads-color-accent-foreground: #fff;--ads-color-accent_active: #ff5451;--ads-color-accent_active-foreground: #fff;--ads-color-accent_hover: #ff3b37;--ads-color-accent_hover-foreground: #fff;--ads-color-accent_focus: #ff221e;--ads-color-accent_focus-foreground: #fff;--ads-color-disabled: #e0e0e0;--ads-color-disabled-foreground: gray;--ads-color-app: #fff;--ads-color-app-text: #262626;--ads-color-app-navigation: #1e236e;--ads-color-app-navigation-divider: #6e71a2;--ads-color-app-navigation-menu-item-foreground: #fff;--ads-color-app-navigation-menu-item-background: #1e236e;--ads-color-app-navigation-menu-item-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-background_hover: #1e236e;--ads-color-app-navigation-menu-item-foreground_focus: #fff;--ads-color-app-navigation-menu-item-background_focus: #fff;--ads-color-app-navigation-menu-item-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-background_selected: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground: #fff;--ads-color-app-navigation-menu-item-icon-background: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_hover: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-menu-item-icon-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_selected: #1e236e;--ads-color-app-navigation-toolbar: #fff;--ads-color-app-navigation-toolbar-divider: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_selected: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_selected: #f0f0f0;--ads-color-solid-gradient-primary-to-accent: linear-gradient(90deg, #1e236e 0%, #ff6d6a 100%);--ads-color-solid-gradient-secondary-to-accent: linear-gradient(-170deg, rgba(0, 215, 231, 0) 60%, #00d7e7 125%), linear-gradient(170deg, #ff6d6a 60%, #ff6d6a 125%);--ads-color-solid-gradient-accent-to-secondary-to-primary: linear-gradient(90deg, #ff6d6a 0%, #00d7e7 50%, #1e236e 100%);--ads-color-solid-gradient-gray-to-primary: linear-gradient(90deg, #e0e0e0 0%, #a5a7c5 100%);--ads-color-image-gradient-primary-to-accent: linear-gradient(90deg, rgba(30, 35, 110, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-primary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(30, 35, 110, .7) 100%);--ads-color-image-gradient-secondary-to-accent: linear-gradient(90deg, rgba(0, 215, 231, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-secondary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(0, 215, 231, .7) 100%);--ads-color-image-gradient-mask: linear-gradient(to bottom, rgba(0,0,0,0) 48%, rgba(0,0,0,.5) 80%, rgba(0,0,0,1) 100%);--ads-color-image-gradient-darken-bottom: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .1) 40%, rgba(0, 0, 0, .4) 100%);--ads-color-app-gradient-secondary-to-accent: linear-gradient(160deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .4) 90%), linear-gradient(220deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 60%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-large: linear-gradient(170deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .5) 90%), linear-gradient(210deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 70%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-foreground: #fff;--ads-color-app-gradient-primary-to-accent: linear-gradient(200deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .7) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 60%, rgba(30, 35, 110, .4) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-large: linear-gradient(190deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .6) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 70%, rgba(30, 35, 110, .5) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-foreground: #1e236e;--ads-color-app-gradient-primary-inverted: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 60%, rgba(255, 109, 106, .4) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 65%, rgba(0, 215, 231, .45) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-large: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 75%, rgba(255, 109, 106, .05) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 75%, rgba(0, 215, 231, .02) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-foreground: #1e236e;--ads-ring_active: 0 0 0 2px #fff, 0 0 0 5px #1e236e;--ads-ring_focus: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_hover: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_transparent: 0 0 0 2px transparent, 0 0 0 3px transparent;--ads-ring_focus-inset: inset 0 0 0 2px #fff, inset 0 0 0 3px #1e236e;--ads-ring_focus-inset-inverted: inset 0 0 0 2px #1e236e, inset 0 0 0 4px #fff;--ads-ring-focus-with-contextmenu: 0 0 0 1px #fff, 0 0 0 2px #555cd1, 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-0: 0 0 0 0 rgba(0, 0, 0, 0);--ads-shadow-depth-1: 0 .4px .4px rgba(0, 0, 0, .05), 0 1px 1px rgba(0, 0, 0, .036), 0 1.9px 1.9px rgba(0, 0, 0, .03), 0 3.4px 3.4px rgba(0, 0, 0, .025), 0 6.3px 6.3px rgba(0, 0, 0, .02), 0 15px 15px rgba(0, 0, 0, .014);--ads-shadow-depth-2: 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-3: 0 .7px .7px rgba(0, 0, 0, .017), 0 1.7px 1.7px rgba(0, 0, 0, .024), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .036), 0 10.4px 10.4px rgba(0, 0, 0, .043), 0 25px 25px rgba(0, 0, 0, .06);--ads-shadow-depth-4: 0 1px 1px rgba(0, 0, 0, .014), 0 2.3px 2.3px rgba(0, 0, 0, .02), 0 4.4px 4.4px rgba(0, 0, 0, .025), 0 7.8px 7.8px rgba(0, 0, 0, .03), 0 14.6px 14.6px rgba(0, 0, 0, .036), 0 35px 35px rgba(0, 0, 0, .05);--ads-shadow-depth-5: 0 1.2px 1.2px rgba(0, 0, 0, .014), 0 3px 3px rgba(0, 0, 0, .02), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.1px 10.1px rgba(0, 0, 0, .03), 0 18.8px 18.8px rgba(0, 0, 0, .036), 0 45px 45px rgba(0, 0, 0, .05);--ads-shadow-depth-6: 0 .9px .9px rgba(0, 0, 0, .011), 0 1.9px 1.9px rgba(0, 0, 0, .016), 0 3.2px 3.2px rgba(0, 0, 0, .019), 0 4.8px 4.8px rgba(0, 0, 0, .022), 0 6.9px 6.9px rgba(0, 0, 0, .025), 0 9.7px 9.7px rgba(0, 0, 0, .028), 0 13.8px 13.8px rgba(0, 0, 0, .031), 0 20.1px 20.1px rgba(0, 0, 0, .034), 0 30.9px 30.9px rgba(0, 0, 0, .039), 0 55px 55px rgba(0, 0, 0, .05)}:host{display:block;width:100%}footer{position:relative;z-index:auto;display:block;width:100%;padding:1rem;margin:0 0 4rem;text-align:right}@media (min-width: 769px){footer{padding:2rem 2rem 2rem 8rem;margin:0}}footer p{margin:0}footer .footer_copyright{display:block;color:var(--ads-color-primary);font-family:Alphabet sans pro,sans-serif;font-weight:600}@media (min-width: 769px){footer .footer_copyright{display:inline-block}}footer ::ng-deep .footer_divider{margin-right:.5rem;margin-left:.5rem;color:var(--ads-color-gray-50);font-size:.875rem}@media (min-width: 769px){footer ::ng-deep .footer_divider{margin-right:1rem;margin-left:1rem}}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYWxwaGFiZXQtZGVzaWduLXN5c3RlbS11aS9zcmMvbGliL2Jsb2Nrcy9ibG9jay1mb290ZXIvYmxvY2stZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYWxwaGFiZXQtZGVzaWduLXN5c3RlbS11aS9zcmMvbGliL2Jsb2Nrcy9ibG9jay1mb290ZXIvYmxvY2stZm9vdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFTOUMsSUFBTSx1QkFBdUIsR0FBN0IsTUFBTSx1QkFBdUI7SUFBN0I7UUFDSCxTQUFJLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMzQzs7b0hBRlksdUJBQXVCO3dHQUF2Qix1QkFBdUIsd0RDVnBDLG1TQVNBO0FEQ2EsdUJBQXVCO0lBUG5DLFlBQVksRUFBRTtHQU9GLHVCQUF1QixDQUVuQztTQUZZLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQU5uQyxTQUFTOytCQUNJLGtCQUFrQixtQkFHWCx1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbnRpbERlc3Ryb3kgfSBmcm9tICdAbmduZWF0L3VudGlsLWRlc3Ryb3knO1xyXG5cclxuQFVudGlsRGVzdHJveSgpXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZHMtYmxvY2stZm9vdGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ibG9jay1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYmxvY2stZm9vdGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFEU0Jsb2NrRm9vdGVyQ29tcG9uZW50IHtcclxuICAgIHllYXI6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxufVxyXG4iLCI8Zm9vdGVyPlxyXG4gICAgPHA+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyX2NvcHlyaWdodCB0ZXh0LXNpemUtc21hbGxcIlxyXG4gICAgICAgICAgICA+JmNvcHk7IHt7IHllYXIgfX1cclxuICAgICAgICAgICAgPHNwYW4gaTE4bj1cIkBAQURTQmxvY2tGb290ZXJDb3B5cmlnaHRcIj5BbHBoYWJldCBJbnRlcm5hdGlvbmFsIEdtYkg8L3NwYW4+PC9zcGFuXHJcbiAgICAgICAgPlxyXG4gICAgPC9wPlxyXG48L2Zvb3Rlcj5cclxuIl19