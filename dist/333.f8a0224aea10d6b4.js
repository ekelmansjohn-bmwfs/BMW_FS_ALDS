"use strict";
(self["webpackChunkalphabet_design_system"] = self["webpackChunkalphabet_design_system"] || []).push([[333],{

/***/ 57333:
/*!******************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-blocks/src/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureBlocksModule": () => (/* reexport safe */ _lib_ads_app_features_feature_blocks_module__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureBlocksModule)
/* harmony export */ });
/* harmony import */ var _lib_ads_app_features_feature_blocks_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ads-app-features-feature-blocks.module */ 32190);


/***/ }),

/***/ 32190:
/*!*******************************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-blocks/src/lib/ads-app-features-feature-blocks.module.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureBlocksModule": () => (/* binding */ ADSAppFeatureBlocksModule)
/* harmony export */ });
/* harmony import */ var _ads_alphabet_design_system_app_features_feature_shared_app_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ads/alphabet-design-system-app/features/feature-shared-app-components */ 97787);
/* harmony import */ var _ads_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ads/ui */ 70191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _blocks_overview_blocks_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks-overview/blocks-overview.component */ 41237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);







let ADSAppFeatureBlocksModule = /*#__PURE__*/(() => {
  class ADSAppFeatureBlocksModule {}
  ADSAppFeatureBlocksModule.ɵfac = function ADSAppFeatureBlocksModule_Factory(t) {
    return new (t || ADSAppFeatureBlocksModule)();
  };
  ADSAppFeatureBlocksModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ADSAppFeatureBlocksModule
  });
  ADSAppFeatureBlocksModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ads_ui__WEBPACK_IMPORTED_MODULE_1__.ADSUiModule, _ads_alphabet_design_system_app_features_feature_shared_app_components__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureSharedAppComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      redirectTo: 'introduction'
    }, {
      path: 'introduction',
      component: _blocks_overview_blocks_overview_component__WEBPACK_IMPORTED_MODULE_2__.ADSAppFeatureBlocksBlocksOverviewComponent
    }])]
  });
  return ADSAppFeatureBlocksModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ADSAppFeatureBlocksModule, {
    declarations: [_blocks_overview_blocks_overview_component__WEBPACK_IMPORTED_MODULE_2__.ADSAppFeatureBlocksBlocksOverviewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ads_ui__WEBPACK_IMPORTED_MODULE_1__.ADSUiModule, _ads_alphabet_design_system_app_features_feature_shared_app_components__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureSharedAppComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 41237:
/*!**********************************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-blocks/src/lib/blocks-overview/blocks-overview.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureBlocksBlocksOverviewComponent": () => (/* binding */ ADSAppFeatureBlocksBlocksOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _alphabet_design_system_ui_src_lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../alphabet-design-system-ui/src/lib/components/icon/icon.component */ 49299);


let ADSAppFeatureBlocksBlocksOverviewComponent = /*#__PURE__*/(() => {
  class ADSAppFeatureBlocksBlocksOverviewComponent {}
  ADSAppFeatureBlocksBlocksOverviewComponent.ɵfac = function ADSAppFeatureBlocksBlocksOverviewComponent_Factory(t) {
    return new (t || ADSAppFeatureBlocksBlocksOverviewComponent)();
  };
  ADSAppFeatureBlocksBlocksOverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ADSAppFeatureBlocksBlocksOverviewComponent,
    selectors: [["ads-app-feature-blocks-blocks-overview"]],
    decls: 9,
    vars: 0,
    consts: [[1, "ads-block-web_text-center", "is-indented", "ads-fx-appear"], [1, "ads-block-web_text-center-text"], [1, "ads-h3", "text-color-primary", "mb-0"], [1, "is-sub-title", "mt-1", "mb-8"], ["type", "av_custom_layers", "color", "primary", "size", "small", "css", "mr-1"], [1, "text-size-extra-large", "text-color-primary"]],
    template: function ADSAppFeatureBlocksBlocksOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ads-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Alphabet Design System - Blocks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Blocks in an angular design system refer to reusable UI structures that are made up of multiple components and can be used across different pages or sections of a website or application. These blocks can include items such as navigation menus, footers, sidebars, card displays, and more. By grouping these UI structures into blocks, designers and developers can create an organized and standardized system for building and maintaining their application's user interface. Blocks provide a level of consistency and efficiency for development while also allowing for flexibility and customization in the application's design. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_alphabet_design_system_ui_src_lib_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.ADSIconComponent],
    changeDetection: 0
  });
  return ADSAppFeatureBlocksBlocksOverviewComponent;
})();

/***/ })

}]);