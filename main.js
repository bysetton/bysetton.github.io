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

module.exports = "<div *ngIf=\"!loadRouter\" class=\"spinner-container\">\n  <mat-spinner></mat-spinner>\n</div>\n<div class='background-image'>\n  <img src=\"https://coloringhome.com/coloring/di8/xxM/di8xxM6yT.png\" />\n</div>\n<div class=\"curtain-container\" *ngIf=\"loadRouter\">\n  <div class=\"background-curtain\">\n    <search [companies]=\"companies\" (blur)=\"onSearchFocus($event)\"></search>\n    <router-outlet *ngIf=\"!searchFocus\"></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-container {\n  margin-top: 200px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.background-curtain {\n  background-color: rgba(181, 181, 181, 0.95);\n  max-width: 1000px;\n  min-width: 260px;\n  width: 1000px;\n  padding: 100px 0;\n  margin: 0 150px;\n  box-shadow: 0 0 5px 12px rgba(0, 0, 0, 0.55); }\n\n@media only screen and (max-width: 600px) {\n    .background-curtain {\n      padding: 100px 0;\n      margin: 0 35px; } }\n\n.curtain-container {\n  display: flex;\n  justify-content: center;\n  min-height: 100%; }\n\n.background-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n\n.background-image img {\n  z-index: -1;\n  position: fixed;\n  flex-shrink: 0;\n  min-width: 100%;\n  min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSwyQ0FBMkM7RUFDM0MsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFHZiw0Q0FBeUMsRUFBQTs7QUFDekM7SUFWRjtNQVdJLGdCQUFnQjtNQUNoQixjQUFjLEVBQUEsRUFFakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iYWNrZ3JvdW5kLWN1cnRhaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MSwgMTgxLCAxODEsIDAuOTUpO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWluLXdpZHRoOiAyNjBweDtcbiAgd2lkdGg6IDEwMDBweDtcbiAgcGFkZGluZzogMTAwcHggMDtcbiAgbWFyZ2luOiAwIDE1MHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMTJweCByZ2JhKDAsMCwwLDAuNTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggMTJweCByZ2JhKDAsMCwwLDAuNTUpO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IDEycHggcmdiYSgwLDAsMCwwLjU1KTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG4gICAgbWFyZ2luOiAwIDM1cHg7XG4gIH1cbn1cblxuLmN1cnRhaW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIGltZyB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59Il19 */"

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
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
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

module.exports = "<div class=\"button-container\">\n  <button mat-button (click)=\"clicked.emit()\">\n    <mat-icon>arrow_back</mat-icon>\n    Back\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/components/common/back-button/back-button.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/back-button/back-button.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  border-radius: 20px;\n  padding: 2px 17px 2px 14px; }\n\n.button-container {\n  margin: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2JhY2stYnV0dG9uL2JhY2stYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2JhY2stYnV0dG9uL2JhY2stYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMnB4IDE3cHggMnB4IDE0cHg7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxOHB4O1xufSJdfQ== */"

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
    }
    BackButtonComponent.prototype.ngOnInit = function () {
    };
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

module.exports = "<ng-container *ngIf=\"company\">\n  <back-button (clicked)=\"onBackClicked()\"></back-button>\n  <div class=\"image-container\">\n    <img\n      [src]=\"company.img || 'https://i.pinimg.com/originals/82/1a/a8/821aa80c546ac7d554e4ac0de0e95cb8.jpg'\">\n  </div>\n  <div class='image-overlay-container'>\n    <h1>{{company.name}}</h1>\n    <mat-chip-list class=\"chip-list\">\n      <mat-chip *ngFor=\"let tag of company.tags\" color=\"primary\" selected\n        (click)=\"hashtagClicked(tag)\" class=\"chip\">{{tag.name}}\n      </mat-chip>\n    </mat-chip-list>\n  </div>\n  <div class=\"profile-info\">\n    <a *ngIf=\"company.websiteUrl && company.websiteDisplay\"\n      [href]=\"company.websiteUrl\" target=\"_blank\">\n      <div class=\"website-url\">\n        <mat-icon>language</mat-icon>\n        {{company.websiteDisplay}}\n      </div>\n    </a>\n    <a href=\"https://www.instagram.com/{{company.instagram}}\" target=\"_blank\">\n      <div *ngIf=\"company.instagram\" class=\"instagram\">\n        <i class=\"fa fa-instagram\" style=\"font-size:24px\"></i>\n        {{company.instagram}}\n      </div>\n    </a>\n    <p>\n      {{company.about}}\n    </p>\n  </div>\n</ng-container>\n\n<company-not-found *ngIf=\"!company && companyParam\"\n  [companyName]=\"companyParam\">\n</company-not-found>"

/***/ }),

/***/ "./src/app/components/company-page/company-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/company-page/company-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 50px;\n  text-align: center; }\n\nmat-card {\n  padding: 50px !important;\n  max-width: 100%;\n  margin: 0 100px; }\n\nback-button {\n  z-index: 3;\n  position: fixed;\n  left: 0;\n  top: 0; }\n\nh1 {\n  background-color: rgba(234, 234, 234, 0.9);\n  text-align: center;\n  font-size: 50px;\n  border-radius: 60px;\n  padding: 25px;\n  border-color: black;\n  border-width: 2px !important;\n  border: solid;\n  margin: 100px 25px 15px; }\n\n@media only screen and (max-width: 600px) {\n    h1 {\n      font-size: 30px; } }\n\nmat-chip-list mat-chip {\n  border-width: 1.5px !important;\n  padding: 15px;\n  min-height: 40px;\n  border-radius: 20px; }\n\ni,\nmat-icon {\n  margin: 5px; }\n\n.image-overlay-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: -330px 0 0;\n  min-height: 330px;\n  width: 100%;\n  position: relative; }\n\n@media only screen and (max-width: 600px) {\n    .image-overlay-container {\n      margin-top: -330px; } }\n\n.chip-list mat-chip {\n  background-color: rgba(234, 234, 234, 0.9) !important; }\n\n.instagram,\n.website-url {\n  text-align: center;\n  margin: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.3s ease-out; }\n\na {\n  color: black;\n  text-decoration: none;\n  transition: color 0.3s ease-out; }\n\n.instagram a:hover,\n.instagram:hover,\n.website-url a:hover,\n.website-url:hover {\n  color: red;\n  transition: color 0.3s ease-in; }\n\n.image-container {\n  margin-top: -100px;\n  position: relative;\n  height: 350px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n\n.image-container img {\n    min-height: 100%; }\n\n.image-container:after {\n  content: '\\A';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  opacity: 1; }\n\n.img-cover {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n  margin-top: -350px; }\n\n.chip {\n  display: inline-flex; }\n\n.profile-info {\n  margin: 0 20px;\n  align-items: center;\n  font-size: 20px; }\n\n@media only screen and (max-width: 600px) {\n    .profile-info {\n      font-size: 15px; } }\n\n.info {\n  margin-left: 50px;\n  width: 100%; }\n\n.mat-card-content {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1wYWdlL2NvbXBhbnktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNLEVBQUE7O0FBR1I7RUFDRSwwQ0F4QnlDO0VBeUJ6QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBQ3ZCO0lBVkY7TUFXSSxlQUFlLEVBQUEsRUFFbEI7O0FBRUQ7RUFFSSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFJdkI7O0VBRUUsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQTRDO0VBQzVDLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBQ2xCO0lBUkY7TUFTSSxrQkFBNEMsRUFBQSxFQUUvQzs7QUFFRDtFQUVJLHFEQUE4QyxFQUFBOztBQUlsRDs7RUFFRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUl2QiwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBSXJCLCtCQUErQixFQUFBOztBQUdqQzs7OztFQUlFLFVBQVU7RUFJViw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBM0drQjtFQTRHbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBUGxCO0lBVUksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsOEJBQTJCO0VBQzNCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxrQkF0SWtCLEVBQUE7O0FBeUlwQjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUNmO0lBSkY7TUFLSSxlQUFlLEVBQUEsRUFFbEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhbnktcGFnZS9jb21wYW55LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDIzNCwgMjM0LCAwLjkpO1xuJGltYWdlLWhlaWdodDogMzUwcHg7XG4kb3ZlcmxheS1tYXJnaW46IDIwcHg7XG4kbW9iaWxlLWJyZWFrLXBvaW50OiA2MDBweDtcblxucCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWNhcmQge1xuICBwYWRkaW5nOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDEwMHB4O1xufVxuXG5iYWNrLWJ1dHRvbiB7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG5oMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAycHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgbWFyZ2luOiAxMDBweCAyNXB4IDE1cHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZS1icmVhay1wb2ludCkge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuXG5tYXQtY2hpcC1saXN0IHtcbiAgbWF0LWNoaXAge1xuICAgIGJvcmRlci13aWR0aDogMS41cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxufVxuXG5pLFxubWF0LWljb24ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmltYWdlLW92ZXJsYXktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAtJGltYWdlLWhlaWdodCArICRvdmVybGF5LW1hcmdpbiAwIDA7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUtYnJlYWstcG9pbnQpIHtcbiAgICBtYXJnaW4tdG9wOiAtJGltYWdlLWhlaWdodCArICRvdmVybGF5LW1hcmdpbjtcbiAgfVxufVxuXG4uY2hpcC1saXN0IHtcbiAgbWF0LWNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmluc3RhZ3JhbSxcbi53ZWJzaXRlLXVybCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5pbnN0YWdyYW0gYTpob3Zlcixcbi5pbnN0YWdyYW06aG92ZXIsXG4ud2Vic2l0ZS11cmwgYTpob3Zlcixcbi53ZWJzaXRlLXVybDpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW47XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAkaW1hZ2UtaGVpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLmltYWdlLWNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXEEnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaW1nLWNvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBtYXJnaW4tdG9wOiAtJGltYWdlLWhlaWdodDtcbn1cblxuLmNoaXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnByb2ZpbGUtaW5mbyB7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZS1icmVhay1wb2ludCkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufSJdfQ== */"

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
    function CompanyPageComponent(route, router, companiesService, searchService) {
        this.route = route;
        this.router = router;
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
    CompanyPageComponent.prototype.onBackClicked = function () {
        this.router.navigateByUrl('/');
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
            console.log(_this.companyParam);
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
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
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

module.exports = "mat-icon {\n  width: 90px;\n  height: 90px;\n  font-size: 90px;\n  border-radius: 50%;\n  padding: 10px;\n  color: red;\n  background-color: white;\n  transition: all 1s ease-out;\n  cursor: pointer; }\n\nmat-icon:hover {\n  color: white;\n  background-color: red;\n  transition: all 0.5s ease-in; }\n\n.mat-icon-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 60%; }\n\n.company-name {\n  font-size: 20px;\n  font-weight: 800;\n  margin-left: 5px; }\n\n.message {\n  display: flex;\n  align-items: flex-end;\n  margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1wYWdlL3ByZXNlbnRhdGlvbmFscy9jb21wYW55LW5vdC1mb3VuZC9jb21wYW55LW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLHVCQUF1QjtFQUl2QiwyQkFBMkI7RUFDM0IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFJckIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LXBhZ2UvcHJlc2VudGF0aW9uYWxzL2NvbXBhbnktbm90LWZvdW5kL2NvbXBhbnktbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBmb250LXNpemU6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWF0LWljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG59XG5cbi5tYXQtaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAyMHB4O1xufSJdfQ== */"

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

module.exports = "h1 {\n  margin: 0 auto 10px !important; }\n\nh2 {\n  margin: 0 0 10px; }\n\n@media only screen and (max-width: 900px) {\n    h2 {\n      text-align: center; } }\n\nh4 {\n  border-radius: 20%;\n  border: 1px;\n  display: inline-flex; }\n\nmat-chip {\n  font-size: 12px;\n  padding: 5px 7px; }\n\nmat-card {\n  display: flex;\n  flex-direction: row;\n  padding: 20px !important;\n  margin: 20px;\n  cursor: pointer; }\n\n@media only screen and (max-width: 900px) {\n    mat-card {\n      padding: 0 0 10px !important;\n      flex-direction: column;\n      margin-left: 0;\n      margin-right: 0;\n      border-radius: 0; } }\n\n.mat-card-child {\n  flex-basis: 50%; }\n\n@media only screen and (max-width: 900px) {\n    .mat-card-child {\n      flex-basis: unset; } }\n\n:host ::ng-deep .mat-chip-list-wrapper {\n  margin: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center; }\n\n.image-container {\n  min-width: 80px;\n  border-radius: 4px;\n  height: 160px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n\n@media only screen and (max-width: 900px) {\n    .image-container {\n      border-radius: 0; } }\n\nimg {\n  flex-shrink: 0;\n  height: 100%; }\n\n@media only screen and (max-width: 900px) {\n    img {\n      width: 100%;\n      height: auto; } }\n\n.inline {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 20%; }\n\n.info {\n  margin: 10px 10px 10px 25px; }\n\n@media only screen and (max-width: 900px) {\n    .info {\n      margin: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3ByZXNlbnRhdGlvbmFscy9saW5lLWl0ZW0vbGluZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBQ2hCO0lBRkY7TUFHSSxrQkFBa0IsRUFBQSxFQUVyQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBQ2Y7SUFORjtNQU9JLDRCQUE0QjtNQUM1QixzQkFBc0I7TUFDdEIsY0FBYztNQUNkLGVBQWU7TUFDZixnQkFBZ0IsRUFBQSxFQUVuQjs7QUFFRDtFQUNFLGVBQWUsRUFBQTs7QUFDZjtJQUZGO01BR0ksaUJBQWlCLEVBQUEsRUFFcEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFDaEI7SUFSRjtNQVNJLGdCQUFnQixFQUFBLEVBRW5COztBQUVEO0VBQ0UsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFDWjtJQUhGO01BSUksV0FBVztNQUNYLFlBQVksRUFBQSxFQUVmOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDJCQUEyQixFQUFBOztBQUMzQjtJQUZGO01BR0ksWUFBWSxFQUFBLEVBRWYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9wcmVzZW50YXRpb25hbHMvbGluZS1pdGVtL2xpbmUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtb2JpbGUtYnJlYWstcG9pbnQ6IDkwMHB4O1xuXG5oMSB7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHggIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUtYnJlYWstcG9pbnQpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuaDQge1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIGJvcmRlcjogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxubWF0LWNoaXAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrLXBvaW50KSB7XG4gICAgcGFkZGluZzogMCAwIDEwcHggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG5cbi5tYXQtY2FyZC1jaGlsZCB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrLXBvaW50KSB7XG4gICAgZmxleC1iYXNpczogdW5zZXQ7XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUtYnJlYWstcG9pbnQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG5cbmltZyB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZS1icmVhay1wb2ludCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4uaW5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmluZm8ge1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDI1cHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZS1icmVhay1wb2ludCkge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxufSJdfQ== */"

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

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.container {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 290px;\n  height: 100px; }\n\n.container .search {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n    background: crimson;\n    border-radius: 50%;\n    border-color: black;\n    border-width: 2px;\n    border-style: solid;\n    transition: all 1s;\n    z-index: 4;\n    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4); }\n\n.container .search:hover {\n      cursor: pointer; }\n\n.container .search::before {\n      content: \"\";\n      position: absolute;\n      margin: auto;\n      top: 12px;\n      right: 0;\n      bottom: 0;\n      left: 12px;\n      width: 12px;\n      height: 2px;\n      background: white;\n      transform: rotate(45deg);\n      transition: all 0.5s; }\n\n.container .search::after {\n      content: \"\";\n      position: absolute;\n      margin: auto;\n      top: -5px;\n      right: 0;\n      bottom: 0;\n      left: -5px;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      border: 2px solid white;\n      transition: all 0.5s; }\n\n.container input {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 50px;\n    height: 50px;\n    outline: none;\n    border: none;\n    background: crimson;\n    color: white;\n    text-shadow: 0 0 10px crimson;\n    padding: 0 80px 0 20px;\n    border-radius: 30px;\n    transition: all 1s;\n    opacity: 0;\n    z-index: 5;\n    font-weight: bolder; }\n\n.container input:hover {\n      cursor: pointer; }\n\n.container input:focus {\n      width: 290px;\n      opacity: 1;\n      cursor: text; }\n\n.container input:focus ~ .search {\n      right: -240px;\n      background: #151515;\n      z-index: 6; }\n\n.container input:focus ~ .search::before {\n        top: 0;\n        left: 0;\n        width: 25px; }\n\n.container input:focus ~ .search::after {\n        top: 0;\n        left: 0;\n        width: 25px;\n        height: 2px;\n        border: none;\n        background: white;\n        border-radius: 0;\n        transform: rotate(-45deg); }\n\n.container input::-moz-placeholder {\n      color: white;\n      opacity: 0.5;\n      font-weight: bolder; }\n\n.container input::-ms-input-placeholder {\n      color: white;\n      opacity: 0.5;\n      font-weight: bolder; }\n\n.container input::placeholder {\n      color: white;\n      opacity: 0.5;\n      font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3ByZXNlbnRhdGlvbmFscy9tb2JpbGUtc2VhcmNoL21vYmlsZS1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBUmY7SUFXSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5Q0FBeUMsRUFBQTs7QUExQjdDO01BNkJNLGVBQWUsRUFBQTs7QUE3QnJCO01BaUNNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFNBQVM7TUFDVCxRQUFRO01BQ1IsU0FBUztNQUNULFVBQVU7TUFDVixXQUFXO01BQ1gsV0FBVztNQUNYLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsb0JBQW9CLEVBQUE7O0FBNUMxQjtNQWdETSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixTQUFTO01BQ1QsUUFBUTtNQUNSLFNBQVM7TUFDVCxVQUFVO01BQ1YsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLG9CQUFvQixFQUFBOztBQTNEMUI7SUFnRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsbUJBQW1CLEVBQUE7O0FBbEZ2QjtNQXFGTSxlQUFlLEVBQUE7O0FBckZyQjtNQXlGTSxZQUFZO01BQ1osVUFBVTtNQUNWLFlBQVksRUFBQTs7QUEzRmxCO01BK0ZNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsVUFBVSxFQUFBOztBQWpHaEI7UUFvR1EsTUFBTTtRQUNOLE9BQU87UUFDUCxXQUFXLEVBQUE7O0FBdEduQjtRQTBHUSxNQUFNO1FBQ04sT0FBTztRQUNQLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIseUJBQXlCLEVBQUE7O0FBakhqQztNQXNITSxZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQixFQUFBOztBQXhIekI7TUFzSE0sWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBbUIsRUFBQTs7QUF4SHpCO01Bc0hNLFlBQVk7TUFDWixZQUFZO01BQ1osbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9wcmVzZW50YXRpb25hbHMvbW9iaWxlLXNlYXJjaC9tb2JpbGUtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcblxuICAuc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICB6LWluZGV4OiA0O1xuICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB0b3A6IDEycHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDEycHg7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgdG9wOiAtNXB4O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAtNXB4O1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IGNyaW1zb247XG4gICAgcGFkZGluZzogMCA4MHB4IDAgMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGN1cnNvcjogdGV4dDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIH4gLnNlYXJjaCB7XG4gICAgICByaWdodDogLTI0MHB4O1xuICAgICAgYmFja2dyb3VuZDogIzE1MTUxNTtcbiAgICAgIHotaW5kZXg6IDY7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG4gIH1cbn0iXX0= */"

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

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- search bar -->\n<mobile-search [control]=\"searchControl\" [placeHolder]=\"placeHolder\">\n</mobile-search>\n<div [ngClass]=\"focus + ' ' + stickMenu\"\n  class=\"search-container ease-background ease-padding ease-height\">\n  <mat-form-field class=\"form-field\" appearance=\"outline\">\n    <mat-label class=\"search-title\">Search</mat-label>\n    <input matInput [placeholder]=\"placeHolder\" autocomplete=\"off\"\n      [formControl]=\"searchControl\" (blur)=\"onBlur()\" (focus)=\"onFocus()\">\n  </mat-form-field>\n  <div *ngIf=\"activeTags && activeTags.length > 0\" class=\"tag-container\">\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let tag of activeTags\" color=\"primary\"\n        (click)=\"removeTag(tag)\">#{{tag.name}}\n      </mat-chip>\n    </mat-chip-list>\n  </div>\n</div>\n<!-- results -->\n<div class=\"results-container\">\n  <ng-container *ngIf=\" showSearchResult && searchResult.length !=0\">\n    <div class=\"search-result-container\">\n      <line-item *ngFor=\"let result of searchResult\" [config]=\"result\"\n        [searchValue]=\"searchValue\" (tagClicked)=\"addTag($event)\"\n        (itemSelected)=\"onItemSelected(result)\"></line-item>\n    </div>\n    <ng-container *ngIf=\"suggestionResult.length != 0\">\n      <h2>Suggestions</h2>\n      <line-item *ngFor=\"let result of suggestionResult\" [config]=\"result\"\n        [searchValue]=\"searchValue\" (itemSelected)=\"onItemSelected(result)\"\n        (tagClicked)=\"addTag($event)\">\n      </line-item>\n    </ng-container>\n  </ng-container>\n  <div *ngIf=\"!searchResult.length && companies.length\"\n    class=\"no-result-container\">\n    <div *ngIf=\"searchResult.length == 0\" class=\"no-result-text\">\n      <h4>No results for this search, check below</h4>\n      <h5 *ngIf=\"activeTags.length\">remove tags for a more general search</h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mobile-search {\n  top: 50px;\n  display: none;\n  position: fixed;\n  z-index: 2; }\n  @media only screen and (max-width: 600px) {\n    mobile-search {\n      display: block; } }\n  .results-container {\n  margin-left: 25px;\n  margin-right: 25px; }\n  @media only screen and (max-width: 600px) {\n    .results-container {\n      margin-left: 0;\n      margin-right: 0; } }\n  :host ::ng-deep .mat-form-field-label-wrapper {\n  top: -1em; }\n  :host ::ng-deep .mat-form-field-infix {\n  margin-left: 15px;\n  padding-top: 10px; }\n  :host ::ng-deep .mat-form-field-label {\n  margin-left: 20px; }\n  :host ::ng-deep .mat-form-field-outline .mat-form-field-outline-end {\n  border-radius: 0 40px 40px 0; }\n  :host ::ng-deep .mat-form-field-outline .mat-form-field-outline-start {\n  width: 40px !important;\n  border-radius: 40px 0 0 40px; }\n  :host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin-bottom: -10px; }\n  .form-field,\n.tag-container {\n  width: inherit;\n  margin: 0 100px; }\n  @media only screen and (max-width: 600px) {\n    .form-field,\n    .tag-container {\n      margin: 10px 20px; } }\n  .search-container {\n  text-align: center;\n  position: fixed;\n  width: -webkit-fill-available;\n  left: 0;\n  top: 0;\n  padding: 10px 50px 0;\n  z-index: 2;\n  display: block; }\n  .search-container input {\n    transition: font-size 0.5s ease-out; }\n  @media only screen and (max-width: 600px) {\n    .search-container {\n      display: none; } }\n  .ease-padding {\n  transition: padding 0.5s ease-out, background-color 1s ease-out; }\n  .stick-menu {\n  background-color: rgba(255, 0, 0, 0.5);\n  padding: 0 50px 0; }\n  @media only screen and (max-width: 600px) {\n    .stick-menu {\n      padding: 0; } }\n  .unstick-menu {\n  background-color: red;\n  padding: 10px 50px 0; }\n  @media only screen and (max-width: 600px) {\n    .unstick-menu {\n      padding: 0; } }\n  .search-open input {\n  margin-bottom: 0;\n  font-size: 37px; }\n  mat-label {\n  font-size: 15px; }\n  mat-chip-list mat-chip {\n  margin-top: -7px; }\n  mat-chip-list ::ng-deep .mat-chip-list-wrapper {\n  height: 40px; }\n  .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary:hover {\n  background-color: grey;\n  color: black; }\n  @media only screen and (max-width: 600px) {\n  .no-result-text {\n    padding: 50px 0;\n    height: 100%; }\n    .no-result-text h4 {\n      margin: 0 !important; } }\n  h1,\nh2,\nh4,\nh5 {\n  text-align: center; }\n  h4 {\n  text-transform: uppercase; }\n  @media only screen and (max-width: 600px) {\n  .no-result-container {\n    padding-top: 100px;\n    height: 100%; } }\n  @media only screen and (max-width: 600px) {\n  .result-title {\n    margin-bottom: 0;\n    padding: 110px 0 0; } }\n  .search-result-container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly; }\n  .search-result-container line-item {\n    width: 50%;\n    max-width: 400px; }\n  @media only screen and (max-width: 900px) {\n      .search-result-container line-item {\n        display: flex; } }\n  @media only screen and (max-width: 750px) {\n      .search-result-container line-item {\n        display: unset;\n        width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVUsRUFBQTtFQUNWO0lBTEY7TUFNSSxjQUFjLEVBQUEsRUFFakI7RUFFRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQUNsQjtJQUhGO01BSUksY0FBYztNQUNkLGVBQWUsRUFBQSxFQUVsQjtFQUVEO0VBRUksU0FBUyxFQUFBO0VBRmI7RUFNSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7RUFQckI7RUFXSSxpQkFBaUIsRUFBQTtFQVhyQjtFQWdCTSw0QkFBNEIsRUFBQTtFQWhCbEM7RUFvQk0sc0JBQXNCO0VBQ3RCLDRCQUE0QixFQUFBO0VBckJsQztFQTJCTSxvQkFBb0IsRUFBQTtFQUsxQjs7RUFFRSxjQUFjO0VBQ2QsZUFBZSxFQUFBO0VBQ2Y7SUFKRjs7TUFLSSxpQkFBaUIsRUFBQSxFQUVwQjtFQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsT0FBTztFQUNQLE1BQU07RUFDTixvQkFyRWlDO0VBc0VqQyxVQUFVO0VBUVYsY0FBYyxFQUFBO0VBZmhCO0lBYUksbUNBQW1DLEVBQUE7RUFHckM7SUFoQkY7TUFpQkksYUFBYSxFQUFBLEVBRWhCO0VBRUQ7RUFJRSwrREFBK0QsRUFBQTtFQUdqRTtFQUNFLHNDQUFzQztFQUN0QyxpQkE1RitCLEVBQUE7RUE2Ri9CO0lBSEY7TUFJSSxVQUFVLEVBQUEsRUFFYjtFQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQXJHaUMsRUFBQTtFQXNHakM7SUFIRjtNQUlJLFVBQVUsRUFBQSxFQUViO0VBRUQ7RUFFSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBSW5CO0VBQ0UsZUFBZSxFQUFBO0VBR2pCO0VBRUksZ0JBQWdCLEVBQUE7RUFGcEI7RUFNSSxZQUFZLEVBQUE7RUFJaEI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBO0VBSVo7RUFERjtJQUVJLGVBQWU7SUFDZixZQUFZLEVBQUE7SUFIaEI7TUFNTSxvQkFBb0IsRUFBQSxFQUNyQjtFQUlMOzs7O0VBSUUsa0JBQWtCLEVBQUE7RUFHcEI7RUFDRSx5QkFBeUIsRUFBQTtFQUl6QjtFQURGO0lBRUksa0JBQWtCO0lBQ2xCLFlBQVksRUFBQSxFQUVmO0VBR0M7RUFERjtJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQSxFQUVyQjtFQUVEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkIsRUFBQTtFQUgvQjtJQU1JLFVBQVU7SUFDVixnQkFBZ0IsRUFBQTtFQUNoQjtNQVJKO1FBU00sYUFBYSxFQUFBLEVBTWhCO0VBSkM7TUFYSjtRQVlNLGNBQWM7UUFDZCxXQUFXLEVBQUEsRUFFZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzZWFyY2gtcGFkZGluZy1ub3JtYWw6IDEwcHggNTBweCAwO1xuJHNlYXJjaC1wYWRkaW5nLXJlZHVjZWQ6IDAgNTBweCAwO1xuXG5tb2JpbGUtc2VhcmNoIHtcbiAgdG9wOiA1MHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ucmVzdWx0cy1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0xZW07XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCA0MHB4IDQwcHggMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XG4gICAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNDBweCAwIDAgNDBweDtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tZmllbGQsXG4udGFnLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBtYXJnaW46IDAgMTAwcHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgfVxufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAkc2VhcmNoLXBhZGRpbmctbm9ybWFsO1xuICB6LWluZGV4OiAyO1xuXG4gIGlucHV0IHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjVzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXMgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXMgZWFzZS1vdXQ7XG4gIH1cbiAgZGlzcGxheTogYmxvY2s7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5lYXNlLXBhZGRpbmcge1xuICAtd2Via2l0LXRyYW5zaXRpb246IHBhZGRpbmcgMC41cyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXMgZWFzZS1vdXQsIGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IHBhZGRpbmcgMC41cyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzIGVhc2Utb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xufVxuXG4uc3RpY2stbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nOiAkc2VhcmNoLXBhZGRpbmctcmVkdWNlZDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLnVuc3RpY2stbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcGFkZGluZzogJHNlYXJjaC1wYWRkaW5nLW5vcm1hbDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLnNlYXJjaC1vcGVuIHtcbiAgaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAzN3B4O1xuICB9XG59XG5cbm1hdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxubWF0LWNoaXAtbGlzdCB7XG4gIG1hdC1jaGlwIHtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5uby1yZXN1bHQtdGV4dCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgaDQge1xuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbmgxLFxuaDIsXG5oNCxcbmg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5uby1yZXN1bHQtY29udGFpbmVyIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLnJlc3VsdC10aXRsZSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDExMHB4IDAgMDtcbiAgfVxufVxuXG4uc2VhcmNoLXJlc3VsdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuICBsaW5lLWl0ZW0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufSJdfQ== */"

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
        this.requiredScrollPos = 50;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchResult = this.companies;
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
    SearchComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > this.requiredScrollPos) {
            this.stickMenu = 'stick-menu';
        }
        else {
            this.stickMenu = 'unstick-menu';
        }
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
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _presentationals_line_item_line_item_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./presentationals/line-item/line-item.module */ "./src/app/components/search/presentationals/line-item/line-item.module.ts");
/* harmony import */ var _presentationals_mobile_search_mobile_search_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presentationals/mobile-search/mobile-search.module */ "./src/app/components/search/presentationals/mobile-search/mobile-search.module.ts");










var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _presentationals_mobile_search_mobile_search_module__WEBPACK_IMPORTED_MODULE_9__["MobileSearchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _presentationals_line_item_line_item_module__WEBPACK_IMPORTED_MODULE_8__["LineItemModule"],
            ],
            exports: [_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]],
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
                about: 'TODO TODO TODO TODO TODO',
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
            // return of(this._companies_old);
            var _this = this;
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
                        return "break";
                    }
                    var row = rowData[entry].values;
                    var tags = [];
                    if (row[6]) {
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