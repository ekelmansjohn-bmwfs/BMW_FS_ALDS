"use strict";
(self["webpackChunkalphabet_design_system"] = self["webpackChunkalphabet_design_system"] || []).push([[618],{

/***/ 90618:
/*!**********************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/shells/shell-alphabet-design-system-app/src/index.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShellADSAppModule": () => (/* reexport safe */ _lib_shell_alphabet_design_system_app_module__WEBPACK_IMPORTED_MODULE_0__.ShellADSAppModule)
/* harmony export */ });
/* harmony import */ var _lib_shell_alphabet_design_system_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shell-alphabet-design-system-app.module */ 79255);


/***/ }),

/***/ 79255:
/*!************************************************************************************************************************************!*\
  !*** ./libs/alphabet-design-system-app/shells/shell-alphabet-design-system-app/src/lib/shell-alphabet-design-system-app.module.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShellADSAppModule": () => (/* binding */ ShellADSAppModule)
/* harmony export */ });
/* harmony import */ var _ads_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ads/ui */ 70191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);





let ShellADSAppModule = /*#__PURE__*/(() => {
  class ShellADSAppModule {}
  ShellADSAppModule.ɵfac = function ShellADSAppModule_Factory(t) {
    return new (t || ShellADSAppModule)();
  };
  ShellADSAppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ShellADSAppModule
  });
  ShellADSAppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ads_ui__WEBPACK_IMPORTED_MODULE_0__.ADSUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
      path: '',
      loadChildren: () => __webpack_require__.e(/*! import() */ 764).then(__webpack_require__.bind(__webpack_require__, /*! @ads/alphabet-design-system-app/features/feature-home */ 65764)).then(m => m.ADSAppFeatureHomeModule),
      data: {
        breadcrumb: "home" /* ADSAppBreadcrumbs.HOME */
      }
    }, {
      path: 'about',
      loadChildren: () => __webpack_require__.e(/*! import() */ 273).then(__webpack_require__.bind(__webpack_require__, /*! @ads/alphabet-design-system-app/features/feature-about */ 74273)).then(m => m.ADSAppFeatureAboutModule),
      data: {
        breadcrumb: "about" /* ADSAppBreadcrumbs.ABOUT */
      }
    }, {
      path: 'blocks',
      loadChildren: () => __webpack_require__.e(/*! import() */ 333).then(__webpack_require__.bind(__webpack_require__, /*! @ads/alphabet-design-system-app/features/feature-blocks */ 57333)).then(m => m.ADSAppFeatureBlocksModule),
      data: {
        breadcrumb: "blocks" /* ADSAppBreadcrumbs.BLOCKS */
      }
    }, {
      path: 'components',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(592), __webpack_require__.e(493)]).then(__webpack_require__.bind(__webpack_require__, /*! @ads/alphabet-design-system-app/features/feature-components */ 6493)).then(m => m.ADSAppFeatureComponentsModule),
      data: {
        breadcrumb: "components" /* ADSAppBreadcrumbs.COMPONENTS */
      }
    }, {
      path: 'contribute',
      loadChildren: () => __webpack_require__.e(/*! import() */ 639).then(__webpack_require__.bind(__webpack_require__, /*! @ads/alphabet-design-system-app/features/feature-contribute */ 53639)).then(m => m.ADSAppFeatureContributeModule),
      data: {
        breadcrumb: "contribute" /* ADSAppBreadcrumbs.CONTRIBUTE */
      }
    }, {
      path: 'foundation',
      loadChildren: () => __webpack_require__.e(/*! import() */ 181).then(__webpack_require__.bind(__webpack_require__, /*! @ads/alphabet-design-system-app/features/feature-foundation */ 57181)).then(m => m.ADSAppFeatureFoundationModule),
      data: {
        breadcrumb: "foundation" /* ADSAppBreadcrumbs.FOUNDATION */
      }
    }, {
      path: 'information',
      loadChildren: () => __webpack_require__.e(/*! import() */ 148).then(__webpack_require__.bind(__webpack_require__, /*! @ads/alphabet-design-system-app/features/feature-information */ 87148)).then(m => m.ADSAppFeatureInformationModule),
      data: {
        breadcrumb: "information" /* ADSAppBreadcrumbs.INFORMATION */
      }
    }, {
      path: 'team',
      loadChildren: () => __webpack_require__.e(/*! import() */ 641).then(__webpack_require__.bind(__webpack_require__, /*! @ads/alphabet-design-system-app/features/feature-team */ 51641)).then(m => m.ADSAppFeatureTeamModule),
      data: {
        breadcrumb: "team" /* ADSAppBreadcrumbs.TEAM */
      }
    }])]
  });
  return ShellADSAppModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShellADSAppModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ads_ui__WEBPACK_IMPORTED_MODULE_0__.ADSUiModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ })

}]);