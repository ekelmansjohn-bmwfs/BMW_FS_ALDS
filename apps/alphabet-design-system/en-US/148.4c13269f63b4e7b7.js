"use strict";
(self["webpackChunkalphabet_design_system"] = self["webpackChunkalphabet_design_system"] || []).push([[148],{

/***/ 87148:
/*!***********************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-information/src/index.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureInformationModule": () => (/* reexport safe */ _lib_ads_app_features_feature_information_module__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureInformationModule)
/* harmony export */ });
/* harmony import */ var _lib_ads_app_features_feature_information_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ads-app-features-feature-information.module */ 46606);


/***/ }),

/***/ 46606:
/*!*****************************************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-information/src/lib/ads-app-features-feature-information.module.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureInformationModule": () => (/* binding */ ADSAppFeatureInformationModule)
/* harmony export */ });
/* harmony import */ var _ads_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ads/ui */ 70191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information/information.component */ 93653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);






let ADSAppFeatureInformationModule = /*#__PURE__*/(() => {
  class ADSAppFeatureInformationModule {}
  ADSAppFeatureInformationModule.ɵfac = function ADSAppFeatureInformationModule_Factory(t) {
    return new (t || ADSAppFeatureInformationModule)();
  };
  ADSAppFeatureInformationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ADSAppFeatureInformationModule
  });
  ADSAppFeatureInformationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ads_ui__WEBPACK_IMPORTED_MODULE_0__.ADSUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
      path: '',
      component: _information_information_component__WEBPACK_IMPORTED_MODULE_1__.ADSAppFeatureInformationInformationComponent
    }])]
  });
  return ADSAppFeatureInformationModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ADSAppFeatureInformationModule, {
    declarations: [_information_information_component__WEBPACK_IMPORTED_MODULE_1__.ADSAppFeatureInformationInformationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ads_ui__WEBPACK_IMPORTED_MODULE_0__.ADSUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 93653:
/*!*******************************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-information/src/lib/information/information.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureInformationInformationComponent": () => (/* binding */ ADSAppFeatureInformationInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _alphabet_design_system_ui_src_lib_components_markdown_markdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../alphabet-design-system-ui/src/lib/components/markdown/markdown.component */ 46819);


let ADSAppFeatureInformationInformationComponent = /*#__PURE__*/(() => {
  class ADSAppFeatureInformationInformationComponent {}
  ADSAppFeatureInformationInformationComponent.ɵfac = function ADSAppFeatureInformationInformationComponent_Factory(t) {
    return new (t || ADSAppFeatureInformationInformationComponent)();
  };
  ADSAppFeatureInformationInformationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ADSAppFeatureInformationInformationComponent,
    selectors: [["ads-app-feature-home-home"]],
    decls: 79,
    vars: 0,
    consts: [[1, "ads-block-web_text-center", "is-indented", "ads-fx-appear", "pb-0"], [1, "ads-block-web_text-center-text"], [1, "ads-h3", "text-color-primary", "mb-0", "font-alphabet-heading-bold"], [1, "is-sub-title", "mt-1"], [1, "text-size-extra-large", "text-color-primary"], [1, "ads-block-web_text-center", "is-indented", "ads-fx-appear"], [1, "ads-h6", "mb-2", "text-color-primary", "font-alphabet-heading-bold"], [1, "ads-list-information"], ["css", "mb-8", "code", "npm install -g @angular/cli", "language", "javascript"], ["css", "mb-8", "code", "ng new project-name", "language", "javascript"], ["css", "mb-8", "code", "@import '~alphabet-design-system-ui/dist/styles.css';", "language", "css"], ["css", "mb-8", "code", "import { ComponentName } from '@alphabet-design-system-ui'", "language", "javascript"], ["css", "mb-8", "code", "<ads-component></ads-component>", "language", "html"], [1, "ads-block-web_text-center", "mt-8", "is-indented", "ads-fx-appear"], [1, "ads-h5", "mb-0", "text-color-primary", "font-alphabet-heading-bold"], [1, "ads-h5", "mb-2", "text-color-primary", "font-alphabet-heading-bold"]],
    template: function ADSAppFeatureInformationInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Alphabet Design System - Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " To use the Alphabet Design System UI with your Angular application, there are a few prerequisites that must be met. You will need to have Node.js and npm installed, as well as the Angular CLI. Additionally, you should already have an existing Angular project set up on your local machine with minimal version of 15. Once the prerequisites are met, you can follow the installation instructions provided above and begin incorporating the design system's components into your project. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 5)(9, "div", 1)(10, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Prerequisites");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 7)(13, "li")(14, "p")(15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Node.js and npm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " - You will need Node.js (version 10 or later) and npm (version 6 or later), which is a package manager for Node.js. You can download and install both from the official Node.js website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "p")(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Angular CLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u2013 The Angular Command Line Interface (CLI) is a command-line interface tool that helps you create, build, and run Angular applications. You will need to install Angular CLI before setting up your Angular project. You can install it using npm, running the following command: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ads-markdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li")(25, "p")(26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "An existing Angular project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " - You should already have an Angular project created and working on your local machine with minimal version 15. If you need to create a project from scratch, you can use Angular CLI to generate a new project with the following command in your terminal or command prompt: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "ads-markdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "section", 5)(31, "div", 1)(32, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Installation Guidelines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ul", 7)(35, "li")(36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " First, make sure you have an existing Angular project set up on your local machine. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Open your terminal or command prompt and navigate to your Angular project directory. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " After installation, you\u2019ll need to include the design system's CSS file in your project's global styles. Open your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "styles.scss");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "styles.css");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " file and add the following line: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "ads-markdown", 10)(51, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li")(53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " With the design system successfully installed and imported, you can now use its components within your Angular project. Simply import the component you need in your specific module file: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "ads-markdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p")(57, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Note: replace ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "ComponentName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " with the name of the component you want to use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Once imported, you can then include the component in your HTML, like so:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "ads-markdown", 12)(66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p")(68, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Note: Replace ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "ads-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " with the name of the component you want to use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "section", 13)(74, "div", 1)(75, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Your mobility.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Made easy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_alphabet_design_system_ui_src_lib_components_markdown_markdown_component__WEBPACK_IMPORTED_MODULE_0__.ADSMarkdownComponent],
    styles: ["[_ngcontent-%COMP%]:root {\n  --ads-color-white: #fff;\n  --ads-color-white_foreground: #000;\n  --ads-color-gray-6: #f0f0f0;\n  --ads-color-gray-6_foreground: #000;\n  --ads-color-gray-12: #e0e0e0;\n  --ads-color-gray-12_foreground: #000;\n  --ads-color-gray-20: #cccccc;\n  --ads-color-gray-20_foreground: #000;\n  --ads-color-gray-50: gray;\n  --ads-color-gray-50_foreground: #fff;\n  --ads-color-gray-70: #4d4d4d;\n  --ads-color-gray-70_foreground: #fff;\n  --ads-color-gray-85: #262626;\n  --ads-color-gray-85_foreground: #fff;\n  --ads-color-black: #000;\n  --ads-color-black_foreground: #fff;\n  --ads-color-error: #d21e36;\n  --ads-color-error_hover: #a5182b;\n  --ads-color-error-background: #fceaea;\n  --ads-color-info: #1e236e;\n  --ads-color-info-background: var(--ads-color-gray-6);\n  --ads-color-success: #01964c;\n  --ads-color-success_hover: #016332;\n  --ads-color-success-background: #eaf6eb;\n  --ads-color-warning: #ef7d00;\n  --ads-color-warning-background: #fff7ef;\n  --ads-color-notification: #ffd900;\n  --ads-color-notification-background: #fffdf0;\n  --ads-color-primary: #1e236e;\n  --ads-color-primary-40: #a5a7c5;\n  --ads-color-primary-65: #6e71a2;\n  --ads-color-primary-foreground: #fff;\n  --ads-color-primary_active: #0a0c26;\n  --ads-color-primary_active-foreground: #fff;\n  --ads-color-primary_focus: #0f1136;\n  --ads-color-primary_focus-foreground: #fff;\n  --ads-color-primary_hover: #131646;\n  --ads-color-primary_hover-foreground: #fff;\n  --ads-color-secondary: #00d7e7;\n  --ads-color-secondary-40: #9aeff5;\n  --ads-color-secondary-65: #5ae5ef;\n  --ads-color-secondary-foreground: #fff;\n  --ads-color-secondary_active: #00828b;\n  --ads-color-secondary_active-foreground: #fff;\n  --ads-color-secondary_focus: #0095a0;\n  --ads-color-secondary_focus-foreground: #fff;\n  --ads-color-secondary_hover: #00a8b4;\n  --ads-color-secondary_hover-foreground: #fff;\n  --ads-color-accent: #ff6d6a;\n  --ads-color-accent-40: #ffc5c3;\n  --ads-color-accent-65: #ffa19f;\n  --ads-color-accent-foreground: #fff;\n  --ads-color-accent_active: #ff5451;\n  --ads-color-accent_active-foreground: #fff;\n  --ads-color-accent_hover: #ff3b37;\n  --ads-color-accent_hover-foreground: #fff;\n  --ads-color-accent_focus: #ff221e;\n  --ads-color-accent_focus-foreground: #fff;\n  --ads-color-disabled: #e0e0e0;\n  --ads-color-disabled-foreground: gray;\n  --ads-color-app: #fff;\n  --ads-color-app-text: #262626;\n  --ads-color-app-navigation: #1e236e;\n  --ads-color-app-navigation-divider: #6e71a2;\n  --ads-color-app-navigation-menu-item-foreground: #fff;\n  --ads-color-app-navigation-menu-item-background: #1e236e;\n  --ads-color-app-navigation-menu-item-foreground_hover: #00d7e7;\n  --ads-color-app-navigation-menu-item-background_hover: #1e236e;\n  --ads-color-app-navigation-menu-item-foreground_focus: #fff;\n  --ads-color-app-navigation-menu-item-background_focus: #fff;\n  --ads-color-app-navigation-menu-item-foreground_selected: #00d7e7;\n  --ads-color-app-navigation-menu-item-background_selected: #1e236e;\n  --ads-color-app-navigation-menu-item-icon-foreground: #fff;\n  --ads-color-app-navigation-menu-item-icon-background: #1e236e;\n  --ads-color-app-navigation-menu-item-icon-foreground_hover: #00d7e7;\n  --ads-color-app-navigation-menu-item-icon-background_hover: #1e236e;\n  --ads-color-app-navigation-menu-item-icon-foreground_focus: #1e236e;\n  --ads-color-app-navigation-menu-item-icon-background_focus: #fff;\n  --ads-color-app-navigation-menu-item-icon-foreground_selected: #00d7e7;\n  --ads-color-app-navigation-menu-item-icon-background_selected: #1e236e;\n  --ads-color-app-navigation-toolbar: #fff;\n  --ads-color-app-navigation-toolbar-divider: #e0e0e0;\n  --ads-color-app-navigation-toolbar-menu-item-foreground: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-background: #fff;\n  --ads-color-app-navigation-toolbar-menu-item-foreground_hover: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-background_hover: #f0f0f0;\n  --ads-color-app-navigation-toolbar-menu-item-foreground_focus: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-background_focus: #fff;\n  --ads-color-app-navigation-toolbar-menu-item-foreground_selected: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-background_selected: #e0e0e0;\n  --ads-color-app-navigation-toolbar-menu-item-icon-foreground: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-icon-background: #fff;\n  --ads-color-app-navigation-toolbar-menu-item-icon-foreground_hover: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-icon-background_hover: #f0f0f0;\n  --ads-color-app-navigation-toolbar-menu-item-icon-foreground_focus: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-icon-background_focus: #fff;\n  --ads-color-app-navigation-toolbar-menu-item-icon-foreground_selected: #1e236e;\n  --ads-color-app-navigation-toolbar-menu-item-icon-background_selected: #f0f0f0;\n  --ads-color-solid-gradient-primary-to-accent: linear-gradient(90deg, #1e236e 0%, #ff6d6a 100%);\n  --ads-color-solid-gradient-secondary-to-accent: linear-gradient(-170deg, rgba(0, 215, 231, 0) 60%, #00d7e7 125%), linear-gradient(170deg, #ff6d6a 60%, #ff6d6a 125%);\n  --ads-color-solid-gradient-accent-to-secondary-to-primary: linear-gradient(90deg, #ff6d6a 0%, #00d7e7 50%, #1e236e 100%);\n  --ads-color-solid-gradient-gray-to-primary: linear-gradient(90deg, #e0e0e0 0%, #a5a7c5 100%);\n  --ads-color-image-gradient-primary-to-accent: linear-gradient(90deg, rgba(30, 35, 110, 0.7) 0, rgba(255, 109, 106, 0.7) 100%);\n  --ads-color-image-gradient-accent-to-primary: linear-gradient(90deg, rgba(255, 109, 106, 0.7) 0, rgba(30, 35, 110, 0.7) 100%);\n  --ads-color-image-gradient-secondary-to-accent: linear-gradient(90deg, rgba(0, 215, 231, 0.7) 0, rgba(255, 109, 106, 0.7) 100%);\n  --ads-color-image-gradient-accent-to-secondary: linear-gradient(90deg, rgba(255, 109, 106, 0.7) 0, rgba(0, 215, 231, 0.7) 100%);\n  --ads-color-image-gradient-mask: linear-gradient(to bottom, rgba(0,0,0,0) 48%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,1) 100%);\n  --ads-color-image-gradient-darken-bottom: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.4) 100%);\n  --ads-color-app-gradient-secondary-to-accent:\n      linear-gradient(160deg, rgba(255, 109, 106, 0.05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, 0.4) 90%),\n      linear-gradient(220deg, rgba(0, 215, 231, 0.05) 0%, rgba(0, 215, 231, 0) 60%, rgba(0, 215, 231, 0.6) 90%),\n      linear-gradient(var(--ads-color-primary), var(--ads-color-primary));\n  --ads-color-app-gradient-secondary-to-accent-large:\n      linear-gradient(170deg, rgba(255, 109, 106, 0.05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, 0.5) 90%),\n      linear-gradient(210deg, rgba(0, 215, 231, 0.05) 0%, rgba(0, 215, 231, 0) 70%, rgba(0, 215, 231, 0.6) 90%),\n      linear-gradient(var(--ads-color-primary), var(--ads-color-primary));\n  --ads-color-app-gradient-secondary-to-accent-foreground: #fff;\n  --ads-color-app-gradient-primary-to-accent:\n      linear-gradient(200deg, rgba(255, 109, 106, 0.05) 0%, rgba(255, 109, 106, 0) 55%, rgba(255, 109, 106, 0.7) 90%),\n      linear-gradient(160deg, rgba(30, 35, 110, 0.05) 0%, rgba(30, 35, 110, 0) 60%, rgba(30, 35, 110, 0.4) 90%),\n      linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));\n  --ads-color-app-gradient-primary-to-accent-large:\n      linear-gradient(190deg, rgba(255, 109, 106, 0.05) 0%, rgba(255, 109, 106, 0) 65%, rgba(255, 109, 106, 0.6) 90%),\n      linear-gradient(160deg, rgba(30, 35, 110, 0.05) 0%, rgba(30, 35, 110, 0) 70%, rgba(30, 35, 110, 0.5) 90%),\n      linear-gradient(var(--ads-color-secondary), var(--ads-color-secondary-40));\n  --ads-color-app-gradient-primary-to-accent-foreground: #1e236e;\n  --ads-color-app-gradient-primary-inverted:\n      linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 60%, rgba(255, 109, 106, 0.4) 90%),\n      linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 65%, rgba(0, 215, 231, 0.45) 90%),\n      linear-gradient(var(--ads-color-white), var(--ads-color-white));\n  --ads-color-app-gradient-primary-inverted-large:\n      linear-gradient(200deg, rgba(255, 109, 106, 0) 0%, rgba(255, 109, 106, 0) 75%, rgba(255, 109, 106, 0.05) 90%),\n      linear-gradient(160deg, rgba(0, 215, 231, 0) 0%, rgba(0, 215, 231, 0) 75%, rgba(0, 215, 231, 0.02) 90%),\n      linear-gradient(var(--ads-color-white), var(--ads-color-white));\n  --ads-color-app-gradient-primary-inverted-foreground: #1e236e;\n  --ads-ring_active: 0 0 0 2px #fff, 0 0 0 5px #1e236e;\n  --ads-ring_focus: 0 0 0 2px #fff, 0 0 0 4px #1e236e;\n  --ads-ring_hover: 0 0 0 2px #fff, 0 0 0 4px #1e236e;\n  --ads-ring_transparent: 0 0 0 2px transparent, 0 0 0 3px transparent;\n  --ads-ring_focus-inset: inset 0 0 0 2px #fff, inset 0 0 0 3px #1e236e;\n  --ads-ring_focus-inset-inverted: inset 0 0 0 2px #1e236e, inset 0 0 0 4px #fff;\n  --ads-ring-focus-with-contextmenu:\n  \t0 0 0 1px #fff, 0 0 0 2px #555cd1,\n  \t0 0.7px 0.7px rgba(0, 0, 0, 0.05),\n  \t0 1.7px 1.7px rgba(0, 0, 0, 0.036),\n  \t0 3.1px 3.1px rgba(0, 0, 0, 0.03),\n  \t0 5.6px 5.6px rgba(0, 0, 0, 0.025),\n  \t0 10.4px 10.4px rgba(0, 0, 0, 0.02),\n  \t0 25px 25px rgba(0, 0, 0, 0.014);\n  --ads-shadow-depth-0: 0 0 0 0 rgba(0, 0, 0, 0);\n  --ads-shadow-depth-1:\n  \t0 0.4px 0.4px rgba(0, 0, 0, 0.05),\n  \t0 1px 1px rgba(0, 0, 0, 0.036),\n  \t0 1.9px 1.9px rgba(0, 0, 0, 0.03),\n  \t0 3.4px 3.4px rgba(0, 0, 0, 0.025),\n  \t0 6.3px 6.3px rgba(0, 0, 0, 0.02),\n  \t0 15px 15px rgba(0, 0, 0, 0.014);\n  --ads-shadow-depth-2:\n  \t0 0.7px 0.7px rgba(0, 0, 0, 0.05),\n  \t0 1.7px 1.7px rgba(0, 0, 0, 0.036),\n  \t0 3.1px 3.1px rgba(0, 0, 0, 0.03),\n  \t0 5.6px 5.6px rgba(0, 0, 0, 0.025),\n  \t0 10.4px 10.4px rgba(0, 0, 0, 0.02),\n  \t0 25px 25px rgba(0, 0, 0, 0.014);\n  --ads-shadow-depth-3:\n  \t0 0.7px 0.7px rgba(0, 0, 0, 0.017),\n  \t0 1.7px 1.7px rgba(0, 0, 0, 0.024),\n  \t0 3.1px 3.1px rgba(0, 0, 0, 0.03),\n  \t0 5.6px 5.6px rgba(0, 0, 0, 0.036),\n  \t0 10.4px 10.4px rgba(0, 0, 0, 0.043),\n  \t0 25px 25px rgba(0, 0, 0, 0.06);\n  --ads-shadow-depth-4:\n  \t0 1px 1px rgba(0, 0, 0, 0.014),\n  \t0 2.3px 2.3px rgba(0, 0, 0, 0.02),\n  \t0 4.4px 4.4px rgba(0, 0, 0, 0.025),\n  \t0 7.8px 7.8px rgba(0, 0, 0, 0.03),\n  \t0 14.6px 14.6px rgba(0, 0, 0, 0.036),\n  \t0 35px 35px rgba(0, 0, 0, 0.05);\n  --ads-shadow-depth-5:\n  \t0 1.2px 1.2px rgba(0, 0, 0, 0.014),\n  \t0 3px 3px rgba(0, 0, 0, 0.02),\n  \t0 5.6px 5.6px rgba(0, 0, 0, 0.025),\n  \t0 10.1px 10.1px rgba(0, 0, 0, 0.03),\n  \t0 18.8px 18.8px rgba(0, 0, 0, 0.036),\n  \t0 45px 45px rgba(0, 0, 0, 0.05);\n  --ads-shadow-depth-6:\n  \t0 0.9px 0.9px rgba(0, 0, 0, 0.011),\n  \t0 1.9px 1.9px rgba(0, 0, 0, 0.016),\n  \t0 3.2px 3.2px rgba(0, 0, 0, 0.019),\n  \t0 4.8px 4.8px rgba(0, 0, 0, 0.022),\n  \t0 6.9px 6.9px rgba(0, 0, 0, 0.025),\n  \t0 9.7px 9.7px rgba(0, 0, 0, 0.028),\n  \t0 13.8px 13.8px rgba(0, 0, 0, 0.031),\n  \t0 20.1px 20.1px rgba(0, 0, 0, 0.034),\n  \t0 30.9px 30.9px rgba(0, 0, 0, 0.039),\n  \t0 55px 55px rgba(0, 0, 0, 0.05);\n}\n\n.ads-list-information[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n.ads-list-information[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 10px;\n}"],
    changeDetection: 0
  });
  return ADSAppFeatureInformationInformationComponent;
})();

/***/ })

}]);