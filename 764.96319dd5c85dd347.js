"use strict";
(self["webpackChunkalphabet_design_system"] = self["webpackChunkalphabet_design_system"] || []).push([[764],{

/***/ 65764:
/*!****************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-home/src/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureHomeModule": () => (/* reexport safe */ _lib_ads_app_features_feature_home_module__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureHomeModule)
/* harmony export */ });
/* harmony import */ var _lib_ads_app_features_feature_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ads-app-features-feature-home.module */ 15282);


/***/ }),

/***/ 15282:
/*!***************************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-home/src/lib/ads-app-features-feature-home.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureHomeModule": () => (/* binding */ ADSAppFeatureHomeModule)
/* harmony export */ });
/* harmony import */ var _ads_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ads/ui */ 70191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 82026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);






let ADSAppFeatureHomeModule = /*#__PURE__*/(() => {
  class ADSAppFeatureHomeModule {}
  ADSAppFeatureHomeModule.ɵfac = function ADSAppFeatureHomeModule_Factory(t) {
    return new (t || ADSAppFeatureHomeModule)();
  };
  ADSAppFeatureHomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ADSAppFeatureHomeModule
  });
  ADSAppFeatureHomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ads_ui__WEBPACK_IMPORTED_MODULE_0__.ADSUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.ADSAppFeatureHomeHomeComponent
    }])]
  });
  return ADSAppFeatureHomeModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ADSAppFeatureHomeModule, {
    declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.ADSAppFeatureHomeHomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ads_ui__WEBPACK_IMPORTED_MODULE_0__.ADSUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 82026:
/*!**********************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-home/src/lib/home/home.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureHomeHomeComponent": () => (/* binding */ ADSAppFeatureHomeHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _alphabet_design_system_ui_src_lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../alphabet-design-system-ui/src/lib/components/icon/icon.component */ 49299);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);



let ADSAppFeatureHomeHomeComponent = /*#__PURE__*/(() => {
  class ADSAppFeatureHomeHomeComponent {}
  ADSAppFeatureHomeHomeComponent.ɵfac = function ADSAppFeatureHomeHomeComponent_Factory(t) {
    return new (t || ADSAppFeatureHomeHomeComponent)();
  };
  ADSAppFeatureHomeHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ADSAppFeatureHomeHomeComponent,
    selectors: [["ads-app-feature-home-home"]],
    decls: 67,
    vars: 6,
    consts: [[1, "ads-block-web_text-center", "is-indented", "ads-fx-appear", "pb-0"], [1, "ads-block-web_text-center-text"], [1, "ads-h3", "text-color-primary", "mb-0", "font-alphabet-heading-bold"], [1, "is-sub-title", "mt-1"], [1, "text-size-extra-large", "text-color-primary"], [1, "ads-block-web_text-center", "is-indented", "ads-fx-appear"], [1, "ads-block-web_text-center-text", "display-as-2-columns"], [1, "ads-block-web_text-center", "ads-fx-appear"], [1, "ads-home-topics"], [3, "routerLink"], ["type", "av_custom_layers", "color", "secondary", "size", "example"], [1, "ads-h5"], ["type", "multidimensional_navigation", "color", "primary", "size", "example"], ["type", "bim", "color", "white", "size", "example"], [1, "ads-block-web_text-center", "pb-0", "is-indented", "ads-fx-appear"], [1, "ads-h6", "mb-2", "text-color-primary", "font-alphabet-heading-bold"], [1, "ads-anchor", "mt-2", 3, "routerLink"], [1, "ads-block-web_text-center", "mt-8", "is-indented", "ads-fx-appear"], [1, "ads-h5", "mb-0", "text-color-primary", "font-alphabet-heading-bold"], [1, "ads-h5", "mb-2", "text-color-primary", "font-alphabet-heading-bold"]],
    template: function ADSAppFeatureHomeHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Alphabet Design System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Alphabet Design System - Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " The Alphabet Typo System is a comprehensive collection of design standards, guidelines, and components that work together to create a consistent visual language and user experience across all products and platforms. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 5)(9, "div", 6)(10, "p")(11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Design principles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " It provides a shared set of design principles, best practices, and design patterns that help ensure that every user touchpoint reflects the brand identity and meets user needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " The Alphabet Design System are essential for scaling design efforts, improving design efficiency, and ensuring that products are easy to use and visually appealing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p")(18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Using it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " The system will enable your team to work faster, collaborate more effectively, and make design decisions with confidence. Whether you're building a new product or scaling an existing one, it can help you create a cohesive and delightful user experience while streamlining your design process.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 7)(23, "div", 1)(24, "div", 8)(25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ads-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Foundation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ads-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ads-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "section", 14)(38, "div", 1)(39, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Foundation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " The Alphabet brand identity is the strategic foundation of our brand and the basis for our internal and external communications. Our brand's focus is clearly on the benefit of simply providing the right mobility solution for every customer and user. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "section", 14)(46, "div", 1)(47, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Components are a crucial part of the Alphabet Design system. By breaking down complex interfaces into smaller, reusable pieces, components can greatly simplify the design process while ensuring consistency and maintainability. This approach also makes it easier to make changes or updates to the design system as a whole, as changes made to a single component can be propagated throughout the system. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "section", 14)(54, "div", 1)(55, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Blocks in an angular design system refer to reusable UI structures that are made up of multiple components and can be used across different pages or sections of a website or application. These blocks can include items such as navigation menus, footers, sidebars, card displays, and more. By grouping these UI structures into blocks, designers and developers can create an organized and standardized system for building and maintaining their application's user interface. Blocks provide a level of consistency and efficiency for development while also allowing for flexibility and customization in the application's design. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "section", 17)(62, "div", 1)(63, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Your mobility.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Made easy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/foundation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/components");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/foundation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/blocks/introduction");
      }
    },
    dependencies: [_alphabet_design_system_ui_src_lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.ADSIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["[_ngcontent-%COMP%]:root {\n  --ads-color-white: #fff;\n  --ads-color-white_foreground: #000;\n  --ads-color-gray-6: #f0f0f0;\n  --ads-color-gray-6_foreground: #000;\n  --ads-color-gray-12: #e0e0e0;\n  --ads-color-gray-12_foreground: #000;\n  --ads-color-gray-20: #cccccc;\n  --ads-color-gray-20_foreground: #000;\n  --ads-color-gray-50: gray;\n  --ads-color-gray-50_foreground: #fff;\n  --ads-color-gray-70: #4d4d4d;\n  --ads-color-gray-70_foreground: #fff;\n  --ads-color-gray-85: #262626;\n  --ads-color-gray-85_foreground: #fff;\n  --ads-color-black: #000;\n  --ads-color-black_foreground: #fff;\n  --ads-color-error: #d21e36;\n  --ads-color-error_hover: #a5182b;\n  --ads-color-error-background: #fceaea;\n  --ads-color-info: #1e236e;\n  --ads-color-info-background: var(--ads-color-gray-6);\n  --ads-color-success: #01964c;\n  --ads-color-success_hover: #016332;\n  --ads-color-success-background: #eaf6eb;\n  --ads-color-warning: #ef7d00;\n  --ads-color-warning-background: #fff7ef;\n  --ads-color-notification: #ffd900;\n  --ads-color-notification-background: #fffdf0;\n  --ads-color-primary: #1e236e;\n  --ads-color-primary-40: #a5a7c5;\n  --ads-color-primary-65: #6e71a2;\n  --ads-color-primary-foreground: #fff;\n  --ads-color-primary_active: #0a0c26;\n  --ads-color-primary_active-foreground: #fff;\n  --ads-color-primary_focus: #0f1136;\n  --ads-color-primary_focus-foreground: #fff;\n  --ads-color-primary_hover: #131646;\n  --ads-color-primary_hover-foreground: #fff;\n  --ads-color-secondary: #00d7e7;\n  --ads-color-secondary-40: #9aeff5;\n  --ads-color-secondary-65: #5ae5ef;\n  --ads-color-secondary-foreground: #fff;\n  --ads-color-secondary_active: #00828b;\n  --ads-color-secondary_active-foreground: #fff;\n  --ads-color-secondary_focus: #0095a0;\n  --ads-color-secondary_focus-foreground: #fff;\n  --ads-color-secondary_hover: #00a8b4;\n  --ads-color-secondary_hover-foreground: #fff;\n  --ads-color-accent: #ff6d6a;\n  --ads-color-accent-40: #ffc5c3;\n  --ads-color-accent-65: #ffa19f;\n  --ads-color-accent-foreground: #fff;\n  --ads-color-accent_active: #ff5451;\n  --ads-color-accent_active-foreground: #fff;\n  --ads-color-accent_hover: #ff3b37;\n  --ads-color-accent_hover-foreground: #fff;\n  --ads-color-accent_focus: #ff221e;\n  --ads-color-accent_focus-foreground: #fff;\n  --ads-color-disabled: #e0e0e0;\n  --ads-color-disabled-foreground: gray;\n  --ads-color-app: #fff;\n  --ads-color-app-text: #262626;\n  --ads-color-app-navigation: #1e236e;\n  --ads-color-app-navigation-divider: #6e71a2;\n  --ads-color-app-navigation-menu-item-foreground: #fff;\n  --ads-color-app-navigation-menu-item-background: #1e236e;\n  --ads-color-app-navigation-menu-item-foreground_hover: #00d7e7;\n  --ads-color-app-navigation-menu-item-background_hover: #1e236e;\n  --ads-color-app-navigation-menu-item-foreground_focus: #fff;\n  --ads-color-app-navigation-menu-item-background_focus: #fff;\n  --ads-color-app-navigation-menu-item-foreground_selected: #00d7e7;\n  --ads-color-app-navigation-menu-item-background_selected: #1e236e;\n  --ads-color-app-navigation-menu-item-icon-foreground: #fff;\n  --ads-color-app-navigation-menu-item-icon-background: #1e236e;\n  --ads-color-app-navigation-menu-item-icon-foreground_hover: #00d7e7;\n  --ads-color-app-navigation-menu-item-icon-background_hover: #1e236e;\n  --ads-color-app-navigation-menu-item-icon-foreground_focus: #1e236e;\n  --ads-color-app-navigation-menu-item-icon-background_focus: #fff;\n  --ads-color-app-navigation-menu-item-icon-foreground_selected: #00d7e7;\n  --ads-color-app-navigation-menu-item-icon-background_selected: #1e236e;\n  --ads-color-app-navigation-toolbar: #fff;\n  --ads-color-app-navigation-toolbar-divider: #e0e0e0;\n  --ads-color-app-navigation-toolbar-menu-item-foreground: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-background: #fff;\n  --ads-color-app-navigation-toolbar-menu-item-foreground_hover: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-background_hover: #f0f0f0;\n  --ads-color-app-navigation-toolbar-menu-item-foreground_focus: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-background_focus: #fff;\n  --ads-color-app-navigation-toolbar-menu-item-foreground_selected: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-background_selected: #e0e0e0;\n  --ads-color-app-navigation-toolbar-menu-item-icon-foreground: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-icon-background: #fff;\n  --ads-color-app-navigation-toolbar-menu-item-icon-foreground_hover: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-icon-background_hover: #f0f0f0;\n  --ads-color-app-navigation-toolbar-menu-item-icon-foreground_focus: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-icon-background_focus: #fff;\n  --ads-color-app-navigation-toolbar-menu-item-icon-foreground_selected: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-icon-background_selected: #f0f0f0;\n  --ads-color-solid-gradient-primary-to-accent: linear-gradient(90deg, #1e236e 0%, #ff6d6a 100%);\n  --ads-color-solid-gradient-secondary-to-accent: linear-gradient(-170deg, rgba(0, 215, 231, 0) 60%, #00d7e7 125%), linear-gradient(170deg, #ff6d6a 60%, #ff6d6a 125%);\n  --ads-color-solid-gradient-accent-to-secondary-to-primary: linear-gradient(90deg, #ff6d6a 0%, #00d7e7 50%, #1e236e 100%);\n  --ads-color-solid-gradient-gray-to-primary: linear-gradient(90deg, #e0e0e0 0%, #a5a7c5 100%);\n  --ads-color-image-gradient-primary-to-accent: linear-gradient(90deg, rgba(30, 35, 110, 0.7) 0, rgba(255, 109, 106, 0.7) 100%);\n  --ads-color-image-gradient-accent-to-primary: linear-gradient(90deg, rgba(255, 109, 106, 0.7) 0, rgba(30, 35, 110, 0.7) 100%);\n  --ads-color-image-gradient-secondary-to-accent: linear-gradient(90deg, rgba(0, 215, 231, 0.7) 0, rgba(255, 109, 106, 0.7) 100%);\n  --ads-color-image-gradient-accent-to-secondary: linear-gradient(90deg, rgba(255, 109, 106, 0.7) 0, rgba(0, 215, 231, 0.7) 100%);\n  --ads-color-image-gradient-mask: linear-gradient(to bottom, rgba(0,0,0,0) 48%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,1) 100%);\n  --ads-color-image-gradient-darken-bottom: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.4) 100%);\n  --ads-color-app-gradient-secondary-to-accent:\n      linear-gradient(160deg, rgba(255, 109, 106, 0.05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, 0.4) 90%),\n      linear-gradient(220deg, rgba(0, 215, 231, 0.05) 0%, rgba(0, 215, 231, 0) 60%, rgba(0, 215, 231, 0.6) 90%),\n      linear-gradient(var(--ads-color-primary), var(--ads-color-primary));\n  --ads-color-app-gradient-secondary-to-accent-large:\n      linear-gradient(170deg, rgba(255, 109, 106, 0.05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, 0.5) 90%),\n      linear-gradient(210deg, rgba(0, 215, 231, 0.05) 0%, rgba(0, 215, 231, 0) 70%, rgba(0, 215, 231, 0.6) 90%),\n      linear-gradient(var(--ads-color-primary), var(--ads-color-primary));\n  --ads-color-app-gradient-secondary-to-accent-foreground: #fff;\n  --ads-color-app-gradient-primary-to-accent:\n      linear-gradient(200deg, rgba(255, 109, 106, 0.05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, 0.7) 90%),\n      linear-gradient(160deg, rgba(30, 35, 110, 0.05) 0%, rgba(30, 35, 110, 0) 60%, rgba(30, 35, 110, 0.4) 90%),\n      linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));\n  --ads-color-app-gradient-primary-to-accent-large:\n      linear-gradient(190deg, rgba(255, 109, 106, 0.05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, 0.6) 90%),\n      linear-gradient(160deg, rgba(30, 35, 110, 0.05) 0%, rgba(30, 35, 110, 0) 70%, rgba(30, 35, 110, 0.5) 90%),\n      linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));\n  --ads-color-app-gradient-primary-to-accent-foreground: #1e236e;\n  --ads-color-app-gradient-primary-inverted:\n      linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 60%, rgba(255, 109, 106, 0.4) 90%),\n      linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 65%, rgba(0, 215, 231, 0.45) 90%),\n      linear-gradient(var(--ads-color-white), var(--ads-color-white));\n  --ads-color-app-gradient-primary-inverted-large:\n      linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 75%, rgba(255, 109, 106, 0.05) 90%),\n      linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 75%, rgba(0, 215, 231, 0.02) 90%),\n      linear-gradient(var(--ads-color-white), var(--ads-color-white));\n  --ads-color-app-gradient-primary-inverted-foreground: #1e236e;\n  --ads-ring_active: 0 0 0 2px #fff, 0 0 0 5px #1e236e;\n  --ads-ring_focus: 0 0 0 2px #fff, 0 0 0 4px #1e236e;\n  --ads-ring_hover: 0 0 0 2px #fff, 0 0 0 4px #1e236e;\n  --ads-ring_transparent: 0 0 0 2px transparent, 0 0 0 3px transparent;\n  --ads-ring_focus-inset: inset 0 0 0 2px #fff, inset 0 0 0 3px #1e236e;\n  --ads-ring_focus-inset-inverted: inset 0 0 0 2px #1e236e, inset 0 0 0 4px #fff;\n  --ads-ring-focus-with-contextmenu:\n  \t0 0 0 1px #fff, 0 0 0 2px #555cd1,\n  \t0 0.7px 0.7px rgba(0, 0, 0, 0.05),\n  \t0 1.7px 1.7px rgba(0, 0, 0, 0.036),\n  \t0 3.1px 3.1px rgba(0, 0, 0, 0.03),\n  \t0 5.6px 5.6px rgba(0, 0, 0, 0.025),\n  \t0 10.4px 10.4px rgba(0, 0, 0, 0.02),\n  \t0 25px 25px rgba(0, 0, 0, 0.014);\n  --ads-shadow-depth-0: 0 0 0 0 rgba(0, 0, 0, 0);\n  --ads-shadow-depth-1:\n  \t0 0.4px 0.4px rgba(0, 0, 0, 0.05),\n  \t0 1px 1px rgba(0, 0, 0, 0.036),\n  \t0 1.9px 1.9px rgba(0, 0, 0, 0.03),\n  \t0 3.4px 3.4px rgba(0, 0, 0, 0.025),\n  \t0 6.3px 6.3px rgba(0, 0, 0, 0.02),\n  \t0 15px 15px rgba(0, 0, 0, 0.014);\n  --ads-shadow-depth-2:\n  \t0 0.7px 0.7px rgba(0, 0, 0, 0.05),\n  \t0 1.7px 1.7px rgba(0, 0, 0, 0.036),\n  \t0 3.1px 3.1px rgba(0, 0, 0, 0.03),\n  \t0 5.6px 5.6px rgba(0, 0, 0, 0.025),\n  \t0 10.4px 10.4px rgba(0, 0, 0, 0.02),\n  \t0 25px 25px rgba(0, 0, 0, 0.014);\n  --ads-shadow-depth-3:\n  \t0 0.7px 0.7px rgba(0, 0, 0, 0.017),\n  \t0 1.7px 1.7px rgba(0, 0, 0, 0.024),\n  \t0 3.1px 3.1px rgba(0, 0, 0, 0.03),\n  \t0 5.6px 5.6px rgba(0, 0, 0, 0.036),\n  \t0 10.4px 10.4px rgba(0, 0, 0, 0.043),\n  \t0 25px 25px rgba(0, 0, 0, 0.06);\n  --ads-shadow-depth-4:\n  \t0 1px 1px rgba(0, 0, 0, 0.014),\n  \t0 2.3px 2.3px rgba(0, 0, 0, 0.02),\n  \t0 4.4px 4.4px rgba(0, 0, 0, 0.025),\n  \t0 7.8px 7.8px rgba(0, 0, 0, 0.03),\n  \t0 14.6px 14.6px rgba(0, 0, 0, 0.036),\n  \t0 35px 35px rgba(0, 0, 0, 0.05);\n  --ads-shadow-depth-5:\n  \t0 1.2px 1.2px rgba(0, 0, 0, 0.014),\n  \t0 3px 3px rgba(0, 0, 0, 0.02),\n  \t0 5.6px 5.6px rgba(0, 0, 0, 0.025),\n  \t0 10.1px 10.1px rgba(0, 0, 0, 0.03),\n  \t0 18.8px 18.8px rgba(0, 0, 0, 0.036),\n  \t0 45px 45px rgba(0, 0, 0, 0.05);\n  --ads-shadow-depth-6:\n  \t0 0.9px 0.9px rgba(0, 0, 0, 0.011),\n  \t0 1.9px 1.9px rgba(0, 0, 0, 0.016),\n  \t0 3.2px 3.2px rgba(0, 0, 0, 0.019),\n  \t0 4.8px 4.8px rgba(0, 0, 0, 0.022),\n  \t0 6.9px 6.9px rgba(0, 0, 0, 0.025),\n  \t0 9.7px 9.7px rgba(0, 0, 0, 0.028),\n  \t0 13.8px 13.8px rgba(0, 0, 0, 0.031),\n  \t0 20.1px 20.1px rgba(0, 0, 0, 0.034),\n  \t0 30.9px 30.9px rgba(0, 0, 0, 0.039),\n  \t0 55px 55px rgba(0, 0, 0, 0.05);\n}\n\n.ads-home-topics[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-auto-flow: row;\n  grid-template-columns: 1fr;\n}\n@media (min-width: 769px) {\n  .ads-home-topics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 1200px) {\n  .ads-home-topics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: auto;\n  display: flex;\n  height: 20rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  border-radius: 0.25rem;\n  text-decoration: none;\n  outline: 0;\n  outline-offset: 0;\n  transition: box-shadow 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .ads-h5[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin: 0 0 0.5rem 0;\n  font-family: \"Alphabet sans pro light\", sans-serif;\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   ads-icon[_ngcontent-%COMP%] {\n  display: block;\n  height: 8rem;\n  margin: 2rem 0 2rem 0;\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--ads-ring_focus);\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  box-shadow: var(--ads-ring_focus);\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n  border: 1px solid var(--ads-color-primary);\n  background-color: var(--ads-color-primary);\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1)   .ads-h5[_ngcontent-%COMP%] {\n  color: var(--ads-color-secondary);\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n  border: 1px solid var(--ads-color-secondary);\n  background-color: var(--ads-color-secondary);\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2)   .ads-h5[_ngcontent-%COMP%] {\n  color: var(--ads-color-primary);\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: var(--ads-color-accent);\n  border: 1px solid var(--ads-color-accent);\n}\n.ads-home-topics[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3)   .ads-h5[_ngcontent-%COMP%] {\n  color: var(--ads-color-white);\n}"],
    changeDetection: 0
  });
  return ADSAppFeatureHomeHomeComponent;
})();

/***/ })

}]);