(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_company_page_company_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/company-page/company-page.component */ "./src/app/components/company-page/company-page.component.ts");





var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: ':company', component: _components_company_page_company_page_component__WEBPACK_IMPORTED_MODULE_4__["CompanyPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loadRouter\" class=\"spinner-container\">\n  <mat-spinner></mat-spinner>\n</div>\n<div class='background-image'>\n  <img [src]=\"backgroundImageUrl\" />\n</div>\n<div class=\"curtain-container\" *ngIf=\"loadRouter\">\n  <div class=\"background-curtain\">\n    <search [companies]=\"companies\" (blur)=\"onSearchFocus($event)\"></search>\n    <router-outlet *ngIf=\"!searchFocus\"></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-container {\n  margin-top: 200px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed; }\n\n.background-curtain {\n  background-color: rgba(0, 0, 0, 0.65);\n  max-width: 1000px;\n  min-width: 260px;\n  width: 1000px;\n  margin: 0 150px;\n  box-shadow: 0 0 5px 12px rgba(0, 0, 0, 0.55); }\n\n@media only screen and (max-width: 600px) {\n    .background-curtain {\n      padding: 0;\n      margin: 0; } }\n\n.curtain-container {\n  display: flex;\n  justify-content: center;\n  min-height: 100%; }\n\n.background-image {\n  z-index: -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  position: fixed;\n  height: 100%;\n  width: 100%; }\n\n.background-image img {\n  flex-shrink: 0;\n  min-width: 100%;\n  min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBR2YsNENBQXlDLEVBQUE7O0FBQ3pDO0lBVEY7TUFVSSxVQUFVO01BQ1YsU0FBUyxFQUFBLEVBRVo7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYmFja2dyb3VuZC1jdXJ0YWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1pbi13aWR0aDogMjYwcHg7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCAxNTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDEycHggcmdiYSgwLDAsMCwwLjU1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgNXB4IDEycHggcmdiYSgwLDAsMCwwLjU1KTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAxMnB4IHJnYmEoMCwwLDAsMC41NSk7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uY3VydGFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2UgaW1nIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/companies/companies.service */ "./src/app/services/companies/companies.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(companiesService) {
        this.companiesService = companiesService;
        this.companies = [];
        this.title = 'angular-material-app';
        this.backgroundImages = [
            'https://images.creativemarket.com/0.1.0/ps/3566952/910/607/m1/fpnw/wm0/prev-.jpg?1510556190&s=e0453f06a742b7bf026090fa70e83e97',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZJacPBk-03LqiNpmyXiF4j1pboNG4RppyKw&usqp=CAU',
            'https://thumbs.dreamstime.com/b/black-white-colorful-memphis-abstract-geometric-shapes-seamless-pattern-vector-background-92889814.jpg',
            'https://ourtime.org.uk/wp-content/uploads/2018/08/pattern-5.png',
            'https://www.miltonandking.com/eu/wp-content/uploads/sites/3/2019/12/Wallpaper-Geaorgia-McMillian-DibbaDots-1.jpg',
            'https://previews.123rf.com/images/mikabesfamilnaya/mikabesfamilnaya1711/mikabesfamilnaya171100540/90617319-background-hand-drawn-lines-hair-texture-monochrome-wave-pattern-doodle-for-design-line-art-illustra.jpg',
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backgroundImageUrl = this.backgroundImages[Math.floor(Math.random() * this.backgroundImages.length)];
        this.companiesService.companies.subscribe(function (companies) {
            if (companies.length) {
                _this.companies = companies;
                _this.loadRouter = true;
            }
        });
    };
    AppComponent.prototype.onSearchFocus = function (state) {
        var _this = this;
        setTimeout(function () { return _this.searchFocus = state; }, 100);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_2__["CompaniesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.module */ "./src/app/components/home/home.module.ts");
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/search.module */ "./src/app/components/search/search.module.ts");
/* harmony import */ var _components_company_page_company_page_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/company-page/company-page.module */ "./src/app/components/company-page/company-page.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _components_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                _components_search_search_module__WEBPACK_IMPORTED_MODULE_8__["SearchModule"],
                _components_company_page_company_page_module__WEBPACK_IMPORTED_MODULE_9__["CompanyPageModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/back-button/back-button.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/back-button/back-button.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-container\" [class.mobileBackFinalPosition]=\"show\"\n  [class.hideDesktopBack]=\"!show\">\n  <button mat-button (click)=\"clicked.emit()\">\n    <mat-icon>arrow_back</mat-icon>\n    <span class=\"back-text\">\n      Back\n    </span>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/components/common/back-button/back-button.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/back-button/back-button.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 3;\n  position: fixed;\n  left: 0;\n  top: 0; }\n  @media only screen and (max-width: 600px) {\n    :host {\n      z-index: 1;\n      left: 15px; } }\n  button {\n  color: white;\n  padding: 2px 17px 2px 14px;\n  border-color: white;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 20px; }\n  @media only screen and (max-width: 600px) {\n    button {\n      padding: 0;\n      min-width: unset;\n      border-color: unset;\n      border-width: unset;\n      border-style: unset;\n      border-radius: unset; }\n      button mat-icon {\n        color: white;\n        line-height: 36px;\n        height: 36px;\n        width: 36px;\n        border-radius: 50%;\n        border-color: white;\n        border-width: 2px;\n        border-style: solid;\n        background-color: #1b1b1b; }\n      button .back-text {\n        display: none; } }\n  .button-container {\n  margin: 18px; }\n  @media only screen and (max-width: 600px) {\n    .button-container {\n      margin: 16px 0 0 6px;\n      transition: margin 1s ease-out; } }\n  @media only screen and (max-width: 600px) {\n  .mobileBackFinalPosition {\n    margin: 60px 0 0 6px; } }\n  @media only screen and (min-width: 600px) {\n  .hideDesktopBack {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2JhY2stYnV0dG9uL2JhY2stYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTSxFQUFBO0VBQ047SUFMRjtNQU1JLFVBQVU7TUFDVixVQUFVLEVBQUEsRUFFYjtFQUVEO0VBQ0UsWUFmbUI7RUFnQm5CLDBCQUEwQjtFQUMxQixtQkFqQm1CO0VBa0JuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0VBQ25CO0lBUEY7TUFRSSxVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLG9CQUFvQixFQUFBO01BYnhCO1FBZ0JNLFlBOUJlO1FBK0JmLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixtQkFuQ2U7UUFvQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQix5QkFyQ21CLEVBQUE7TUFhekI7UUE0Qk0sYUFBYSxFQUFBLEVBQ2Q7RUFJTDtFQUNFLFlBQVksRUFBQTtFQUNaO0lBRkY7TUFHSSxvQkFBb0I7TUFJcEIsOEJBQThCLEVBQUEsRUFFakM7RUFHQztFQURGO0lBRUksb0JBQW9CLEVBQUEsRUFFdkI7RUFHQztFQURGO0lBRUksYUFBYSxFQUFBLEVBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vYmFjay1idXR0b24vYmFjay1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlLWJyZWFrLXBvaW50OiA2MDBweDtcbiRwcmltYXJ5LWNvbG9yOiB3aGl0ZTtcbiRzZWNvbmRhcnktY29sb3I6ICMxYjFiMWI7XG5cbjpob3N0IHtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZS1icmVhay1wb2ludCkge1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMTVweDtcbiAgfVxufVxuXG5idXR0b24ge1xuICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIHBhZGRpbmc6IDJweCAxN3B4IDJweCAxNHB4O1xuICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrLXBvaW50KSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgIGJvcmRlci1jb2xvcjogdW5zZXQ7XG4gICAgYm9yZGVyLXdpZHRoOiB1bnNldDtcbiAgICBib3JkZXItc3R5bGU6IHVuc2V0O1xuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuXG4gICAgbWF0LWljb24ge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIH1cblxuICAgIC5iYWNrLXRleHQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBtYXJnaW46IDE4cHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZS1icmVhay1wb2ludCkge1xuICAgIG1hcmdpbjogMTZweCAwIDAgNnB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIDFzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIDFzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbiAxcyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMXMgZWFzZS1vdXQ7XG4gIH1cbn1cblxuLm1vYmlsZUJhY2tGaW5hbFBvc2l0aW9uIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrLXBvaW50KSB7XG4gICAgbWFyZ2luOiA2MHB4IDAgMCA2cHg7XG4gIH1cbn1cblxuLmhpZGVEZXNrdG9wQmFjayB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1vYmlsZS1icmVhay1wb2ludCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/common/back-button/back-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/common/back-button/back-button.component.ts ***!
  \************************************************************************/
/*! exports provided: BackButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonComponent", function() { return BackButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackButtonComponent = /** @class */ (function () {
    function BackButtonComponent() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isTrue = false;
    }
    BackButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BackButtonComponent.prototype, "show", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BackButtonComponent.prototype, "clicked", void 0);
    BackButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'back-button',
            template: __webpack_require__(/*! ./back-button.component.html */ "./src/app/components/common/back-button/back-button.component.html"),
            styles: [__webpack_require__(/*! ./back-button.component.scss */ "./src/app/components/common/back-button/back-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackButtonComponent);
    return BackButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/common/back-button/back-button.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/common/back-button/back-button.module.ts ***!
  \*********************************************************************/
/*! exports provided: BackButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonModule", function() { return BackButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _back_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./back-button.component */ "./src/app/components/common/back-button/back-button.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");






var BackButtonModule = /** @class */ (function () {
    function BackButtonModule() {
    }
    BackButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_back_button_component__WEBPACK_IMPORTED_MODULE_4__["BackButtonComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            ],
            exports: [_back_button_component__WEBPACK_IMPORTED_MODULE_4__["BackButtonComponent"]],
        })
    ], BackButtonModule);
    return BackButtonModule;
}());



/***/ }),

/***/ "./src/app/components/company-page/company-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/company-page/company-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <ng-container *ngIf=\"company\">\n    <div class=\"image-container\">\n      <img\n        [src]=\"company.img || 'https://i.pinimg.com/originals/82/1a/a8/821aa80c546ac7d554e4ac0de0e95cb8.jpg'\">\n    </div>\n    <div class='image-overlay-container'>\n      <h1>{{company.name}}</h1>\n      <mat-chip-list class=\"chip-list\">\n        <mat-chip *ngFor=\"let tag of company.tags\" color=\"primary\" selected\n          (click)=\"hashtagClicked(tag)\" class=\"chip\">{{tag.name}}\n        </mat-chip>\n      </mat-chip-list>\n    </div>\n    <div class=\"profile-info\">\n      <a *ngIf=\"company.websiteUrl && company.websiteDisplay\"\n        [href]=\"company.websiteUrl\" target=\"_blank\">\n        <div class=\"website-url\">\n          <mat-icon>language</mat-icon>\n          {{company.websiteDisplay}}\n        </div>\n      </a>\n      <a href=\"https://www.instagram.com/{{company.instagram}}\" target=\"_blank\">\n        <div *ngIf=\"company.instagram\" class=\"instagram\">\n          <i class=\"fa fa-instagram\" style=\"font-size:24px\"></i>\n          {{company.instagram}}\n        </div>\n      </a>\n      <p [innerHTML]=\"company.about || ''\">\n      </p>\n    </div>\n  </ng-container>\n\n  <company-not-found *ngIf=\"!company && companyParam\"\n    [companyName]=\"companyParam\">\n  </company-not-found>\n</div>"

/***/ }),

/***/ "./src/app/components/company-page/company-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/company-page/company-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  height: 100%;\n  background-color: white; }\n\np {\n  margin: 20px 50px;\n  text-align: center; }\n\n@media only screen and (max-width: 600px) {\n    p {\n      margin: 20px; } }\n\nmat-card {\n  padding: 50px !important;\n  max-width: 100%;\n  margin: 0 100px; }\n\nh1 {\n  color: white;\n  background-color: #1b1b1b;\n  text-align: center;\n  font-size: 50px;\n  border-radius: 60px;\n  padding: 25px;\n  border-color: black;\n  border-width: 2px !important;\n  border: solid;\n  margin: 110px 25px 15px; }\n\n@media only screen and (max-width: 600px) {\n    h1 {\n      font-size: 30px;\n      padding: 15px; } }\n\n@media only screen and (max-width: 900px) {\n    h1 {\n      font-size: 30px; } }\n\nmat-chip-list mat-chip {\n  border-width: 1.5px !important;\n  padding: 15px;\n  min-height: 40px;\n  border-radius: 20px; }\n\ni,\nmat-icon {\n  margin: 5px; }\n\n.image-overlay-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: -330px 0 0;\n  min-height: 330px;\n  width: 100%;\n  position: relative; }\n\n@media only screen and (max-width: 600px) {\n    .image-overlay-container {\n      margin-top: -330px; } }\n\n.chip-list mat-chip {\n  background-color: #1b1b1b !important; }\n\n.instagram,\n.website-url {\n  text-align: center;\n  margin: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.3s ease-out; }\n\n.image-container {\n  position: relative;\n  height: 350px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n\n.image-container img {\n    min-width: 100%; }\n\n@media only screen and (max-width: 600px) {\n      .image-container img {\n        min-height: 100%; } }\n\n.image-container:after {\n  content: '\\A';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  opacity: 1; }\n\n.img-cover {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n  margin-top: -350px; }\n\n.chip {\n  display: inline-flex; }\n\n.profile-info {\n  padding: 20px;\n  align-items: center;\n  font-size: 20px; }\n\n@media only screen and (max-width: 600px) {\n    .profile-info {\n      font-size: 15px; } }\n\n.info {\n  margin-left: 50px;\n  width: 100%; }\n\n.mat-card-content {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1wYWdlL2NvbXBhbnktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFlBQVk7RUFDWix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBQ2xCO0lBSEY7TUFJSSxZQUFZLEVBQUEsRUFFZjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBdkJtQjtFQXdCbkIseUJBdkJ1QjtFQXdCdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUN2QjtJQVhGO01BWUksZUFBZTtNQUNmLGFBQWEsRUFBQSxFQUtoQjs7QUFIQztJQWZGO01BZ0JJLGVBQWUsRUFBQSxFQUVsQjs7QUFFRDtFQUVJLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUl2Qjs7RUFFRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBNEM7RUFDNUMsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFDbEI7SUFSRjtNQVNJLGtCQUE0QyxFQUFBLEVBRS9DOztBQUVEO0VBRUksb0NBQTZDLEVBQUE7O0FBSWpEOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBSXZCLCtCQUErQixFQUFBOztBQUdqQztFQUNFLGtCQUFrQjtFQUNsQixhQTlGa0I7RUErRmxCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQU5sQjtJQVNJLGVBQWUsRUFBQTs7QUFDZjtNQVZKO1FBV00sZ0JBQWdCLEVBQUEsRUFFbkI7O0FBR0g7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCw4QkFBMkI7RUFDM0IsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGtCQTVIa0IsRUFBQTs7QUErSHBCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBQ2Y7SUFKRjtNQUtJLGVBQWUsRUFBQSxFQUVsQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1wYWdlL2NvbXBhbnktcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgMjM0LCAyMzQsIDAuOSk7XG4kaW1hZ2UtaGVpZ2h0OiAzNTBweDtcbiRvdmVybGF5LW1hcmdpbjogMjBweDtcbiRtb2JpbGUtYnJlYWstcG9pbnQ6IDYwMHB4O1xuJHByaW1hcnktY29sb3I6IHdoaXRlO1xuJHNlY29uZGFyeS1jb2xvcjogIzFiMWIxYjtcblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxucCB7XG4gIG1hcmdpbjogMjBweCA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZS1icmVhay1wb2ludCkge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxufVxuXG5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDUwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMTAwcHg7XG59XG5cbmgxIHtcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAycHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgbWFyZ2luOiAxMTBweCAyNXB4IDE1cHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZS1icmVhay1wb2ludCkge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cblxubWF0LWNoaXAtbGlzdCB7XG4gIG1hdC1jaGlwIHtcbiAgICBib3JkZXItd2lkdGg6IDEuNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbn1cblxuaSxcbm1hdC1pY29uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5pbWFnZS1vdmVybGF5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogLSRpbWFnZS1oZWlnaHQgKyAkb3ZlcmxheS1tYXJnaW4gMCAwO1xuICBtaW4taGVpZ2h0OiAzMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrLXBvaW50KSB7XG4gICAgbWFyZ2luLXRvcDogLSRpbWFnZS1oZWlnaHQgKyAkb3ZlcmxheS1tYXJnaW47XG4gIH1cbn1cblxuLmNoaXAtbGlzdCB7XG4gIG1hdC1jaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmluc3RhZ3JhbSxcbi53ZWJzaXRlLXVybCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogJGltYWdlLWhlaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgaW1nIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrLXBvaW50KSB7XG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG4uaW1hZ2UtY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogJ1xcQSc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pbWctY292ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIG1hcmdpbi10b3A6IC0kaW1hZ2UtaGVpZ2h0O1xufVxuXG4uY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ucHJvZmlsZS1pbmZvIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUtYnJlYWstcG9pbnQpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cblxuLmluZm8ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/company-page/company-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/company-page/company-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompanyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPageComponent", function() { return CompanyPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/companies/companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/search/search.service */ "./src/app/services/search/search.service.ts");





var CompanyPageComponent = /** @class */ (function () {
    function CompanyPageComponent(route, companiesService, searchService) {
        this.route = route;
        this.companiesService = companiesService;
        this.searchService = searchService;
    }
    CompanyPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.isNotHomePage();
        this.companiesService.companies.subscribe(function (companies) {
            _this.companies = companies;
            _this.getParam();
        });
    };
    CompanyPageComponent.prototype.hashtagClicked = function (tag) {
        this.searchService.addTag(tag);
    };
    CompanyPageComponent.prototype.buildCompany = function () {
        var _this = this;
        this.company = this.companies.find(function (company) {
            return company.name == _this.companyParam;
        });
    };
    CompanyPageComponent.prototype.getParam = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.companyParam = params['company'];
            _this.buildCompany();
        });
    };
    CompanyPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'company-page',
            template: __webpack_require__(/*! ./company-page.component.html */ "./src/app/components/company-page/company-page.component.html"),
            styles: [__webpack_require__(/*! ./company-page.component.scss */ "./src/app/components/company-page/company-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"],
            src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], CompanyPageComponent);
    return CompanyPageComponent;
}());



/***/ }),

/***/ "./src/app/components/company-page/company-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/company-page/company-page.module.ts ***!
  \****************************************************************/
/*! exports provided: CompanyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPageModule", function() { return CompanyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _company_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-page.component */ "./src/app/components/company-page/company-page.component.ts");
/* harmony import */ var _common_back_button_back_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/back-button/back-button.module */ "./src/app/components/common/back-button/back-button.module.ts");
/* harmony import */ var _presentationals_company_not_found_company_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presentationals/company-not-found/company-not-found.module */ "./src/app/components/company-page/presentationals/company-not-found/company-not-found.module.ts");










var CompanyPageModule = /** @class */ (function () {
    function CompanyPageModule() {
    }
    CompanyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_company_page_component__WEBPACK_IMPORTED_MODULE_7__["CompanyPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _presentationals_company_not_found_company_not_found_module__WEBPACK_IMPORTED_MODULE_9__["CompanyNotFoundModule"],
                _common_back_button_back_button_module__WEBPACK_IMPORTED_MODULE_8__["BackButtonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            ],
            exports: [_company_page_component__WEBPACK_IMPORTED_MODULE_7__["CompanyPageComponent"]],
        })
    ], CompanyPageModule);
    return CompanyPageModule;
}());



/***/ }),

/***/ "./src/app/components/company-page/presentationals/company-not-found/company-not-found.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/company-page/presentationals/company-not-found/company-not-found.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-icon-container\">\n  <mat-icon (click)=\"onClick()\">home</mat-icon>\n  <div class=\"message\">\n    <div>Could not find</div>\n    <div class=\"company-name\">{{companyName}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/company-page/presentationals/company-not-found/company-not-found.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/company-page/presentationals/company-not-found/company-not-found.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  width: 90px;\n  height: 90px;\n  font-size: 90px;\n  border-radius: 50%;\n  padding: 10px;\n  color: white;\n  background-color: #1b1b1b;\n  transition: all 1s ease-out;\n  cursor: pointer; }\n\nmat-icon:hover {\n  color: #1b1b1b;\n  background-color: white;\n  transition: all 0.5s ease-in; }\n\n.mat-icon-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 60%; }\n\n.company-name {\n  font-size: 20px;\n  font-weight: 800;\n  margin-left: 5px; }\n\n.message {\n  display: flex;\n  align-items: flex-end;\n  margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1wYWdlL3ByZXNlbnRhdGlvbmFscy9jb21wYW55LW5vdC1mb3VuZC9jb21wYW55LW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFUbUI7RUFVbkIseUJBVHVCO0VBYXZCLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FsQnVCO0VBbUJ2Qix1QkFwQm1CO0VBd0JuQiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhbnktcGFnZS9wcmVzZW50YXRpb25hbHMvY29tcGFueS1ub3QtZm91bmQvY29tcGFueS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogd2hpdGU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMWIxYjFiO1xuXG5tYXQtaWNvbiB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGZvbnQtc2l6ZTogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWF0LWljb246aG92ZXIge1xuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xufVxuXG4ubWF0LWljb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLmNvbXBhbnktbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbjogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/company-page/presentationals/company-not-found/company-not-found.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/company-page/presentationals/company-not-found/company-not-found.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CompanyNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyNotFoundComponent", function() { return CompanyNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CompanyNotFoundComponent = /** @class */ (function () {
    function CompanyNotFoundComponent(router) {
        this.router = router;
    }
    CompanyNotFoundComponent.prototype.onClick = function () {
        this.router.navigateByUrl('/');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CompanyNotFoundComponent.prototype, "companyName", void 0);
    CompanyNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'company-not-found',
            template: __webpack_require__(/*! ./company-not-found.component.html */ "./src/app/components/company-page/presentationals/company-not-found/company-not-found.component.html"),
            styles: [__webpack_require__(/*! ./company-not-found.component.scss */ "./src/app/components/company-page/presentationals/company-not-found/company-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CompanyNotFoundComponent);
    return CompanyNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/company-page/presentationals/company-not-found/company-not-found.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/company-page/presentationals/company-not-found/company-not-found.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CompanyNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyNotFoundModule", function() { return CompanyNotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _company_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-not-found.component */ "./src/app/components/company-page/presentationals/company-not-found/company-not-found.component.ts");





var CompanyNotFoundModule = /** @class */ (function () {
    function CompanyNotFoundModule() {
    }
    CompanyNotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_company_not_found_component__WEBPACK_IMPORTED_MODULE_4__["CompanyNotFoundComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            ],
            exports: [_company_not_found_component__WEBPACK_IMPORTED_MODULE_4__["CompanyNotFoundComponent"]],
        })
    ], CompanyNotFoundModule);
    return CompanyNotFoundModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/components/search/presentationals/line-item/line-item.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/line-item/line-item.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"onCardClick()\" class=\"mobile-card\">\n  <div class=\"image-container mat-card-child\">\n    <img\n      [src]=\"config.img || 'https://i.pinimg.com/originals/82/1a/a8/821aa80c546ac7d554e4ac0de0e95cb8.jpg'\">\n  </div>\n  <div class=\"info mat-card-child\">\n    <h2>{{config.name}}</h2>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let tag of config.tags\" color=\"primary\"\n        (click)=\"hashtagClicked(tag)\">{{tag.name}}\n      </mat-chip>\n    </mat-chip-list>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/search/presentationals/line-item/line-item.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/line-item/line-item.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 0 auto 10px !important; }\n\nh2 {\n  margin: 0 0 10px; }\n\n@media only screen and (max-width: 900px) {\n    h2 {\n      text-align: center; } }\n\nh4 {\n  border-radius: 20%;\n  border: 1px;\n  display: inline-flex; }\n\nmat-chip {\n  font-size: 12px;\n  padding: 5px 7px; }\n\nmat-card {\n  display: flex;\n  flex-direction: row;\n  padding: 20px !important;\n  margin: 50px 20px;\n  cursor: pointer; }\n\n@media only screen and (max-width: 900px) {\n    mat-card {\n      padding: 0 0 10px !important;\n      flex-direction: column;\n      margin: 50px 20px;\n      border-radius: 2%; } }\n\n.mat-card-child {\n  flex-basis: 50%; }\n\n@media only screen and (max-width: 900px) {\n    .mat-card-child {\n      flex-basis: unset; } }\n\n:host ::ng-deep .mat-chip-list-wrapper {\n  display: flex;\n  justify-content: left;\n  align-items: center; }\n\n@media only screen and (max-width: 900px) {\n    :host ::ng-deep .mat-chip-list-wrapper {\n      margin: 10px;\n      justify-content: center; } }\n\n.image-container {\n  min-width: 80px;\n  border-radius: 4px;\n  height: 160px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n\n@media only screen and (max-width: 900px) {\n    .image-container {\n      border-top-left-radius: 2%;\n      border-top-right-radius: 2%;\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0; } }\n\nimg {\n  flex-shrink: 0;\n  height: 100%;\n  min-width: 100%; }\n\n@media only screen and (max-width: 900px) {\n    img {\n      width: 100%;\n      height: auto; } }\n\n.inline {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 20%; }\n\n.info {\n  margin: 10px 0 10px 10px; }\n\n@media only screen and (max-width: 900px) {\n    .info {\n      margin: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3ByZXNlbnRhdGlvbmFscy9saW5lLWl0ZW0vbGluZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBQ2hCO0lBRkY7TUFHSSxrQkFBa0IsRUFBQSxFQUVyQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBQ2Y7SUFORjtNQU9JLDRCQUE0QjtNQUM1QixzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLGlCQWxDbUIsRUFBQSxFQW9DdEI7O0FBRUQ7RUFDRSxlQUFlLEVBQUE7O0FBQ2Y7SUFGRjtNQUdJLGlCQUFpQixFQUFBLEVBRXBCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFDbkI7SUFKRjtNQUtJLFlBQVk7TUFDWix1QkFBdUIsRUFBQSxFQUUxQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUNoQjtJQVJGO01BU0ksMEJBaEVtQjtNQWlFbkIsMkJBakVtQjtNQWtFbkIsNkJBQTZCO01BQzdCLDRCQUE0QixFQUFBLEVBRS9COztBQUVEO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBQ2Y7SUFKRjtNQUtJLFdBQVc7TUFDWCxZQUFZLEVBQUEsRUFFZjs7QUFFRDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSx3QkFBd0IsRUFBQTs7QUFDeEI7SUFGRjtNQUdJLFlBQVksRUFBQSxFQUVmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvcHJlc2VudGF0aW9uYWxzL2xpbmUtaXRlbS9saW5lLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbW9iaWxlLWJyZWFrLXBvaW50OiA5MDBweDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDIlO1xuXG5oMSB7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHggIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUtYnJlYWstcG9pbnQpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuaDQge1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIGJvcmRlcjogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxubWF0LWNoaXAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDUwcHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUtYnJlYWstcG9pbnQpIHtcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiA1MHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcbiAgfVxufVxuXG4ubWF0LWNhcmQtY2hpbGQge1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZS1icmVhay1wb2ludCkge1xuICAgIGZsZXgtYmFzaXM6IHVuc2V0O1xuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWNoaXAtbGlzdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUtYnJlYWstcG9pbnQpIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrLXBvaW50KSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG59XG5cbmltZyB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrLXBvaW50KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbi5pbmxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAlO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrLXBvaW50KSB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/search/presentationals/line-item/line-item.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/line-item/line-item.component.ts ***!
  \************************************************************************************/
/*! exports provided: LineItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineItemComponent", function() { return LineItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LineItemComponent = /** @class */ (function () {
    function LineItemComponent() {
        this.tagClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LineItemComponent.prototype.hashtagClicked = function (tag) {
        this.tagClicked.emit(tag);
    };
    LineItemComponent.prototype.onCardClick = function () {
        this.itemSelected.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LineItemComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LineItemComponent.prototype, "searchValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LineItemComponent.prototype, "tagClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LineItemComponent.prototype, "itemSelected", void 0);
    LineItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'line-item',
            template: __webpack_require__(/*! ./line-item.component.html */ "./src/app/components/search/presentationals/line-item/line-item.component.html"),
            styles: [__webpack_require__(/*! ./line-item.component.scss */ "./src/app/components/search/presentationals/line-item/line-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LineItemComponent);
    return LineItemComponent;
}());



/***/ }),

/***/ "./src/app/components/search/presentationals/line-item/line-item.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/search/presentationals/line-item/line-item.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LineItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineItemModule", function() { return LineItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _line_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line-item.component */ "./src/app/components/search/presentationals/line-item/line-item.component.ts");







var LineItemModule = /** @class */ (function () {
    function LineItemModule() {
    }
    LineItemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_line_item_component__WEBPACK_IMPORTED_MODULE_6__["LineItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            ],
            exports: [_line_item_component__WEBPACK_IMPORTED_MODULE_6__["LineItemComponent"]],
        })
    ], LineItemModule);
    return LineItemModule;
}());



/***/ }),

/***/ "./src/app/components/search/presentationals/mobile-search/mobile-search.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/mobile-search/mobile-search.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <input [formControl]=\"control\" type=\"text\" [placeholder]=\"placeHolder\">\n  <div class=\"search\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/search/presentationals/mobile-search/mobile-search.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/mobile-search/mobile-search.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n:host {\n  width: 100%; }\n\n.container {\n  position: absolute;\n  margin: -40px 15px 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 50; }\n\n.container .search {\n    position: absolute;\n    margin: 6px 6px 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n    background: #1b1b1b;\n    border-radius: 50%;\n    border-color: white;\n    border-width: 2px;\n    border-style: solid;\n    transition: all 1s;\n    z-index: 4;\n    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4); }\n\n.container .search:hover {\n      cursor: pointer; }\n\n.container .search::before {\n      content: \"\";\n      position: absolute;\n      margin: auto;\n      top: 12px;\n      right: 0;\n      bottom: 0;\n      left: 12px;\n      width: 12px;\n      height: 2px;\n      background: white;\n      transform: rotate(45deg);\n      transition: all 0.5s; }\n\n.container .search::after {\n      content: \"\";\n      position: absolute;\n      margin: auto;\n      top: -5px;\n      right: 0;\n      bottom: 0;\n      left: -5px;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      border: 2px solid white;\n      transition: all 0.5s; }\n\n.container input {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 50px;\n    height: 50px;\n    padding: 0 0 0 60px;\n    outline: none;\n    border-style: solid;\n    border-width: 2px;\n    border-radius: 30px;\n    border-color: white;\n    background: #1b1b1b;\n    color: white;\n    transition: all 1s;\n    opacity: 0;\n    z-index: 5;\n    font-weight: bolder; }\n\n.container input:hover {\n      cursor: pointer; }\n\n.container input:focus {\n      width: 100%;\n      opacity: 1;\n      cursor: text; }\n\n.container input:focus ~ .search {\n      right: -240px;\n      background: #1b1b1b;\n      z-index: 6; }\n\n.container input:focus ~ .search::before {\n        top: 0;\n        left: 0;\n        width: 25px; }\n\n.container input:focus ~ .search::after {\n        top: 0;\n        left: 0;\n        width: 25px;\n        height: 2px;\n        border: none;\n        background: white;\n        border-radius: 0;\n        transform: rotate(-45deg); }\n\n.container input::-moz-placeholder {\n      color: white;\n      opacity: 0.5;\n      font-weight: bolder; }\n\n.container input::-ms-input-placeholder {\n      color: white;\n      opacity: 0.5;\n      font-weight: bolder; }\n\n.container input::placeholder {\n      color: white;\n      opacity: 0.5;\n      font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3ByZXNlbnRhdGlvbmFscy9tb2JpbGUtc2VhcmNoL21vYmlsZS1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFQWjtJQVVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBOUJxQjtJQStCckIsa0JBQWtCO0lBQ2xCLG1CQWpDaUI7SUFrQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5Q0FBeUMsRUFBQTs7QUF6QjdDO01BNEJNLGVBQWUsRUFBQTs7QUE1QnJCO01BZ0NNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFNBQVM7TUFDVCxRQUFRO01BQ1IsU0FBUztNQUNULFVBQVU7TUFDVixXQUFXO01BQ1gsV0FBVztNQUNYLGlCQXREZTtNQXVEZix3QkFBd0I7TUFDeEIsb0JBQW9CLEVBQUE7O0FBM0MxQjtNQStDTSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixTQUFTO01BQ1QsUUFBUTtNQUNSLFNBQVM7TUFDVCxVQUFVO01BQ1YsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsdUJBdEVlO01BdUVmLG9CQUFvQixFQUFBOztBQTFEMUI7SUErREksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBeEZpQjtJQXlGakIsbUJBeEZxQjtJQXlGckIsWUExRmlCO0lBMkZqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUIsRUFBQTs7QUFqRnZCO01Bb0ZNLGVBQWUsRUFBQTs7QUFwRnJCO01Bd0ZNLFdBQVc7TUFDWCxVQUFVO01BQ1YsWUFBWSxFQUFBOztBQTFGbEI7TUE4Rk0sYUFBYTtNQUNiLG1CQTNHbUI7TUE0R25CLFVBQVUsRUFBQTs7QUFoR2hCO1FBbUdRLE1BQU07UUFDTixPQUFPO1FBQ1AsV0FBVyxFQUFBOztBQXJHbkI7UUF5R1EsTUFBTTtRQUNOLE9BQU87UUFDUCxXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7UUFDWixpQkEzSGE7UUE0SGIsZ0JBQWdCO1FBQ2hCLHlCQUF5QixFQUFBOztBQWhIakM7TUFxSE0sWUFsSWU7TUFtSWYsWUFBWTtNQUNaLG1CQUFtQixFQUFBOztBQXZIekI7TUFxSE0sWUFsSWU7TUFtSWYsWUFBWTtNQUNaLG1CQUFtQixFQUFBOztBQXZIekI7TUFxSE0sWUFsSWU7TUFtSWYsWUFBWTtNQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvcHJlc2VudGF0aW9uYWxzL21vYmlsZS1zZWFyY2gvbW9iaWxlLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtb2JpbGUtYnJlYWstcG9pbnQ6IDYwMHB4O1xuJHByaW1hcnktY29sb3I6IHdoaXRlO1xuJHNlY29uZGFyeS1jb2xvcjogIzFiMWIxYjtcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAtNDBweCAxNXB4IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA1MDtcblxuICAuc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiA2cHggNnB4IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHRvcDogMTJweDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMTJweDtcbiAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB0b3A6IC01cHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IC01cHg7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDYwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGN1cnNvcjogdGV4dDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIH4gLnNlYXJjaCB7XG4gICAgICByaWdodDogLTI0MHB4O1xuICAgICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgIHotaW5kZXg6IDY7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/search/presentationals/mobile-search/mobile-search.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/mobile-search/mobile-search.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MobileSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSearchComponent", function() { return MobileSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MobileSearchComponent = /** @class */ (function () {
    function MobileSearchComponent() {
        this.placeHolder = '';
    }
    MobileSearchComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], MobileSearchComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MobileSearchComponent.prototype, "placeHolder", void 0);
    MobileSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mobile-search',
            template: __webpack_require__(/*! ./mobile-search.component.html */ "./src/app/components/search/presentationals/mobile-search/mobile-search.component.html"),
            styles: [__webpack_require__(/*! ./mobile-search.component.scss */ "./src/app/components/search/presentationals/mobile-search/mobile-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MobileSearchComponent);
    return MobileSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/search/presentationals/mobile-search/mobile-search.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/mobile-search/mobile-search.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: MobileSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSearchModule", function() { return MobileSearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mobile_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-search.component */ "./src/app/components/search/presentationals/mobile-search/mobile-search.component.ts");





var MobileSearchModule = /** @class */ (function () {
    function MobileSearchModule() {
    }
    MobileSearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mobile_search_component__WEBPACK_IMPORTED_MODULE_4__["MobileSearchComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            exports: [_mobile_search_component__WEBPACK_IMPORTED_MODULE_4__["MobileSearchComponent"]],
        })
    ], MobileSearchModule);
    return MobileSearchModule;
}());



/***/ }),

/***/ "./src/app/components/search/presentationals/mobile-tags/mobile-tags.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/mobile-tags/mobile-tags.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tags.length > 0\" class=\"tag-side-bar\"\n  [class.open]=\"sideBarExpanded\">\n  <mat-chip-list>\n    <mat-chip *ngFor=\"let tag of tags\" color=\"primary\"\n      (click)=\"onTagclick(tag)\">\n      {{tag.name}}\n    </mat-chip>\n  </mat-chip-list>\n</div>"

/***/ }),

/***/ "./src/app/components/search/presentationals/mobile-tags/mobile-tags.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/mobile-tags/mobile-tags.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 5; }\n\nmat-chip {\n  color: white !important;\n  background-color: #1b1b1b !important; }\n\n:host ::ng-deep .mat-chip-list-wrapper {\n  flex-direction: column;\n  align-items: flex-end;\n  position: fixed;\n  float: right;\n  background-color: #1b1b1b;\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: white;\n  padding: 2px 0 2px 60px;\n  height: auto;\n  transition: height 0.5s ease-out;\n  min-width: 120px; }\n\n.tag-side-bar {\n  z-index: 4;\n  position: absolute;\n  margin: 50px 15px 0 -70px;\n  top: 60px;\n  left: -50px;\n  transition: left 0.5s ease-out; }\n\n.open {\n  left: 20px;\n  transition: left 0.5s ease-in; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3ByZXNlbnRhdGlvbmFscy9tb2JpbGUtdGFncy9tb2JpbGUtdGFncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLHVCQUFnQztFQUNoQyxvQ0FBNkMsRUFBQTs7QUFHL0M7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBaEJ1QjtFQWlCdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBckJtQjtFQXNCbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFJWixnQ0FBZ0M7RUFDaEMsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsU0FBUztFQUNULFdBQVc7RUFJWCw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxVQUFVO0VBSVYsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9wcmVzZW50YXRpb25hbHMvbW9iaWxlLXRhZ3MvbW9iaWxlLXRhZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDIzNCwgMjM0LCAwLjkpO1xuJHByaW1hcnktY29sb3I6IHdoaXRlO1xuJHNlY29uZGFyeS1jb2xvcjogIzFiMWIxYjtcblxuOmhvc3Qge1xuICB6LWluZGV4OiA1O1xufVxuXG5tYXQtY2hpcCB7XG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWNoaXAtbGlzdC13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgcGFkZGluZzogMnB4IDAgMnB4IDYwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC41cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC41cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjVzIGVhc2Utb3V0O1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4udGFnLXNpZGUtYmFyIHtcbiAgei1pbmRleDogNDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDUwcHggMTVweCAwIC03MHB4O1xuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IC01MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2Utb3V0O1xufVxuXG4ub3BlbiB7XG4gIGxlZnQ6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZS1pbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/search/presentationals/mobile-tags/mobile-tags.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/mobile-tags/mobile-tags.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MobileTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileTagsComponent", function() { return MobileTagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MobileTagsComponent = /** @class */ (function () {
    function MobileTagsComponent(eRef) {
        this.eRef = eRef;
        this.deleteTag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MobileTagsComponent.prototype.clickout = function (event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.sideBarExpanded = false;
        }
    };
    MobileTagsComponent.prototype.onTagclick = function (tag) {
        if (!this.sideBarExpanded) {
            this.sideBarExpanded = true;
            return;
        }
        this.deleteTag.emit(tag);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MobileTagsComponent.prototype, "tags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MobileTagsComponent.prototype, "deleteTag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MobileTagsComponent.prototype, "clickout", null);
    MobileTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mobile-tags',
            template: __webpack_require__(/*! ./mobile-tags.component.html */ "./src/app/components/search/presentationals/mobile-tags/mobile-tags.component.html"),
            styles: [__webpack_require__(/*! ./mobile-tags.component.scss */ "./src/app/components/search/presentationals/mobile-tags/mobile-tags.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MobileTagsComponent);
    return MobileTagsComponent;
}());



/***/ }),

/***/ "./src/app/components/search/presentationals/mobile-tags/mobile-tags.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/mobile-tags/mobile-tags.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MobileTagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileTagsModule", function() { return MobileTagsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _mobile_tags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-tags.component */ "./src/app/components/search/presentationals/mobile-tags/mobile-tags.component.ts");





var MobileTagsModule = /** @class */ (function () {
    function MobileTagsModule() {
    }
    MobileTagsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mobile_tags_component__WEBPACK_IMPORTED_MODULE_4__["MobileTagsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            ],
            exports: [_mobile_tags_component__WEBPACK_IMPORTED_MODULE_4__["MobileTagsComponent"]],
        })
    ], MobileTagsModule);
    return MobileTagsModule;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- search bar -->\n<mobile-tags [tags]=\"activeTags\" (deleteTag)=\"removeTag($event)\">\n</mobile-tags>\n<mobile-search [control]=\"searchControl\" [placeHolder]=\"placeHolder\">\n</mobile-search>\n<back-button [show]=\"showBackButton\" (clicked)=\"onBackClicked()\"></back-button>\n\n<div [ngClass]=\"focus + ' ' + stickMenu\"\n  class=\"search-container ease-background ease-padding ease-height\">\n  <mat-form-field class=\"form-field\" appearance=\"outline\">\n    <mat-label class=\"search-title\">Search</mat-label>\n    <input matInput [placeholder]=\"placeHolder\" autocomplete=\"off\"\n      [formControl]=\"searchControl\" (blur)=\"onBlur()\" (focus)=\"onFocus()\">\n  </mat-form-field>\n  <div *ngIf=\"activeTags && activeTags.length > 0\" class=\"tag-container\">\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let tag of activeTags\" color=\"primary\"\n        (click)=\"removeTag(tag)\">{{tag.name}}\n      </mat-chip>\n    </mat-chip-list>\n  </div>\n</div>\n<!-- results -->\n<div class=\"results-container\">\n  <ng-container *ngIf=\" showSearchResult && searchResult.length !=0\">\n    <div class=\"search-result-container\">\n      <line-item *ngFor=\"let result of searchResult\" [config]=\"result\"\n        [searchValue]=\"searchValue\" (tagClicked)=\"addTag($event)\"\n        (itemSelected)=\"onItemSelected(result)\"></line-item>\n    </div>\n    <ng-container *ngIf=\"suggestionResult.length != 0\">\n      <h2>Suggestions</h2>\n      <line-item *ngFor=\"let result of suggestionResult\" [config]=\"result\"\n        [searchValue]=\"searchValue\" (itemSelected)=\"onItemSelected(result)\"\n        (tagClicked)=\"addTag($event)\">\n      </line-item>\n    </ng-container>\n  </ng-container>\n  <div *ngIf=\"!searchResult.length && companies.length\"\n    class=\"no-result-container\">\n    <div *ngIf=\"searchResult.length == 0\" class=\"no-result-text\">\n      <h4>No results for this search, check below</h4>\n      <h5 *ngIf=\"activeTags.length\">remove tags for a more general search</h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mobile-tags {\n  position: fixed;\n  width: 100%;\n  display: none; }\n  @media only screen and (max-width: 600px) {\n    mobile-tags {\n      display: block; } }\n  mobile-search {\n  top: 50px;\n  display: none;\n  position: fixed;\n  z-index: 2; }\n  @media only screen and (max-width: 600px) {\n    mobile-search {\n      display: block; } }\n  .results-container {\n  margin-left: 25px;\n  margin-right: 25px; }\n  @media only screen and (max-width: 600px) {\n    .results-container {\n      margin-left: 0;\n      margin-right: 0; } }\n  :host ::ng-deep input {\n  caret-color: white !important; }\n  :host ::ng-deep .mat-form-field-label {\n  color: white !important; }\n  :host ::ng-deep .mat-form-field-label-wrapper {\n  top: -1em; }\n  :host ::ng-deep .mat-form-field-infix {\n  color: white;\n  margin-left: 15px;\n  padding-top: 10px; }\n  :host ::ng-deep .mat-form-field-label {\n  margin-left: 20px; }\n  :host ::ng-deep .mat-form-field-outline {\n  color: white !important; }\n  :host ::ng-deep .mat-form-field-outline .mat-form-field-outline-end {\n    border-radius: 0 40px 40px 0; }\n  :host ::ng-deep .mat-form-field-outline .mat-form-field-outline-start {\n    width: 40px !important;\n    border-radius: 40px 0 0 40px; }\n  :host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin-bottom: -10px; }\n  .form-field,\n.tag-container {\n  width: inherit;\n  margin: 0 100px; }\n  @media only screen and (max-width: 600px) {\n    .form-field,\n    .tag-container {\n      margin: 10px 20px; } }\n  .search-container {\n  text-align: center;\n  position: fixed;\n  width: -webkit-fill-available;\n  left: 0;\n  top: 0;\n  padding: 10px 50px 0;\n  z-index: 2;\n  display: block; }\n  .search-container input {\n    transition: font-size 0.5s ease-out; }\n  @media only screen and (max-width: 600px) {\n    .search-container {\n      display: none; } }\n  .ease-padding {\n  transition: padding 0.5s ease-out, background-color 1s ease-out; }\n  .stick-menu {\n  background-color: rgba(27, 27, 27, 0.5);\n  padding: 0 50px 0; }\n  @media only screen and (max-width: 600px) {\n    .stick-menu {\n      padding: 0; } }\n  .unstick-menu {\n  background-color: #1b1b1b;\n  padding: 10px 50px 0; }\n  @media only screen and (max-width: 600px) {\n    .unstick-menu {\n      padding: 0; } }\n  .search-open input {\n  margin-bottom: 0;\n  font-size: 37px; }\n  mat-label {\n  font-size: 15px; }\n  mat-chip-list mat-chip {\n  color: white !important;\n  background-color: transparent !important;\n  border-width: 1px !important;\n  margin-top: -7px; }\n  mat-chip-list ::ng-deep .mat-chip-list-wrapper {\n  height: 40px; }\n  @media only screen and (max-width: 600px) {\n  .no-result-text {\n    padding: 50px 0;\n    height: 100%; }\n    .no-result-text h4 {\n      margin: 0 !important; } }\n  h1,\nh2,\nh4,\nh5 {\n  text-align: center; }\n  h4 {\n  text-transform: uppercase; }\n  @media only screen and (max-width: 600px) {\n  .no-result-container {\n    padding-top: 100px;\n    height: 100%; } }\n  @media only screen and (max-width: 600px) {\n  .result-title {\n    margin-bottom: 0;\n    padding: 110px 0 0; } }\n  .search-result-container {\n  padding-top: 90px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly; }\n  @media only screen and (max-width: 750px) {\n    .search-result-container {\n      padding-top: 30px; } }\n  .search-result-container line-item {\n    width: 50%;\n    max-width: 400px; }\n  @media only screen and (max-width: 900px) {\n      .search-result-container line-item {\n        display: flex; } }\n  @media only screen and (max-width: 750px) {\n      .search-result-container line-item {\n        display: unset;\n        width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYSxFQUFBO0VBQ2I7SUFKRjtNQUtJLGNBQWMsRUFBQSxFQUVqQjtFQUVEO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVSxFQUFBO0VBQ1Y7SUFMRjtNQU1JLGNBQWMsRUFBQSxFQUVqQjtFQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBQ2xCO0lBSEY7TUFJSSxjQUFjO01BQ2QsZUFBZSxFQUFBLEVBRWxCO0VBRUQ7RUFFSSw2QkFBNkIsRUFBQTtFQUZqQztFQU1JLHVCQUF1QixFQUFBO0VBTjNCO0VBVUksU0FBUyxFQUFBO0VBVmI7RUFjSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBaEJyQjtFQW9CSSxpQkFBaUIsRUFBQTtFQXBCckI7RUF3QkksdUJBQXVCLEVBQUE7RUF4QjNCO0lBMkJNLDRCQUE0QixFQUFBO0VBM0JsQztJQStCTSxzQkFBc0I7SUFDdEIsNEJBQTRCLEVBQUE7RUFoQ2xDO0VBc0NNLG9CQUFvQixFQUFBO0VBSzFCOztFQUVFLGNBQWM7RUFDZCxlQUFlLEVBQUE7RUFDZjtJQUpGOztNQUtJLGlCQUFpQixFQUFBLEVBRXBCO0VBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixPQUFPO0VBQ1AsTUFBTTtFQUNOLG9CQTVGaUM7RUE2RmpDLFVBQVU7RUFRVixjQUFjLEVBQUE7RUFmaEI7SUFhSSxtQ0FBbUMsRUFBQTtFQUdyQztJQWhCRjtNQWlCSSxhQUFhLEVBQUEsRUFFaEI7RUFFRDtFQUlFLCtEQUErRCxFQUFBO0VBR2pFO0VBQ0UsdUNBL0cwQztFQWdIMUMsaUJBbkgrQixFQUFBO0VBb0gvQjtJQUhGO01BSUksVUFBVSxFQUFBLEVBRWI7RUFFRDtFQUNFLHlCQXhIdUI7RUF5SHZCLG9CQTVIaUMsRUFBQTtFQTZIakM7SUFIRjtNQUlJLFVBQVUsRUFBQSxFQUViO0VBRUQ7RUFFSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBSW5CO0VBQ0UsZUFBZSxFQUFBO0VBR2pCO0VBRUksdUJBQWdDO0VBQ2hDLHdDQUF3QztFQUN4Qyw0QkFBNEI7RUFDNUIsZ0JBQWdCLEVBQUE7RUFMcEI7RUFTSSxZQUFZLEVBQUE7RUFLZDtFQURGO0lBRUksZUFBZTtJQUNmLFlBQVksRUFBQTtJQUhoQjtNQU1NLG9CQUFvQixFQUFBLEVBQ3JCO0VBSUw7Ozs7RUFJRSxrQkFBa0IsRUFBQTtFQUdwQjtFQUNFLHlCQUF5QixFQUFBO0VBSXpCO0VBREY7SUFFSSxrQkFBa0I7SUFDbEIsWUFBWSxFQUFBLEVBRWY7RUFHQztFQURGO0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBLEVBRXJCO0VBRUQ7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkIsRUFBQTtFQUM3QjtJQUxGO01BTUksaUJBQWlCLEVBQUEsRUFjcEI7RUFwQkQ7SUFVSSxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7RUFDaEI7TUFaSjtRQWFNLGFBQWEsRUFBQSxFQU1oQjtFQUpDO01BZko7UUFnQk0sY0FBYztRQUNkLFdBQVcsRUFBQSxFQUVkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNlYXJjaC1wYWRkaW5nLW5vcm1hbDogMTBweCA1MHB4IDA7XG4kc2VhcmNoLXBhZGRpbmctcmVkdWNlZDogMCA1MHB4IDA7XG4kcHJpbWFyeS1jb2xvcjogd2hpdGU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMWIxYjFiO1xuJHNlY29uZGFyeS1jb2xvci1mYWRlOiByZ2JhKDI3LCAyNywgMjcsIDAuNSk7XG5cbm1vYmlsZS10YWdzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbm1vYmlsZS1zZWFyY2gge1xuICB0b3A6IDUwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5yZXN1bHRzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgaW5wdXQge1xuICAgIGNhcmV0LWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0xZW07XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCA0MHB4IDQwcHggMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XG4gICAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNDBweCAwIDAgNDBweDtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tZmllbGQsXG4udGFnLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBtYXJnaW46IDAgMTAwcHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgfVxufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAkc2VhcmNoLXBhZGRpbmctbm9ybWFsO1xuICB6LWluZGV4OiAyO1xuXG4gIGlucHV0IHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjVzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXMgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXMgZWFzZS1vdXQ7XG4gIH1cbiAgZGlzcGxheTogYmxvY2s7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5lYXNlLXBhZGRpbmcge1xuICAtd2Via2l0LXRyYW5zaXRpb246IHBhZGRpbmcgMC41cyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXMgZWFzZS1vdXQsIGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IHBhZGRpbmcgMC41cyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzIGVhc2Utb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xufVxuXG4uc3RpY2stbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3ItZmFkZTtcbiAgcGFkZGluZzogJHNlYXJjaC1wYWRkaW5nLXJlZHVjZWQ7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi51bnN0aWNrLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICBwYWRkaW5nOiAkc2VhcmNoLXBhZGRpbmctbm9ybWFsO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4uc2VhcmNoLW9wZW4ge1xuICBpbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDM3cHg7XG4gIH1cbn1cblxubWF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5tYXQtY2hpcC1saXN0IHtcbiAgbWF0LWNoaXAge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuXG4ubm8tcmVzdWx0LXRleHQge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGg0IHtcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5oMSxcbmgyLFxuaDQsXG5oNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubm8tcmVzdWx0LWNvbnRhaW5lciB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbi5yZXN1bHQtdGl0bGUge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAxMTBweCAwIDA7XG4gIH1cbn1cblxuLnNlYXJjaC1yZXN1bHQtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cblxuICBsaW5lLWl0ZW0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService, router, location) {
        this.searchService = searchService;
        this.router = router;
        this.location = location;
        this.companies = [];
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.placeHolder = 'Eg. Craft beer';
        this.activeTags = [];
        this.stickMenu = 'unstick-menu';
        this.focus = 'search-close';
        this.tagSearchResult = [];
        this.searchResult = [];
        this.companyNameSearchResult = [];
        this.aboutSearchResult = [];
        this.suggestionResult = [];
        this.showBackButton = false;
        this.requiredScrollPos = 50;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchResult = this.companies;
        this.maybeShowBackButton();
        this.maybeSetHomePage();
        this.buildSearchControl();
        this.setParamAndInit();
        this.searchService.activeTags$.subscribe(function (actionTags) {
            _this.activeTags = actionTags;
            _this.refreshSearchResults();
            _this.updateParamsToUrl();
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.updateParamsToUrl();
            }
        });
    };
    SearchComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > this.requiredScrollPos) {
            this.stickMenu = 'stick-menu';
        }
        else {
            this.stickMenu = 'unstick-menu';
        }
    };
    SearchComponent.prototype.onBlur = function () {
        this.focus = 'search-close';
        if (!this.isHomePage) {
            this.blur.emit(false);
        }
    };
    SearchComponent.prototype.onFocus = function () {
        this.onValueChange(this.searchValue);
        this.focus = 'search-open';
    };
    SearchComponent.prototype.onValueChange = function (value) {
        if (!this.isHomePage && value) {
            this.blur.emit(true);
            this.showSearchResult = true;
            this.router.navigateByUrl('/');
        }
        this.searchValue = value;
        this.refreshSearchResults();
    };
    SearchComponent.prototype.addTag = function (tag) {
        if (this.activeTags.find(function (t) { return t.name === tag.name; })) {
            return;
        }
        this.refreshSearchResults();
        this.searchService.addTag(tag);
    };
    SearchComponent.prototype.removeTag = function (tag) {
        this.searchService.removeTag(tag);
        this.refreshSearchResults();
    };
    SearchComponent.prototype.onItemSelected = function (company) {
        this.router.navigateByUrl('/' + company.name);
    };
    SearchComponent.prototype.onBackClicked = function () {
        this.router.navigateByUrl('/');
    };
    SearchComponent.prototype.onDeleteTag = function (tag) {
        this.removeTag(tag);
    };
    SearchComponent.prototype.maybeSetHomePage = function () {
        var _this = this;
        this.searchService.isHome$().subscribe(function (isHomePage) {
            _this.isHomePage = isHomePage;
            _this.showSearchResult = false;
            if (isHomePage) {
                _this.showSearchResult = true;
            }
        });
    };
    SearchComponent.prototype.buildSearchControl = function () {
        var _this = this;
        this.searchControl.valueChanges.subscribe(function (value) {
            _this.onValueChange(value);
            _this.updateParamsToUrl();
        });
    };
    SearchComponent.prototype.setParamAndInit = function () {
        var _this = this;
        var tagResult;
        var searchResult;
        var params = location.search.substr(1).split("&");
        for (var index = 0; index < params.length; index++) {
            var paramKeyPair = params[index].split("=");
            if (paramKeyPair[0] === 'tags') {
                tagResult = decodeURIComponent(paramKeyPair[1]);
            }
            if (paramKeyPair[0] === 'search') {
                searchResult = decodeURIComponent(paramKeyPair[1]);
            }
        }
        var tags = tagResult ? tagResult.split(',') : [];
        if (tags) {
            tags.forEach(function (tag) { return _this.searchService.addTag({ name: tag }); });
        }
        this.searchValue = searchResult || '';
        if (this.searchValue) {
            this.searchControl.setValue(this.searchValue);
        }
    };
    SearchComponent.prototype.refreshSearchResults = function () {
        if (!this.searchValue && this.activeTags.length == 0) {
            this.searchResult = this.companies;
            return;
        }
        this.searchCompanyName();
        this.searchAbout();
        this.searchTags();
        this.combineSearchResults();
        this.filterActiveTags();
        this.buildSuggestions();
    };
    SearchComponent.prototype.buildSuggestions = function () {
        var _this = this;
        this.suggestionResult = [];
        this.companyNameSearchResult.forEach(function (company) {
            if (_this.suggestionResult.indexOf(company) == -1 && _this.searchResult.indexOf(company) == -1) {
                _this.suggestionResult.push(company);
            }
        });
        this.aboutSearchResult.forEach(function (company) {
            if (_this.suggestionResult.indexOf(company) == -1 && _this.searchResult.indexOf(company) == -1) {
                _this.suggestionResult.push(company);
            }
        });
    };
    SearchComponent.prototype.searchCompanyName = function () {
        var _this = this;
        if (!this.searchValue) {
            this.searchResult = this.companies;
            return;
        }
        this.companyNameSearchResult = this.companies.filter(function (company) {
            return company.name && company.name.toLowerCase().includes(_this.searchValue.toLowerCase());
        });
    };
    SearchComponent.prototype.searchAbout = function () {
        var _this = this;
        if (!this.searchValue) {
            this.searchResult = this.companies;
            return;
        }
        this.aboutSearchResult = this.companies.filter(function (company) {
            return company.about && company.about.toLowerCase().includes(_this.searchValue.toLowerCase());
        });
    };
    SearchComponent.prototype.combineSearchResults = function () {
        var allResults = this.companyNameSearchResult.concat(this.aboutSearchResult, this.tagSearchResult);
        this.searchResult = allResults.filter(function (a, b) { return allResults.indexOf(a) === b; });
    };
    SearchComponent.prototype.searchTags = function () {
        var _this = this;
        this.tagSearchResult = this.companies.filter(function (company) {
            return company.tags.some(function (tag) {
                return tag.name.toLowerCase().includes(_this.searchValue.toLowerCase());
                ;
            });
        });
    };
    SearchComponent.prototype.filterActiveTags = function () {
        var _this = this;
        if (this.activeTags.length == 0) {
            return;
        }
        if (this.searchResult.length == 0) {
            this.searchResult = this.companies;
        }
        this.searchResult = this.searchResult.filter(function (company) {
            var containsAllTag = true;
            _this.activeTags.forEach(function (tag) {
                var tagExists = false;
                company.tags.forEach(function (companyTag) {
                    if (companyTag.name == tag.name) {
                        tagExists = true;
                    }
                });
                containsAllTag = containsAllTag && tagExists;
                if (!tagExists) {
                    _this.suggestionResult.push(company);
                }
            });
            return containsAllTag;
        });
    };
    SearchComponent.prototype.updateParamsToUrl = function () {
        var newUrl = window.location.pathname;
        if (this.activeTags.length != 0 || this.searchValue) {
            newUrl += '?';
        }
        this.location.replaceState(this.getNewUrl(newUrl));
    };
    SearchComponent.prototype.getNewUrl = function (newUrl) {
        if (this.activeTags.length != 0) {
            var queryParams = this.activeTags.map(function (tag) { return tag.name; });
            newUrl += 'tags=' + queryParams.toString();
            if (this.searchValue) {
                newUrl += '&';
            }
        }
        return this.addValueParamToUrl(newUrl);
    };
    SearchComponent.prototype.addValueParamToUrl = function (url) {
        if (this.searchValue) {
            url += 'search=' + this.searchValue;
        }
        return url;
    };
    SearchComponent.prototype.maybeShowBackButton = function () {
        var _this = this;
        if (this.router.url != '/' && !this.router.url.startsWith('/?')) {
            this.showBackButton = true;
            this.isHomePage = false;
        }
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })).subscribe(function (event) {
            if (event.url == '/' || event.url.startsWith('/?')) {
                _this.showBackButton = false;
                _this.isHomePage = true;
                return;
            }
            _this.showBackButton = true;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchComponent.prototype, "companies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "blur", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SearchComponent.prototype, "onWindowScroll", null);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/search/search.module.ts ***!
  \****************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _common_back_button_back_button_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/back-button/back-button.module */ "./src/app/components/common/back-button/back-button.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _presentationals_line_item_line_item_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presentationals/line-item/line-item.module */ "./src/app/components/search/presentationals/line-item/line-item.module.ts");
/* harmony import */ var _presentationals_mobile_search_mobile_search_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./presentationals/mobile-search/mobile-search.module */ "./src/app/components/search/presentationals/mobile-search/mobile-search.module.ts");
/* harmony import */ var _presentationals_mobile_tags_mobile_tags_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./presentationals/mobile-tags/mobile-tags.module */ "./src/app/components/search/presentationals/mobile-tags/mobile-tags.module.ts");












var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"]],
            imports: [
                _common_back_button_back_button_module__WEBPACK_IMPORTED_MODULE_7__["BackButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _presentationals_mobile_search_mobile_search_module__WEBPACK_IMPORTED_MODULE_10__["MobileSearchModule"],
                _presentationals_mobile_tags_mobile_tags_module__WEBPACK_IMPORTED_MODULE_11__["MobileTagsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _presentationals_line_item_line_item_module__WEBPACK_IMPORTED_MODULE_9__["LineItemModule"],
            ],
            exports: [_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"]],
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/services/companies/companies.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/companies/companies.service.ts ***!
  \*********************************************************/
/*! exports provided: CompaniesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesService", function() { return CompaniesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _spread_sheet_spread_sheet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spread-sheet/spread-sheet.service */ "./src/app/services/spread-sheet/spread-sheet.service.ts");




var CompaniesService = /** @class */ (function () {
    function CompaniesService(spreadSheetService) {
        this.spreadSheetService = spreadSheetService;
        this._companies = [];
        this._companies_old = [
            {
                img: '/assets/imgs/tapi-tapi-profile.jpeg',
                name: 'Tapi Tapi',
                about: 'Tapi Tapi is an educational initiative that is focused on sharing food and food culture from the African continent, with other Africans and our visitors alike. You can enjoy the familiar flavours of home and try new ones from friends and cultures unknown. We are open for business at the shop at 76 Lower Main Road, Observatory <a target="_blank" href="https://www.tapitapi.co.za/operatinghours">(operating hours)</a> Check out our online <a target="_blank" href="https://www.tapitapi.co.za/shop">store</a> for deliveries and other Tapi Tapi products beyond ice cream.',
                tags: [{ name: 'Black owned' }, { name: 'Cape Town' }],
                websiteDisplay: 'tapitapi.co.za',
                websiteUrl: 'https://www.tapitapi.co.za',
                instagram: '_tapi_tapi',
            },
            {
                name: 'Ukhamba Beerworx',
                img: '/assets/imgs/ukhamba-beerworx-profile.jpg',
                about: 'TODO TODO TODO TODO TODO',
                tags: [{ name: 'Beer' }, { name: 'Black owned' }],
                websiteDisplay: 'ukhambabeerworx.co.za',
                websiteUrl: 'https://www.ukhambabeerworx.co.za',
            },
            {
                img: '/assets/imgs/humble-coffee-profile.jpeg',
                name: 'Humble coffee',
                about: 'TODO TODO TODO TODO TODO',
                tags: [{ name: 'Coffee' }, { name: 'Female owned' }],
                websiteDisplay: 'humblecoffee.co.za',
                instagram: '_tapi_tapi',
            },
            {
                name: 'JFF',
                img: '/assets/imgs/JFF-rooftop-farm-profile.jpg',
                about: 'TODO TODO TODO TODO TODO',
                tags: [{ name: 'female owned' }, { name: 'black owned' }],
                websiteDisplay: 'jffrooftopfarm.business.site',
            },
            {
                img: '/assets/imgs/the-nest-profile.jpg',
                name: 'The Nest',
                about: 'TODO TODO TODO TODO TODO',
                tags: [{ name: 'female owned' }, { name: 'black owned' }],
                websiteDisplay: 'thenestspace.co.za',
                websiteUrl: 'http://thenestspace.co.za',
                instagram: '_tapi_tapi',
            },
            {
                img: '/assets/imgs/native-nosi-profile.png',
                name: 'Native Nosi',
                about: 'TODO TODO TODO TODO TODO',
                tags: [{ name: 'female owned' }, { name: 'black owned' }],
                websiteDisplay: 'nativenosi.co.za',
                websiteUrl: 'https://nativenosi.co.za/',
                instagram: '_tapi_tapi',
            },
            {
                img: '/assets/imgs/tolokazi-beer-profile.jpeg',
                name: 'Tolokazi beer',
                about: 'TODO TODO TODO TODO TODO',
                tags: [{ name: 'female owned' }, { name: 'black owned' }],
                websiteDisplay: 'ukhambabeerworx.co.za',
                websiteUrl: 'https://www.ukhambabeerworx.co.za',
                instagram: '_tapi_tapi',
            },
        ];
    }
    Object.defineProperty(CompaniesService.prototype, "companies", {
        get: function () {
            var _this = this;
            if (location.hostname.includes('localhost') || location.hostname.includes('127.0.0.1')) {
                // return of(this._companies_old);
            }
            if (this._companies.length) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._companies);
            }
            var spreadSheetData = this.spreadSheetService.getSheetData();
            spreadSheetData.subscribe(function (companies) {
                _this._companies = companies;
            });
            return spreadSheetData;
        },
        enumerable: true,
        configurable: true
    });
    CompaniesService.prototype.initCompanies = function () {
        var _this = this;
        this.companies.subscribe(function (companies) {
            _this._companies = companies;
        });
    };
    CompaniesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_spread_sheet_spread_sheet_service__WEBPACK_IMPORTED_MODULE_3__["SpreadSheetService"]])
    ], CompaniesService);
    return CompaniesService;
}());



/***/ }),

/***/ "./src/app/services/search/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/search/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SearchService = /** @class */ (function () {
    function SearchService(router) {
        var _this = this;
        this.router = router;
        this._isHomePage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.activeTags = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._activeTags = [];
        this.router.events.subscribe(function (event) {
            if (event.urlAfterRedirects == '/') {
                _this._isHomePage.next(true);
                return;
            }
        });
    }
    Object.defineProperty(SearchService.prototype, "activeTags$", {
        get: function () {
            return this.activeTags;
        },
        enumerable: true,
        configurable: true
    });
    SearchService.prototype.isHome$ = function () {
        return this._isHomePage;
    };
    SearchService.prototype.isHomePage = function () {
        this._isHomePage.next(true);
    };
    SearchService.prototype.isNotHomePage = function () {
        this._isHomePage.next(false);
    };
    SearchService.prototype.addTag = function (tag) {
        if (this._activeTags.find(function (t) { return t.name === tag.name; })) {
            return;
        }
        this._activeTags.push(tag);
        this.activeTags.next(this._activeTags);
    };
    SearchService.prototype.removeTag = function (tag) {
        this._activeTags = this._activeTags.filter(function (t) {
            return t != tag;
        });
        this.activeTags.next(this._activeTags);
    };
    SearchService.prototype.buildUrl = function (searchValue) {
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchService);
    return SearchService;
}());

var Page;
(function (Page) {
    Page[Page["HOME"] = 0] = "HOME";
    Page[Page["OTHER"] = 1] = "OTHER";
})(Page || (Page = {}));


/***/ }),

/***/ "./src/app/services/spread-sheet/spread-sheet.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/spread-sheet/spread-sheet.service.ts ***!
  \***************************************************************/
/*! exports provided: SpreadSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadSheetService", function() { return SpreadSheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SpreadSheetService = /** @class */ (function () {
    function SpreadSheetService(http) {
        this.http = http;
    }
    SpreadSheetService.prototype.getSheetData = function () {
        var url = 'https://sheets.googleapis.com/v4/spreadsheets/1ptje2D1-3WiOmLUMMflPkVl0uYxp5oejD5BE6Z7oDDA?key=AIzaSyCqyQdEJUNg97kQ7HBM91ppmrqXbXIoc60&includeGridData=true';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var rowData = res.sheets[0].data[0].rowData;
            var returnArray = [];
            if (rowData && rowData.length > 0) {
                var _loop_1 = function (entry) {
                    if (rowData[entry].values[0].formattedValue == 'FALSE') {
                        return "continue";
                    }
                    if (rowData[entry].values[0].formattedValue == 'END') {
                        return "break";
                    }
                    var row = rowData[entry].values;
                    var tags = [];
                    if (row[6].formattedValue) {
                        row[6].formattedValue.split(',').forEach(function (tag) {
                            tags.push({ name: tag });
                        });
                    }
                    var company = {
                        name: row[1] ? row[1].formattedValue : '',
                        websiteUrl: row[2] ? row[2].formattedValue : '',
                        websiteDisplay: row[3] ? row[3].formattedValue : '',
                        email: row[4] ? row[4].formattedValue : '',
                        product: row[5] ? row[5].formattedValue : '',
                        tags: tags,
                        img: row[7] ? "/assets/imgs/" + row[7].formattedValue : '',
                        location: row[8] ? row[8].formattedValue : '',
                        delivery: row[9] ? row[9].formattedValue : '',
                        about: row[10] ? row[10].formattedValue : '',
                        instagram: row[11] ? row[11].formattedValue : '',
                    };
                    returnArray.push(company);
                };
                for (var entry = 1; entry < rowData.length; entry++) {
                    var state_1 = _loop_1(entry);
                    if (state_1 === "break")
                        break;
                }
            }
            return returnArray;
        }));
    };
    SpreadSheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpreadSheetService);
    return SpreadSheetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/barak/findSA/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map