import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ADSTabPanelComponent {
    constructor() {
        this.selected = false;
    }
}
ADSTabPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSTabPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ADSTabPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.6", type: ADSTabPanelComponent, selector: "ads-tab-panel", inputs: { css: "css", id: "id", selected: "selected" }, viewQueries: [{ propertyName: "templateRef", first: true, predicate: ["tabpanel"], descendants: true }], ngImport: i0, template: "<ng-template #tabpanel>\r\n    <div class=\"ads-tab_panel\" role=\"tabpanel\">\r\n        <ng-content *ngIf=\"selected\"></ng-content>\r\n    </div>\r\n</ng-template>\r\n", styles: [":root{--ads-color-white: #fff;--ads-color-white_foreground: #000;--ads-color-gray-6: #f0f0f0;--ads-color-gray-6_foreground: #000;--ads-color-gray-12: #e0e0e0;--ads-color-gray-12_foreground: #000;--ads-color-gray-20: #cccccc;--ads-color-gray-20_foreground: #000;--ads-color-gray-50: gray;--ads-color-gray-50_foreground: #fff;--ads-color-gray-70: #4d4d4d;--ads-color-gray-70_foreground: #fff;--ads-color-gray-85: #262626;--ads-color-gray-85_foreground: #fff;--ads-color-black: #000;--ads-color-black_foreground: #fff;--ads-color-error: #d21e36;--ads-color-error_hover: #a5182b;--ads-color-error-background: #fceaea;--ads-color-info: #1e236e;--ads-color-info-background: var(--ads-color-gray-6);--ads-color-success: #01964c;--ads-color-success_hover: #016332;--ads-color-success-background: #eaf6eb;--ads-color-warning: #ef7d00;--ads-color-warning-background: #fff7ef;--ads-color-notification: #ffd900;--ads-color-notification-background: #fffdf0;--ads-color-primary: #1e236e;--ads-color-primary-40: #a5a7c5;--ads-color-primary-65: #6e71a2;--ads-color-primary-foreground: #fff;--ads-color-primary_active: #0a0c26;--ads-color-primary_active-foreground: #fff;--ads-color-primary_focus: #0f1136;--ads-color-primary_focus-foreground: #fff;--ads-color-primary_hover: #131646;--ads-color-primary_hover-foreground: #fff;--ads-color-secondary: #00d7e7;--ads-color-secondary-40: #9aeff5;--ads-color-secondary-65: #5ae5ef;--ads-color-secondary-foreground: #fff;--ads-color-secondary_active: #00828b;--ads-color-secondary_active-foreground: #fff;--ads-color-secondary_focus: #0095a0;--ads-color-secondary_focus-foreground: #fff;--ads-color-secondary_hover: #00a8b4;--ads-color-secondary_hover-foreground: #fff;--ads-color-accent: #ff6d6a;--ads-color-accent-40: #ffc5c3;--ads-color-accent-65: #ffa19f;--ads-color-accent-foreground: #fff;--ads-color-accent_active: #ff5451;--ads-color-accent_active-foreground: #fff;--ads-color-accent_hover: #ff3b37;--ads-color-accent_hover-foreground: #fff;--ads-color-accent_focus: #ff221e;--ads-color-accent_focus-foreground: #fff;--ads-color-disabled: #e0e0e0;--ads-color-disabled-foreground: gray;--ads-color-app: #fff;--ads-color-app-text: #262626;--ads-color-app-navigation: #1e236e;--ads-color-app-navigation-divider: #6e71a2;--ads-color-app-navigation-menu-item-foreground: #fff;--ads-color-app-navigation-menu-item-background: #1e236e;--ads-color-app-navigation-menu-item-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-background_hover: #1e236e;--ads-color-app-navigation-menu-item-foreground_focus: #fff;--ads-color-app-navigation-menu-item-background_focus: #fff;--ads-color-app-navigation-menu-item-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-background_selected: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground: #fff;--ads-color-app-navigation-menu-item-icon-background: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_hover: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-menu-item-icon-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_selected: #1e236e;--ads-color-app-navigation-toolbar: #fff;--ads-color-app-navigation-toolbar-divider: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_selected: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_selected: #f0f0f0;--ads-color-solid-gradient-primary-to-accent: linear-gradient(90deg, #1e236e 0%, #ff6d6a 100%);--ads-color-solid-gradient-secondary-to-accent: linear-gradient(-170deg, rgba(0, 215, 231, 0) 60%, #00d7e7 125%), linear-gradient(170deg, #ff6d6a 60%, #ff6d6a 125%);--ads-color-solid-gradient-accent-to-secondary-to-primary: linear-gradient(90deg, #ff6d6a 0%, #00d7e7 50%, #1e236e 100%);--ads-color-solid-gradient-gray-to-primary: linear-gradient(90deg, #e0e0e0 0%, #a5a7c5 100%);--ads-color-image-gradient-primary-to-accent: linear-gradient(90deg, rgba(30, 35, 110, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-primary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(30, 35, 110, .7) 100%);--ads-color-image-gradient-secondary-to-accent: linear-gradient(90deg, rgba(0, 215, 231, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-secondary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(0, 215, 231, .7) 100%);--ads-color-image-gradient-mask: linear-gradient(to bottom, rgba(0,0,0,0) 48%, rgba(0,0,0,.5) 80%, rgba(0,0,0,1) 100%);--ads-color-image-gradient-darken-bottom: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .1) 40%, rgba(0, 0, 0, .4) 100%);--ads-color-app-gradient-secondary-to-accent: linear-gradient(160deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .4) 90%), linear-gradient(220deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 60%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-large: linear-gradient(170deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .5) 90%), linear-gradient(210deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 70%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-foreground: #fff;--ads-color-app-gradient-primary-to-accent: linear-gradient(200deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .7) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 60%, rgba(30, 35, 110, .4) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-large: linear-gradient(190deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .6) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 70%, rgba(30, 35, 110, .5) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-foreground: #1e236e;--ads-color-app-gradient-primary-inverted: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 60%, rgba(255, 109, 106, .4) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 65%, rgba(0, 215, 231, .45) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-large: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 75%, rgba(255, 109, 106, .05) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 75%, rgba(0, 215, 231, .02) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-foreground: #1e236e;--ads-ring_active: 0 0 0 2px #fff, 0 0 0 5px #1e236e;--ads-ring_focus: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_hover: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_transparent: 0 0 0 2px transparent, 0 0 0 3px transparent;--ads-ring_focus-inset: inset 0 0 0 2px #fff, inset 0 0 0 3px #1e236e;--ads-ring_focus-inset-inverted: inset 0 0 0 2px #1e236e, inset 0 0 0 4px #fff;--ads-ring-focus-with-contextmenu: 0 0 0 1px #fff, 0 0 0 2px #555cd1, 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-0: 0 0 0 0 rgba(0, 0, 0, 0);--ads-shadow-depth-1: 0 .4px .4px rgba(0, 0, 0, .05), 0 1px 1px rgba(0, 0, 0, .036), 0 1.9px 1.9px rgba(0, 0, 0, .03), 0 3.4px 3.4px rgba(0, 0, 0, .025), 0 6.3px 6.3px rgba(0, 0, 0, .02), 0 15px 15px rgba(0, 0, 0, .014);--ads-shadow-depth-2: 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-3: 0 .7px .7px rgba(0, 0, 0, .017), 0 1.7px 1.7px rgba(0, 0, 0, .024), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .036), 0 10.4px 10.4px rgba(0, 0, 0, .043), 0 25px 25px rgba(0, 0, 0, .06);--ads-shadow-depth-4: 0 1px 1px rgba(0, 0, 0, .014), 0 2.3px 2.3px rgba(0, 0, 0, .02), 0 4.4px 4.4px rgba(0, 0, 0, .025), 0 7.8px 7.8px rgba(0, 0, 0, .03), 0 14.6px 14.6px rgba(0, 0, 0, .036), 0 35px 35px rgba(0, 0, 0, .05);--ads-shadow-depth-5: 0 1.2px 1.2px rgba(0, 0, 0, .014), 0 3px 3px rgba(0, 0, 0, .02), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.1px 10.1px rgba(0, 0, 0, .03), 0 18.8px 18.8px rgba(0, 0, 0, .036), 0 45px 45px rgba(0, 0, 0, .05);--ads-shadow-depth-6: 0 .9px .9px rgba(0, 0, 0, .011), 0 1.9px 1.9px rgba(0, 0, 0, .016), 0 3.2px 3.2px rgba(0, 0, 0, .019), 0 4.8px 4.8px rgba(0, 0, 0, .022), 0 6.9px 6.9px rgba(0, 0, 0, .025), 0 9.7px 9.7px rgba(0, 0, 0, .028), 0 13.8px 13.8px rgba(0, 0, 0, .031), 0 20.1px 20.1px rgba(0, 0, 0, .034), 0 30.9px 30.9px rgba(0, 0, 0, .039), 0 55px 55px rgba(0, 0, 0, .05)}.ads-tab_panel{position:relative;z-index:auto;top:-1px;display:block;width:100%;min-height:20rem;padding:1.5rem 0;margin:0;color:var(--ads-color-app-text);font-family:Alphabet sans pro light,sans-serif;font-size:1rem;font-style:normal;font-weight:300;line-height:1.5}.ads-tab_panel[hidden=true]{display:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSTabPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ads-tab-panel', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template #tabpanel>\r\n    <div class=\"ads-tab_panel\" role=\"tabpanel\">\r\n        <ng-content *ngIf=\"selected\"></ng-content>\r\n    </div>\r\n</ng-template>\r\n", styles: [":root{--ads-color-white: #fff;--ads-color-white_foreground: #000;--ads-color-gray-6: #f0f0f0;--ads-color-gray-6_foreground: #000;--ads-color-gray-12: #e0e0e0;--ads-color-gray-12_foreground: #000;--ads-color-gray-20: #cccccc;--ads-color-gray-20_foreground: #000;--ads-color-gray-50: gray;--ads-color-gray-50_foreground: #fff;--ads-color-gray-70: #4d4d4d;--ads-color-gray-70_foreground: #fff;--ads-color-gray-85: #262626;--ads-color-gray-85_foreground: #fff;--ads-color-black: #000;--ads-color-black_foreground: #fff;--ads-color-error: #d21e36;--ads-color-error_hover: #a5182b;--ads-color-error-background: #fceaea;--ads-color-info: #1e236e;--ads-color-info-background: var(--ads-color-gray-6);--ads-color-success: #01964c;--ads-color-success_hover: #016332;--ads-color-success-background: #eaf6eb;--ads-color-warning: #ef7d00;--ads-color-warning-background: #fff7ef;--ads-color-notification: #ffd900;--ads-color-notification-background: #fffdf0;--ads-color-primary: #1e236e;--ads-color-primary-40: #a5a7c5;--ads-color-primary-65: #6e71a2;--ads-color-primary-foreground: #fff;--ads-color-primary_active: #0a0c26;--ads-color-primary_active-foreground: #fff;--ads-color-primary_focus: #0f1136;--ads-color-primary_focus-foreground: #fff;--ads-color-primary_hover: #131646;--ads-color-primary_hover-foreground: #fff;--ads-color-secondary: #00d7e7;--ads-color-secondary-40: #9aeff5;--ads-color-secondary-65: #5ae5ef;--ads-color-secondary-foreground: #fff;--ads-color-secondary_active: #00828b;--ads-color-secondary_active-foreground: #fff;--ads-color-secondary_focus: #0095a0;--ads-color-secondary_focus-foreground: #fff;--ads-color-secondary_hover: #00a8b4;--ads-color-secondary_hover-foreground: #fff;--ads-color-accent: #ff6d6a;--ads-color-accent-40: #ffc5c3;--ads-color-accent-65: #ffa19f;--ads-color-accent-foreground: #fff;--ads-color-accent_active: #ff5451;--ads-color-accent_active-foreground: #fff;--ads-color-accent_hover: #ff3b37;--ads-color-accent_hover-foreground: #fff;--ads-color-accent_focus: #ff221e;--ads-color-accent_focus-foreground: #fff;--ads-color-disabled: #e0e0e0;--ads-color-disabled-foreground: gray;--ads-color-app: #fff;--ads-color-app-text: #262626;--ads-color-app-navigation: #1e236e;--ads-color-app-navigation-divider: #6e71a2;--ads-color-app-navigation-menu-item-foreground: #fff;--ads-color-app-navigation-menu-item-background: #1e236e;--ads-color-app-navigation-menu-item-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-background_hover: #1e236e;--ads-color-app-navigation-menu-item-foreground_focus: #fff;--ads-color-app-navigation-menu-item-background_focus: #fff;--ads-color-app-navigation-menu-item-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-background_selected: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground: #fff;--ads-color-app-navigation-menu-item-icon-background: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_hover: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-menu-item-icon-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_selected: #1e236e;--ads-color-app-navigation-toolbar: #fff;--ads-color-app-navigation-toolbar-divider: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_selected: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_selected: #f0f0f0;--ads-color-solid-gradient-primary-to-accent: linear-gradient(90deg, #1e236e 0%, #ff6d6a 100%);--ads-color-solid-gradient-secondary-to-accent: linear-gradient(-170deg, rgba(0, 215, 231, 0) 60%, #00d7e7 125%), linear-gradient(170deg, #ff6d6a 60%, #ff6d6a 125%);--ads-color-solid-gradient-accent-to-secondary-to-primary: linear-gradient(90deg, #ff6d6a 0%, #00d7e7 50%, #1e236e 100%);--ads-color-solid-gradient-gray-to-primary: linear-gradient(90deg, #e0e0e0 0%, #a5a7c5 100%);--ads-color-image-gradient-primary-to-accent: linear-gradient(90deg, rgba(30, 35, 110, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-primary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(30, 35, 110, .7) 100%);--ads-color-image-gradient-secondary-to-accent: linear-gradient(90deg, rgba(0, 215, 231, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-secondary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(0, 215, 231, .7) 100%);--ads-color-image-gradient-mask: linear-gradient(to bottom, rgba(0,0,0,0) 48%, rgba(0,0,0,.5) 80%, rgba(0,0,0,1) 100%);--ads-color-image-gradient-darken-bottom: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .1) 40%, rgba(0, 0, 0, .4) 100%);--ads-color-app-gradient-secondary-to-accent: linear-gradient(160deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .4) 90%), linear-gradient(220deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 60%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-large: linear-gradient(170deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .5) 90%), linear-gradient(210deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 70%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-foreground: #fff;--ads-color-app-gradient-primary-to-accent: linear-gradient(200deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .7) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 60%, rgba(30, 35, 110, .4) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-large: linear-gradient(190deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .6) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 70%, rgba(30, 35, 110, .5) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-foreground: #1e236e;--ads-color-app-gradient-primary-inverted: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 60%, rgba(255, 109, 106, .4) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 65%, rgba(0, 215, 231, .45) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-large: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 75%, rgba(255, 109, 106, .05) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 75%, rgba(0, 215, 231, .02) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-foreground: #1e236e;--ads-ring_active: 0 0 0 2px #fff, 0 0 0 5px #1e236e;--ads-ring_focus: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_hover: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_transparent: 0 0 0 2px transparent, 0 0 0 3px transparent;--ads-ring_focus-inset: inset 0 0 0 2px #fff, inset 0 0 0 3px #1e236e;--ads-ring_focus-inset-inverted: inset 0 0 0 2px #1e236e, inset 0 0 0 4px #fff;--ads-ring-focus-with-contextmenu: 0 0 0 1px #fff, 0 0 0 2px #555cd1, 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-0: 0 0 0 0 rgba(0, 0, 0, 0);--ads-shadow-depth-1: 0 .4px .4px rgba(0, 0, 0, .05), 0 1px 1px rgba(0, 0, 0, .036), 0 1.9px 1.9px rgba(0, 0, 0, .03), 0 3.4px 3.4px rgba(0, 0, 0, .025), 0 6.3px 6.3px rgba(0, 0, 0, .02), 0 15px 15px rgba(0, 0, 0, .014);--ads-shadow-depth-2: 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-3: 0 .7px .7px rgba(0, 0, 0, .017), 0 1.7px 1.7px rgba(0, 0, 0, .024), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .036), 0 10.4px 10.4px rgba(0, 0, 0, .043), 0 25px 25px rgba(0, 0, 0, .06);--ads-shadow-depth-4: 0 1px 1px rgba(0, 0, 0, .014), 0 2.3px 2.3px rgba(0, 0, 0, .02), 0 4.4px 4.4px rgba(0, 0, 0, .025), 0 7.8px 7.8px rgba(0, 0, 0, .03), 0 14.6px 14.6px rgba(0, 0, 0, .036), 0 35px 35px rgba(0, 0, 0, .05);--ads-shadow-depth-5: 0 1.2px 1.2px rgba(0, 0, 0, .014), 0 3px 3px rgba(0, 0, 0, .02), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.1px 10.1px rgba(0, 0, 0, .03), 0 18.8px 18.8px rgba(0, 0, 0, .036), 0 45px 45px rgba(0, 0, 0, .05);--ads-shadow-depth-6: 0 .9px .9px rgba(0, 0, 0, .011), 0 1.9px 1.9px rgba(0, 0, 0, .016), 0 3.2px 3.2px rgba(0, 0, 0, .019), 0 4.8px 4.8px rgba(0, 0, 0, .022), 0 6.9px 6.9px rgba(0, 0, 0, .025), 0 9.7px 9.7px rgba(0, 0, 0, .028), 0 13.8px 13.8px rgba(0, 0, 0, .031), 0 20.1px 20.1px rgba(0, 0, 0, .034), 0 30.9px 30.9px rgba(0, 0, 0, .039), 0 55px 55px rgba(0, 0, 0, .05)}.ads-tab_panel{position:relative;z-index:auto;top:-1px;display:block;width:100%;min-height:20rem;padding:1.5rem 0;margin:0;color:var(--ads-color-app-text);font-family:Alphabet sans pro light,sans-serif;font-size:1rem;font-style:normal;font-weight:300;line-height:1.5}.ads-tab_panel[hidden=true]{display:none}\n"] }]
        }], propDecorators: { css: [{
                type: Input
            }], id: [{
                type: Input
            }], selected: [{
                type: Input
            }], templateRef: [{
                type: ViewChild,
                args: ['tabpanel']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYWxwaGFiZXQtZGVzaWduLXN5c3RlbS11aS9zcmMvbGliL2NvbXBvbmVudHMvdGFiLXBhbmVsL3RhYi1wYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FscGhhYmV0LWRlc2lnbi1zeXN0ZW0tdWkvc3JjL2xpYi9jb21wb25lbnRzL3RhYi1wYW5lbC90YWItcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUWxHLE1BQU0sT0FBTyxvQkFBb0I7SUFOakM7UUFTYSxhQUFRLEdBQUcsS0FBSyxDQUFDO0tBRzdCOztpSEFOWSxvQkFBb0I7cUdBQXBCLG9CQUFvQixzTkNSakMsNEtBS0E7MkZER2Esb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNJLGVBQWUsbUJBR1IsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsR0FBRztzQkFBWCxLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVpQixXQUFXO3NCQUFqQyxTQUFTO3VCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Fkcy10YWItcGFuZWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYi1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90YWItcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQURTVGFiUGFuZWxDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgY3NzITogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaWQhOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3RhYnBhbmVsJykgdGVtcGxhdGVSZWYhOiBUZW1wbGF0ZVJlZjx1bmtub3duPjtcclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI3RhYnBhbmVsPlxyXG4gICAgPGRpdiBjbGFzcz1cImFkcy10YWJfcGFuZWxcIiByb2xlPVwidGFicGFuZWxcIj5cclxuICAgICAgICA8bmctY29udGVudCAqbmdJZj1cInNlbGVjdGVkXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==