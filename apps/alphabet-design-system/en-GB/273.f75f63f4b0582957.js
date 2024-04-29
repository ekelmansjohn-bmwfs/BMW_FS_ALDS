"use strict";
(self["webpackChunkalphabet_design_system"] = self["webpackChunkalphabet_design_system"] || []).push([[273],{

/***/ 74273:
/*!*****************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-about/src/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureAboutModule": () => (/* reexport safe */ _lib_ads_app_features_feature_about_module__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureAboutModule)
/* harmony export */ });
/* harmony import */ var _lib_ads_app_features_feature_about_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ads-app-features-feature-about.module */ 63354);


/***/ }),

/***/ 40492:
/*!*************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-about/src/lib/about/about.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureAboutAboutComponent": () => (/* binding */ ADSAppFeatureAboutAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

let ADSAppFeatureAboutAboutComponent = /*#__PURE__*/(() => {
  class ADSAppFeatureAboutAboutComponent {}
  ADSAppFeatureAboutAboutComponent.ɵfac = function ADSAppFeatureAboutAboutComponent_Factory(t) {
    return new (t || ADSAppFeatureAboutAboutComponent)();
  };
  ADSAppFeatureAboutAboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ADSAppFeatureAboutAboutComponent,
    selectors: [["ads-app-feature-about-about"]],
    decls: 2,
    vars: 0,
    template: function ADSAppFeatureAboutAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    changeDetection: 0
  });
  return ADSAppFeatureAboutAboutComponent;
})();

/***/ }),

/***/ 63354:
/*!*****************************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-about/src/lib/ads-app-features-feature-about.module.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureAboutModule": () => (/* binding */ ADSAppFeatureAboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 40492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);





let ADSAppFeatureAboutModule = /*#__PURE__*/(() => {
  class ADSAppFeatureAboutModule {}
  ADSAppFeatureAboutModule.ɵfac = function ADSAppFeatureAboutModule_Factory(t) {
    return new (t || ADSAppFeatureAboutModule)();
  };
  ADSAppFeatureAboutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ADSAppFeatureAboutModule
  });
  ADSAppFeatureAboutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
      path: '',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureAboutAboutComponent
    }])]
  });
  return ADSAppFeatureAboutModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ADSAppFeatureAboutModule, {
    declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureAboutAboutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ })

}]);