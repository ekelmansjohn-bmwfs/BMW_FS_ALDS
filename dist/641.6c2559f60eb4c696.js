"use strict";
(self["webpackChunkalphabet_design_system"] = self["webpackChunkalphabet_design_system"] || []).push([[641],{

/***/ 51641:
/*!****************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-team/src/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureTeamModule": () => (/* reexport safe */ _lib_ads_app_features_feature_information_module__WEBPACK_IMPORTED_MODULE_0__.ADSAppFeatureTeamModule)
/* harmony export */ });
/* harmony import */ var _lib_ads_app_features_feature_information_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ads-app-features-feature-information.module */ 87169);


/***/ }),

/***/ 87169:
/*!**********************************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-team/src/lib/ads-app-features-feature-information.module.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureTeamModule": () => (/* binding */ ADSAppFeatureTeamModule)
/* harmony export */ });
/* harmony import */ var _ads_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ads/ui */ 70191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team/team.component */ 464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);






let ADSAppFeatureTeamModule = /*#__PURE__*/(() => {
  class ADSAppFeatureTeamModule {}
  ADSAppFeatureTeamModule.ɵfac = function ADSAppFeatureTeamModule_Factory(t) {
    return new (t || ADSAppFeatureTeamModule)();
  };
  ADSAppFeatureTeamModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ADSAppFeatureTeamModule
  });
  ADSAppFeatureTeamModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ads_ui__WEBPACK_IMPORTED_MODULE_0__.ADSUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
      path: '',
      component: _team_team_component__WEBPACK_IMPORTED_MODULE_1__.ADSAppFeatureTeamTeamComponent
    }])]
  });
  return ADSAppFeatureTeamModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ADSAppFeatureTeamModule, {
    declarations: [_team_team_component__WEBPACK_IMPORTED_MODULE_1__.ADSAppFeatureTeamTeamComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ads_ui__WEBPACK_IMPORTED_MODULE_0__.ADSUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 464:
/*!**********************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/features/feature-team/src/lib/team/team.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADSAppFeatureTeamTeamComponent": () => (/* binding */ ADSAppFeatureTeamTeamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

let ADSAppFeatureTeamTeamComponent = /*#__PURE__*/(() => {
  class ADSAppFeatureTeamTeamComponent {}
  ADSAppFeatureTeamTeamComponent.ɵfac = function ADSAppFeatureTeamTeamComponent_Factory(t) {
    return new (t || ADSAppFeatureTeamTeamComponent)();
  };
  ADSAppFeatureTeamTeamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ADSAppFeatureTeamTeamComponent,
    selectors: [["ads-app-feature-team-team"]],
    decls: 14,
    vars: 0,
    consts: [[1, "ads-block-web_text-center", "is-indented", "ads-fx-appear", "pb-0"], [1, "ads-block-web_text-center-text"], [1, "ads-h3", "text-color-primary", "mb-0", "font-alphabet-heading-bold"], [1, "is-sub-title", "mt-1"]],
    template: function ADSAppFeatureTeamTeamComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alphabet Design System - Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Welcome to our Alphabet Design System website! We are excited to introduce you to our team, Team Duvel, who has been working diligently on the development and maintenance of the 360 portal of Alphabet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " As you may know, the 360 portal connects all Alphabet apps together and ensures that users have a consistent and seamless experience across all platforms. Our team is dedicated to providing the best user experience possible, which is why we are so heavily invested in this project. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Our goal is to ensure that all Alphabet apps have the same look and feel, making it easier for users to navigate and engage with the applications they need. With our Alphabet Design System, we have created a comprehensive system of components, foundations, and blocks that can be used across various applications within the Alphabet app store. This system ensures consistency and efficiency in developing and maintaining user interfaces, while also providing the flexibility for customization to meet the unique needs of each application. We will be adding a link to our GitHub repository soon, which will allow you to post issues and contribute to the ongoing development of our Alphabet Design System.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " We hope that you will find this resource helpful in your own design and development projects, and we look forward to expanding its usage as much as possible throughout the Alphabet app store. Thank you for visiting our website, and feel free to reach out to us with any questions or feedback. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return ADSAppFeatureTeamTeamComponent;
})();

/***/ })

}]);