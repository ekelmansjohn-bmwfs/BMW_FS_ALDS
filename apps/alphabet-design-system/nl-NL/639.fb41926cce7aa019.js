"use strict";
(self["webpackChunkalphabet_design_system"] = self["webpackChunkalphabet_design_system"] || []).push([[639],{

/***/ 53639:
/*!**********************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-contribute/src/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureContributeModule": () => (/* reexport safe */ _lib_ads_app_features_feature_contribute_module__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureContributeModule)
/* harmony export */ });
/* harmony import */ var _lib_ads_app_features_feature_contribute_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ads-app-features-feature-contribute.module */ 12978);


/***/ }),

/***/ 12978:
/*!***************************************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-contribute/src/lib/ads-app-features-feature-contribute.module.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureContributeModule": () => (/* binding */ ADSAppFeatureContributeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contribute/contribute.component */ 84275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);





let ADSAppFeatureContributeModule = /*#__PURE__*/(() => {
  class ADSAppFeatureContributeModule {}
  ADSAppFeatureContributeModule.ɵfac = function ADSAppFeatureContributeModule_Factory(t) {
    return new (t || ADSAppFeatureContributeModule)();
  };
  ADSAppFeatureContributeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ADSAppFeatureContributeModule
  });
  ADSAppFeatureContributeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
      path: '',
      component: _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureContributeContributeComponent
    }])]
  });
  return ADSAppFeatureContributeModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ADSAppFeatureContributeModule, {
    declarations: [_contribute_contribute_component__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureContributeContributeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 84275:
/*!****************************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-contribute/src/lib/contribute/contribute.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureContributeContributeComponent": () => (/* binding */ ADSAppFeatureContributeContributeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

let ADSAppFeatureContributeContributeComponent = /*#__PURE__*/(() => {
  class ADSAppFeatureContributeContributeComponent {}
  ADSAppFeatureContributeContributeComponent.ɵfac = function ADSAppFeatureContributeContributeComponent_Factory(t) {
    return new (t || ADSAppFeatureContributeContributeComponent)();
  };
  ADSAppFeatureContributeContributeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ADSAppFeatureContributeContributeComponent,
    selectors: [["ads-app-feature-contribute-contribute"]],
    decls: 2,
    vars: 0,
    template: function ADSAppFeatureContributeContributeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contribute works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    changeDetection: 0
  });
  return ADSAppFeatureContributeContributeComponent;
})();

/***/ })

}]);