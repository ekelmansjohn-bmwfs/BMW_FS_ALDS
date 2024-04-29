import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../components/logo/logo.component";
export class ADSViewPageNotFoundComponent {
}
ADSViewPageNotFoundComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSViewPageNotFoundComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ADSViewPageNotFoundComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.6", type: ADSViewPageNotFoundComponent, selector: "ads-view-page-not-found", ngImport: i0, template: "<div class=\"ads-view-page-not-found\">\r\n    <div class=\"ads-view-page-not-found_box\">\r\n        <ads-logo></ads-logo>\r\n        <h4 i18n=\"@@pageNotFoundTitle\">Page not found</h4>\r\n        <p i18n=\"@@pageNotFoundDescription\">Sorry, the page you requested does not exist.</p>\r\n        <a href=\"/\" class=\"ads-anchor\" i18n=\"@@pageNotFoundGoBack\">Go back</a>\r\n    </div>\r\n</div>\r\n", styles: [":root{--ads-color-white: #fff;--ads-color-white_foreground: #000;--ads-color-gray-6: #f0f0f0;--ads-color-gray-6_foreground: #000;--ads-color-gray-12: #e0e0e0;--ads-color-gray-12_foreground: #000;--ads-color-gray-20: #cccccc;--ads-color-gray-20_foreground: #000;--ads-color-gray-50: gray;--ads-color-gray-50_foreground: #fff;--ads-color-gray-70: #4d4d4d;--ads-color-gray-70_foreground: #fff;--ads-color-gray-85: #262626;--ads-color-gray-85_foreground: #fff;--ads-color-black: #000;--ads-color-black_foreground: #fff;--ads-color-error: #d21e36;--ads-color-error_hover: #a5182b;--ads-color-error-background: #fceaea;--ads-color-info: #1e236e;--ads-color-info-background: var(--ads-color-gray-6);--ads-color-success: #01964c;--ads-color-success_hover: #016332;--ads-color-success-background: #eaf6eb;--ads-color-warning: #ef7d00;--ads-color-warning-background: #fff7ef;--ads-color-notification: #ffd900;--ads-color-notification-background: #fffdf0;--ads-color-primary: #1e236e;--ads-color-primary-40: #a5a7c5;--ads-color-primary-65: #6e71a2;--ads-color-primary-foreground: #fff;--ads-color-primary_active: #0a0c26;--ads-color-primary_active-foreground: #fff;--ads-color-primary_focus: #0f1136;--ads-color-primary_focus-foreground: #fff;--ads-color-primary_hover: #131646;--ads-color-primary_hover-foreground: #fff;--ads-color-secondary: #00d7e7;--ads-color-secondary-40: #9aeff5;--ads-color-secondary-65: #5ae5ef;--ads-color-secondary-foreground: #fff;--ads-color-secondary_active: #00828b;--ads-color-secondary_active-foreground: #fff;--ads-color-secondary_focus: #0095a0;--ads-color-secondary_focus-foreground: #fff;--ads-color-secondary_hover: #00a8b4;--ads-color-secondary_hover-foreground: #fff;--ads-color-accent: #ff6d6a;--ads-color-accent-40: #ffc5c3;--ads-color-accent-65: #ffa19f;--ads-color-accent-foreground: #fff;--ads-color-accent_active: #ff5451;--ads-color-accent_active-foreground: #fff;--ads-color-accent_hover: #ff3b37;--ads-color-accent_hover-foreground: #fff;--ads-color-accent_focus: #ff221e;--ads-color-accent_focus-foreground: #fff;--ads-color-disabled: #e0e0e0;--ads-color-disabled-foreground: gray;--ads-color-app: #fff;--ads-color-app-text: #262626;--ads-color-app-navigation: #1e236e;--ads-color-app-navigation-divider: #6e71a2;--ads-color-app-navigation-menu-item-foreground: #fff;--ads-color-app-navigation-menu-item-background: #1e236e;--ads-color-app-navigation-menu-item-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-background_hover: #1e236e;--ads-color-app-navigation-menu-item-foreground_focus: #fff;--ads-color-app-navigation-menu-item-background_focus: #fff;--ads-color-app-navigation-menu-item-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-background_selected: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground: #fff;--ads-color-app-navigation-menu-item-icon-background: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_hover: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-menu-item-icon-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_selected: #1e236e;--ads-color-app-navigation-toolbar: #fff;--ads-color-app-navigation-toolbar-divider: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_selected: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_selected: #f0f0f0;--ads-color-solid-gradient-primary-to-accent: linear-gradient(90deg, #1e236e 0%, #ff6d6a 100%);--ads-color-solid-gradient-secondary-to-accent: linear-gradient(-170deg, rgba(0, 215, 231, 0) 60%, #00d7e7 125%), linear-gradient(170deg, #ff6d6a 60%, #ff6d6a 125%);--ads-color-solid-gradient-accent-to-secondary-to-primary: linear-gradient(90deg, #ff6d6a 0%, #00d7e7 50%, #1e236e 100%);--ads-color-solid-gradient-gray-to-primary: linear-gradient(90deg, #e0e0e0 0%, #a5a7c5 100%);--ads-color-image-gradient-primary-to-accent: linear-gradient(90deg, rgba(30, 35, 110, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-primary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(30, 35, 110, .7) 100%);--ads-color-image-gradient-secondary-to-accent: linear-gradient(90deg, rgba(0, 215, 231, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-secondary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(0, 215, 231, .7) 100%);--ads-color-image-gradient-mask: linear-gradient(to bottom, rgba(0,0,0,0) 48%, rgba(0,0,0,.5) 80%, rgba(0,0,0,1) 100%);--ads-color-image-gradient-darken-bottom: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .1) 40%, rgba(0, 0, 0, .4) 100%);--ads-color-app-gradient-secondary-to-accent: linear-gradient(160deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .4) 90%), linear-gradient(220deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 60%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-large: linear-gradient(170deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .5) 90%), linear-gradient(210deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 70%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-foreground: #fff;--ads-color-app-gradient-primary-to-accent: linear-gradient(200deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .7) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 60%, rgba(30, 35, 110, .4) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-large: linear-gradient(190deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .6) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 70%, rgba(30, 35, 110, .5) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-foreground: #1e236e;--ads-color-app-gradient-primary-inverted: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 60%, rgba(255, 109, 106, .4) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 65%, rgba(0, 215, 231, .45) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-large: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 75%, rgba(255, 109, 106, .05) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 75%, rgba(0, 215, 231, .02) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-foreground: #1e236e;--ads-ring_active: 0 0 0 2px #fff, 0 0 0 5px #1e236e;--ads-ring_focus: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_hover: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_transparent: 0 0 0 2px transparent, 0 0 0 3px transparent;--ads-ring_focus-inset: inset 0 0 0 2px #fff, inset 0 0 0 3px #1e236e;--ads-ring_focus-inset-inverted: inset 0 0 0 2px #1e236e, inset 0 0 0 4px #fff;--ads-ring-focus-with-contextmenu: 0 0 0 1px #fff, 0 0 0 2px #555cd1, 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-0: 0 0 0 0 rgba(0, 0, 0, 0);--ads-shadow-depth-1: 0 .4px .4px rgba(0, 0, 0, .05), 0 1px 1px rgba(0, 0, 0, .036), 0 1.9px 1.9px rgba(0, 0, 0, .03), 0 3.4px 3.4px rgba(0, 0, 0, .025), 0 6.3px 6.3px rgba(0, 0, 0, .02), 0 15px 15px rgba(0, 0, 0, .014);--ads-shadow-depth-2: 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-3: 0 .7px .7px rgba(0, 0, 0, .017), 0 1.7px 1.7px rgba(0, 0, 0, .024), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .036), 0 10.4px 10.4px rgba(0, 0, 0, .043), 0 25px 25px rgba(0, 0, 0, .06);--ads-shadow-depth-4: 0 1px 1px rgba(0, 0, 0, .014), 0 2.3px 2.3px rgba(0, 0, 0, .02), 0 4.4px 4.4px rgba(0, 0, 0, .025), 0 7.8px 7.8px rgba(0, 0, 0, .03), 0 14.6px 14.6px rgba(0, 0, 0, .036), 0 35px 35px rgba(0, 0, 0, .05);--ads-shadow-depth-5: 0 1.2px 1.2px rgba(0, 0, 0, .014), 0 3px 3px rgba(0, 0, 0, .02), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.1px 10.1px rgba(0, 0, 0, .03), 0 18.8px 18.8px rgba(0, 0, 0, .036), 0 45px 45px rgba(0, 0, 0, .05);--ads-shadow-depth-6: 0 .9px .9px rgba(0, 0, 0, .011), 0 1.9px 1.9px rgba(0, 0, 0, .016), 0 3.2px 3.2px rgba(0, 0, 0, .019), 0 4.8px 4.8px rgba(0, 0, 0, .022), 0 6.9px 6.9px rgba(0, 0, 0, .025), 0 9.7px 9.7px rgba(0, 0, 0, .028), 0 13.8px 13.8px rgba(0, 0, 0, .031), 0 20.1px 20.1px rgba(0, 0, 0, .034), 0 30.9px 30.9px rgba(0, 0, 0, .039), 0 55px 55px rgba(0, 0, 0, .05)}.ads-view-page-not-found{display:flex;min-height:100vh;align-items:center;justify-content:center}.ads-view-page-not-found_box{width:100%;max-width:auto;padding:1rem}@media (min-width: 769px){.ads-view-page-not-found_box{width:500px;max-width:500px}}.ads-view-page-not-found_box h4{margin-top:2rem;color:var(--ads-color-accent);font-family:Alphabet sans pro,sans-serif;font-weight:600}.ads-view-page-not-found_box p{margin-bottom:1.5rem}\n"], dependencies: [{ kind: "component", type: i1.ADSLogoComponent, selector: "ads-logo", inputs: ["alt", "color", "css"], outputs: ["clickEmitter"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: ADSViewPageNotFoundComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ads-view-page-not-found', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ads-view-page-not-found\">\r\n    <div class=\"ads-view-page-not-found_box\">\r\n        <ads-logo></ads-logo>\r\n        <h4 i18n=\"@@pageNotFoundTitle\">Page not found</h4>\r\n        <p i18n=\"@@pageNotFoundDescription\">Sorry, the page you requested does not exist.</p>\r\n        <a href=\"/\" class=\"ads-anchor\" i18n=\"@@pageNotFoundGoBack\">Go back</a>\r\n    </div>\r\n</div>\r\n", styles: [":root{--ads-color-white: #fff;--ads-color-white_foreground: #000;--ads-color-gray-6: #f0f0f0;--ads-color-gray-6_foreground: #000;--ads-color-gray-12: #e0e0e0;--ads-color-gray-12_foreground: #000;--ads-color-gray-20: #cccccc;--ads-color-gray-20_foreground: #000;--ads-color-gray-50: gray;--ads-color-gray-50_foreground: #fff;--ads-color-gray-70: #4d4d4d;--ads-color-gray-70_foreground: #fff;--ads-color-gray-85: #262626;--ads-color-gray-85_foreground: #fff;--ads-color-black: #000;--ads-color-black_foreground: #fff;--ads-color-error: #d21e36;--ads-color-error_hover: #a5182b;--ads-color-error-background: #fceaea;--ads-color-info: #1e236e;--ads-color-info-background: var(--ads-color-gray-6);--ads-color-success: #01964c;--ads-color-success_hover: #016332;--ads-color-success-background: #eaf6eb;--ads-color-warning: #ef7d00;--ads-color-warning-background: #fff7ef;--ads-color-notification: #ffd900;--ads-color-notification-background: #fffdf0;--ads-color-primary: #1e236e;--ads-color-primary-40: #a5a7c5;--ads-color-primary-65: #6e71a2;--ads-color-primary-foreground: #fff;--ads-color-primary_active: #0a0c26;--ads-color-primary_active-foreground: #fff;--ads-color-primary_focus: #0f1136;--ads-color-primary_focus-foreground: #fff;--ads-color-primary_hover: #131646;--ads-color-primary_hover-foreground: #fff;--ads-color-secondary: #00d7e7;--ads-color-secondary-40: #9aeff5;--ads-color-secondary-65: #5ae5ef;--ads-color-secondary-foreground: #fff;--ads-color-secondary_active: #00828b;--ads-color-secondary_active-foreground: #fff;--ads-color-secondary_focus: #0095a0;--ads-color-secondary_focus-foreground: #fff;--ads-color-secondary_hover: #00a8b4;--ads-color-secondary_hover-foreground: #fff;--ads-color-accent: #ff6d6a;--ads-color-accent-40: #ffc5c3;--ads-color-accent-65: #ffa19f;--ads-color-accent-foreground: #fff;--ads-color-accent_active: #ff5451;--ads-color-accent_active-foreground: #fff;--ads-color-accent_hover: #ff3b37;--ads-color-accent_hover-foreground: #fff;--ads-color-accent_focus: #ff221e;--ads-color-accent_focus-foreground: #fff;--ads-color-disabled: #e0e0e0;--ads-color-disabled-foreground: gray;--ads-color-app: #fff;--ads-color-app-text: #262626;--ads-color-app-navigation: #1e236e;--ads-color-app-navigation-divider: #6e71a2;--ads-color-app-navigation-menu-item-foreground: #fff;--ads-color-app-navigation-menu-item-background: #1e236e;--ads-color-app-navigation-menu-item-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-background_hover: #1e236e;--ads-color-app-navigation-menu-item-foreground_focus: #fff;--ads-color-app-navigation-menu-item-background_focus: #fff;--ads-color-app-navigation-menu-item-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-background_selected: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground: #fff;--ads-color-app-navigation-menu-item-icon-background: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_hover: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_hover: #1e236e;--ads-color-app-navigation-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-menu-item-icon-foreground_selected: #00d7e7;--ads-color-app-navigation-menu-item-icon-background_selected: #1e236e;--ads-color-app-navigation-toolbar: #fff;--ads-color-app-navigation-toolbar-divider: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-background_selected: #e0e0e0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_hover: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_hover: #f0f0f0;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_focus: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_focus: #fff;--ads-color-app-navigation-toolbar-menu-item-icon-foreground_selected: #1e236e;--ads-color-app-navigation-toolbar-menu-item-icon-background_selected: #f0f0f0;--ads-color-solid-gradient-primary-to-accent: linear-gradient(90deg, #1e236e 0%, #ff6d6a 100%);--ads-color-solid-gradient-secondary-to-accent: linear-gradient(-170deg, rgba(0, 215, 231, 0) 60%, #00d7e7 125%), linear-gradient(170deg, #ff6d6a 60%, #ff6d6a 125%);--ads-color-solid-gradient-accent-to-secondary-to-primary: linear-gradient(90deg, #ff6d6a 0%, #00d7e7 50%, #1e236e 100%);--ads-color-solid-gradient-gray-to-primary: linear-gradient(90deg, #e0e0e0 0%, #a5a7c5 100%);--ads-color-image-gradient-primary-to-accent: linear-gradient(90deg, rgba(30, 35, 110, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-primary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(30, 35, 110, .7) 100%);--ads-color-image-gradient-secondary-to-accent: linear-gradient(90deg, rgba(0, 215, 231, .7) 0, rgba(255, 109, 106, .7) 100%);--ads-color-image-gradient-accent-to-secondary: linear-gradient(90deg, rgba(255, 109, 106, .7) 0, rgba(0, 215, 231, .7) 100%);--ads-color-image-gradient-mask: linear-gradient(to bottom, rgba(0,0,0,0) 48%, rgba(0,0,0,.5) 80%, rgba(0,0,0,1) 100%);--ads-color-image-gradient-darken-bottom: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .1) 40%, rgba(0, 0, 0, .4) 100%);--ads-color-app-gradient-secondary-to-accent: linear-gradient(160deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .4) 90%), linear-gradient(220deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 60%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-large: linear-gradient(170deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .5) 90%), linear-gradient(210deg, rgba(0, 215, 231, .05) 0%, rgba(0, 215, 231, 0) 70%, rgba(0, 215, 231, .6) 90%), linear-gradient(var(--ads-color-primary), var(--ads-color-primary));--ads-color-app-gradient-secondary-to-accent-foreground: #fff;--ads-color-app-gradient-primary-to-accent: linear-gradient(200deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, .7) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 60%, rgba(30, 35, 110, .4) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-large: linear-gradient(190deg, rgba(255, 109, 106, .05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, .6) 90%), linear-gradient(160deg, rgba(30, 35, 110, .05) 0%, rgba(30, 35, 110, 0) 70%, rgba(30, 35, 110, .5) 90%), linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));--ads-color-app-gradient-primary-to-accent-foreground: #1e236e;--ads-color-app-gradient-primary-inverted: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 60%, rgba(255, 109, 106, .4) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 65%, rgba(0, 215, 231, .45) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-large: linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 75%, rgba(255, 109, 106, .05) 90%), linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 75%, rgba(0, 215, 231, .02) 90%), linear-gradient(var(--ads-color-white), var(--ads-color-white));--ads-color-app-gradient-primary-inverted-foreground: #1e236e;--ads-ring_active: 0 0 0 2px #fff, 0 0 0 5px #1e236e;--ads-ring_focus: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_hover: 0 0 0 2px #fff, 0 0 0 4px #1e236e;--ads-ring_transparent: 0 0 0 2px transparent, 0 0 0 3px transparent;--ads-ring_focus-inset: inset 0 0 0 2px #fff, inset 0 0 0 3px #1e236e;--ads-ring_focus-inset-inverted: inset 0 0 0 2px #1e236e, inset 0 0 0 4px #fff;--ads-ring-focus-with-contextmenu: 0 0 0 1px #fff, 0 0 0 2px #555cd1, 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-0: 0 0 0 0 rgba(0, 0, 0, 0);--ads-shadow-depth-1: 0 .4px .4px rgba(0, 0, 0, .05), 0 1px 1px rgba(0, 0, 0, .036), 0 1.9px 1.9px rgba(0, 0, 0, .03), 0 3.4px 3.4px rgba(0, 0, 0, .025), 0 6.3px 6.3px rgba(0, 0, 0, .02), 0 15px 15px rgba(0, 0, 0, .014);--ads-shadow-depth-2: 0 .7px .7px rgba(0, 0, 0, .05), 0 1.7px 1.7px rgba(0, 0, 0, .036), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.4px 10.4px rgba(0, 0, 0, .02), 0 25px 25px rgba(0, 0, 0, .014);--ads-shadow-depth-3: 0 .7px .7px rgba(0, 0, 0, .017), 0 1.7px 1.7px rgba(0, 0, 0, .024), 0 3.1px 3.1px rgba(0, 0, 0, .03), 0 5.6px 5.6px rgba(0, 0, 0, .036), 0 10.4px 10.4px rgba(0, 0, 0, .043), 0 25px 25px rgba(0, 0, 0, .06);--ads-shadow-depth-4: 0 1px 1px rgba(0, 0, 0, .014), 0 2.3px 2.3px rgba(0, 0, 0, .02), 0 4.4px 4.4px rgba(0, 0, 0, .025), 0 7.8px 7.8px rgba(0, 0, 0, .03), 0 14.6px 14.6px rgba(0, 0, 0, .036), 0 35px 35px rgba(0, 0, 0, .05);--ads-shadow-depth-5: 0 1.2px 1.2px rgba(0, 0, 0, .014), 0 3px 3px rgba(0, 0, 0, .02), 0 5.6px 5.6px rgba(0, 0, 0, .025), 0 10.1px 10.1px rgba(0, 0, 0, .03), 0 18.8px 18.8px rgba(0, 0, 0, .036), 0 45px 45px rgba(0, 0, 0, .05);--ads-shadow-depth-6: 0 .9px .9px rgba(0, 0, 0, .011), 0 1.9px 1.9px rgba(0, 0, 0, .016), 0 3.2px 3.2px rgba(0, 0, 0, .019), 0 4.8px 4.8px rgba(0, 0, 0, .022), 0 6.9px 6.9px rgba(0, 0, 0, .025), 0 9.7px 9.7px rgba(0, 0, 0, .028), 0 13.8px 13.8px rgba(0, 0, 0, .031), 0 20.1px 20.1px rgba(0, 0, 0, .034), 0 30.9px 30.9px rgba(0, 0, 0, .039), 0 55px 55px rgba(0, 0, 0, .05)}.ads-view-page-not-found{display:flex;min-height:100vh;align-items:center;justify-content:center}.ads-view-page-not-found_box{width:100%;max-width:auto;padding:1rem}@media (min-width: 769px){.ads-view-page-not-found_box{width:500px;max-width:500px}}.ads-view-page-not-found_box h4{margin-top:2rem;color:var(--ads-color-accent);font-family:Alphabet sans pro,sans-serif;font-weight:600}.ads-view-page-not-found_box p{margin-bottom:1.5rem}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FscGhhYmV0LWRlc2lnbi1zeXN0ZW0tdWkvc3JjL2xpYi92aWV3cy92aWV3LXBhZ2Utbm90LWZvdW5kL3ZpZXcucGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hbHBoYWJldC1kZXNpZ24tc3lzdGVtLXVpL3NyYy9saWIvdmlld3Mvdmlldy1wYWdlLW5vdC1mb3VuZC92aWV3LnBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVFuRSxNQUFNLE9BQU8sNEJBQTRCOzt5SEFBNUIsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsK0RDUnpDLG9aQVFBOzJGREFhLDRCQUE0QjtrQkFOeEMsU0FBUzsrQkFDSSx5QkFBeUIsbUJBR2xCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRzLXZpZXctcGFnZS1ub3QtZm91bmQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXcucGFnZS1ub3QtZm91bmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdmlldy5wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBRFNWaWV3UGFnZU5vdEZvdW5kQ29tcG9uZW50IHt9XHJcbiIsIjxkaXYgY2xhc3M9XCJhZHMtdmlldy1wYWdlLW5vdC1mb3VuZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFkcy12aWV3LXBhZ2Utbm90LWZvdW5kX2JveFwiPlxyXG4gICAgICAgIDxhZHMtbG9nbz48L2Fkcy1sb2dvPlxyXG4gICAgICAgIDxoNCBpMThuPVwiQEBwYWdlTm90Rm91bmRUaXRsZVwiPlBhZ2Ugbm90IGZvdW5kPC9oND5cclxuICAgICAgICA8cCBpMThuPVwiQEBwYWdlTm90Rm91bmREZXNjcmlwdGlvblwiPlNvcnJ5LCB0aGUgcGFnZSB5b3UgcmVxdWVzdGVkIGRvZXMgbm90IGV4aXN0LjwvcD5cclxuICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwiYWRzLWFuY2hvclwiIGkxOG49XCJAQHBhZ2VOb3RGb3VuZEdvQmFja1wiPkdvIGJhY2s8L2E+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==