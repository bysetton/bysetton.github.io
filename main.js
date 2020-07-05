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
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'brand/:company', component: _components_company_page_company_page_component__WEBPACK_IMPORTED_MODULE_4__["CompanyPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<search (blur)=\"onSearchFocus($event)\"></search>\n<router-outlet *ngIf=\"!searchFocus\"></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-material-app';
    }
    AppComponent.prototype.onSearchFocus = function (state) {
        var _this = this;
        console.log('----<<<', state);
        setTimeout(function () { return _this.searchFocus = state; }, 100);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.module */ "./src/app/components/home/home.module.ts");
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.module */ "./src/app/components/search/search.module.ts");
/* harmony import */ var _components_company_page_company_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/company-page/company-page.module */ "./src/app/components/company-page/company-page.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _components_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                _components_search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
                _components_company_page_company_page_module__WEBPACK_IMPORTED_MODULE_8__["CompanyPageModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = ".button-container {\n  max-width: 100%;\n  margin: 0 100px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2JhY2stYnV0dG9uL2JhY2stYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vYmFjay1idXR0b24vYmFjay1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDEwMHB4IDEwcHg7XG59Il19 */"

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

module.exports = "<div class=\"card-container\" *ngIf=\"company\">\n  <back-button (clicked)=\"onBackClicked()\"></back-button>\n  <mat-card>\n    <div class=\"profile-info\">\n      <div class=\"image-container\">\n        <img\n          [src]=\"company.img || 'https://i.pinimg.com/originals/82/1a/a8/821aa80c546ac7d554e4ac0de0e95cb8.jpg'\">\n      </div>\n      <div class=\"info\">\n        <h1>{{company.name}}</h1>\n        <div class=\"website-url\">\n          <a *ngIf=\"company.websiteUrl && company.websiteDisplay\"\n            [href]=\"company.websiteUrl\"\n            target=\"_blank\">{{company.websiteDisplay}}</a>\n        </div>\n        <mat-chip-list class=\"chip-list\">\n          <mat-chip *ngFor=\"let tag of company.tags\" color=\"primary\" selected\n            (click)=\"hashtagClicked(tag)\" class=\"chip\">{{tag.name}}\n          </mat-chip>\n        </mat-chip-list>\n      </div>\n    </div>\n    <mat-card-content>\n      {{company.about}}\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/company-page/company-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/company-page/company-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  padding: 50px !important;\n  max-width: 100%;\n  margin: 0 100px; }\n\nh1 {\n  font-size: 50px;\n  width: 100%;\n  margin-bottom: 10px;\n  margin-top: 0; }\n\n.website-url {\n  margin: 10px; }\n\n.website-url a {\n    color: black;\n    text-decoration: none;\n    transition: color 0.3s ease-out; }\n\n.website-url a:hover {\n    color: red; }\n\n.image-container {\n  border-radius: 4px;\n  width: 80%;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n\n.image-container img {\n  flex-shrink: 0;\n  width: 100%; }\n\n.chip {\n  display: inline-flex; }\n\n:host ::ng-deep .mat-chip-list-wrapper {\n  align-items: left; }\n\n.card-container {\n  height: 100%; }\n\n.profile-info {\n  align-items: left;\n  display: flex; }\n\n.info {\n  margin-left: 50px;\n  width: 100%; }\n\n.mat-card-content {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1wYWdlL2NvbXBhbnktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVksRUFBQTs7QUFEZDtJQUlJLFlBQVk7SUFDWixxQkFBcUI7SUFJckIsK0JBQStCLEVBQUE7O0FBVG5DO0lBYUksVUFBVSxFQUFBOztBQUlkO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhbnktcGFnZS9jb21wYW55LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDUwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMTAwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLndlYnNpdGUtdXJsIHtcbiAgbWFyZ2luOiAxMHB4O1xuXG4gIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XG4gIH1cblxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoaXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogbGVmdDtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvZmlsZS1pbmZvIHtcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */"

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
        this.router.navigateByUrl('/home');
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
/* harmony import */ var _company_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-page.component */ "./src/app/components/company-page/company-page.component.ts");
/* harmony import */ var _common_back_button_back_button_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/back-button/back-button.module */ "./src/app/components/common/back-button/back-button.module.ts");








var CompanyPageModule = /** @class */ (function () {
    function CompanyPageModule() {
    }
    CompanyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_company_page_component__WEBPACK_IMPORTED_MODULE_6__["CompanyPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_back_button_back_button_module__WEBPACK_IMPORTED_MODULE_7__["BackButtonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            ],
            exports: [_company_page_component__WEBPACK_IMPORTED_MODULE_6__["CompanyPageComponent"]],
        })
    ], CompanyPageModule);
    return CompanyPageModule;
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

module.exports = "<mat-card (click)=\"onCardClick()\" class=\"mobile-card\">\n  <div class=\"profile-info\">\n    <div class=\"image-container\">\n      <img\n        [src]=\"config.img || 'https://i.pinimg.com/originals/82/1a/a8/821aa80c546ac7d554e4ac0de0e95cb8.jpg'\">\n    </div>\n    <div class=\"info\">\n      <h1>{{config.name}}</h1>\n      <mat-chip-list>\n        <mat-chip *ngFor=\"let tag of config.tags\" color=\"primary\"\n          (click)=\"hashtagClicked(tag)\">{{tag.name}}\n        </mat-chip>\n      </mat-chip-list>\n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/search/presentationals/line-item/line-item.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/search/presentationals/line-item/line-item.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 20px; }\n\nmat-card {\n  padding: 20px !important;\n  cursor: pointer; }\n\n.mat-chip-list-wrapper {\n  margin: 10px; }\n\nimg {\n  width: 100px; }\n\n.image-container {\n  border-radius: 4px;\n  width: 70%;\n  height: 130px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; }\n\n.image-container img {\n  flex-shrink: 0;\n  width: 100%; }\n\n.inline {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 20%; }\n\n.profile-info {\n  align-items: center;\n  display: flex; }\n\n.info {\n  width: 100%;\n  margin: 10px 10px 10px 25px; }\n\nh1 {\n  margin: 0 auto 10px !important; }\n\nh4 {\n  border-radius: 20%;\n  border: 1px;\n  display: inline-flex; }\n\nmat-chip:focus {\n  background-color: transparent !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3ByZXNlbnRhdGlvbmFscy9saW5lLWl0ZW0vbGluZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSx3Q0FBd0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3ByZXNlbnRhdGlvbmFscy9saW5lLWl0ZW0vbGluZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLnByb2ZpbGUtaW5mbyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMjVweDtcbn1cblxuaDEge1xuICBtYXJnaW46IDAgYXV0byAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmg0IHtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBib3JkZXI6IDFweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbm1hdC1jaGlwOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXX0= */"

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
    LineItemComponent.prototype.onCardClick = function (company) {
        this.itemSelected.emit(company);
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

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"focus + ' ' + stickMenu\"\n  class=\"search-container ease-background ease-padding ease-height\">\n  <mat-form-field class=\"form-field\">\n    <mat-label class=\"search-title\">Search</mat-label>\n    <input matInput placeholder=\"Eg. Craft beer\" autocomplete=\"off\"\n      [formControl]=\"searchControl\" (blur)=\"onBlur()\" (focus)=\"onFocus()\">\n  </mat-form-field>\n  <div *ngIf=\"activeTags && activeTags.length > 0\" class=\"tag-container\">\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let tag of activeTags\" color=\"primary\"\n        (click)=\"removeTag(tag)\">#{{tag.name}}\n      </mat-chip>\n    </mat-chip-list>\n  </div>\n</div>\n<ng-container *ngIf=\"showSearchResult && searchResult.length != 0\">\n  <h1 class=\"result-title\">Full results</h1>\n  <div class=\"search-result-container\">\n    <line-item *ngFor=\"let result of searchResult\" [config]=\"result\"\n      [searchValue]=\"searchValue\" (tagClicked)=\"addTag($event)\"\n      (itemSelected)=\"onItemSelected(result)\"></line-item>\n  </div>\n  <ng-container *ngIf=\"suggestionResult.length != 0\">\n    <h2>Suggestions</h2>\n    <line-item *ngFor=\"let result of suggestionResult\" [config]=\"result\"\n      [searchValue]=\"searchValue\" (itemSelected)=\"onItemSelected(result)\"\n      (tagClicked)=\"addTag($event)\">\n    </line-item>\n  </ng-container>\n  <div *ngIf=\"searchResult.length == 0\" class=\"no-result-container\">\n    <h1 class=\"no-result-title\">Full results</h1>\n    <div *ngIf=\"searchResult.length == 0\" class=\"no-result-text\">\n      <h4>No results for this search, check below</h4>\n      <h5>remove tags for more general search</h5>\n    </div>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-field,\n.tag-container {\n  width: inherit;\n  margin: 0 100px; }\n\n.search-container {\n  text-align: center;\n  position: fixed;\n  width: -webkit-fill-available;\n  left: 0;\n  top: 0;\n  padding: 10px 50px 0;\n  z-index: 2; }\n\n.search-container input {\n    transition: font-size 0.5s ease-out; }\n\n.ease-padding {\n  transition: padding 0.5s ease-out, background-color 1s ease-out; }\n\n.stick-menu {\n  padding: 0 50px 0;\n  background-color: rgba(255, 0, 0, 0.5); }\n\n.unstick-menu {\n  padding: 10px 50px 0;\n  background-color: red; }\n\n.search-open {\n  padding: 10px 50px 0;\n  background-color: red; }\n\n.search-open input {\n    margin-bottom: 0;\n    font-size: 37px; }\n\n.search-closed input {\n  font-size: 37px; }\n\nmat-label {\n  font-size: 15px; }\n\nmat-chip-list mat-chip {\n  margin-top: -7px; }\n\nmat-chip-list ::ng-deep .mat-chip-list-wrapper {\n  height: 40px; }\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary:hover {\n  background-color: grey;\n  color: black; }\n\n@media only screen and (max-width: 600px) {\n  .no-result-text {\n    padding: 50px 0;\n    height: 100%; }\n    .no-result-text h4 {\n      margin: 0 !important; } }\n\nh1,\nh2,\nh4,\nh5 {\n  text-align: center; }\n\nh4 {\n  text-transform: uppercase; }\n\n@media only screen and (max-width: 600px) {\n  .no-result-container {\n    padding-top: 100px;\n    height: 100%; } }\n\n@media only screen and (max-width: 600px) {\n  .result-title {\n    margin-bottom: 0;\n    padding: 110px 0 0; } }\n\n.search-result-container {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 100px; }\n\n.search-result-container line-item:nth-child(even) {\n    margin-right: 100px; }\n\n.search-result-container line-item:nth-child(odd) {\n    margin-left: 100px; }\n\n.search-result-container line-item {\n    flex-grow: 1;\n    width: calc(50% - 150px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhcmFrL2ZpbmRTQS9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLE9BQU87RUFDUCxNQUFNO0VBQ04sb0JBZmlDO0VBZ0JqQyxVQUFVLEVBQUE7O0FBUFo7SUFhSSxtQ0FBbUMsRUFBQTs7QUFJdkM7RUFJRSwrREFBK0QsRUFBQTs7QUFHakU7RUFDRSxpQkFqQytCO0VBa0MvQixzQ0FBc0MsRUFBQTs7QUFHeEM7RUFDRSxvQkF2Q2lDO0VBd0NqQyxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxvQkE1Q2lDO0VBNkNqQyxxQkFBcUIsRUFBQTs7QUFGdkI7SUFLSSxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBOztBQUluQjtFQUVJLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBRUksZ0JBQWdCLEVBQUE7O0FBRnBCO0VBTUksWUFBWSxFQUFBOztBQUloQjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBSVo7RUFERjtJQUVJLGVBQWU7SUFDZixZQUFZLEVBQUE7SUFIaEI7TUFNTSxvQkFBb0IsRUFBQSxFQUNyQjs7QUFJTDs7OztFQUlFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QixFQUFBOztBQUl6QjtFQURGO0lBRUksa0JBQWtCO0lBQ2xCLFlBQVksRUFBQSxFQUVmOztBQUdDO0VBREY7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUEsRUFFckI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQixFQUFBOztBQUh0QjtJQU1JLG1CQUFtQixFQUFBOztBQU52QjtJQVVJLGtCQUFrQixFQUFBOztBQVZ0QjtJQWNJLFlBQVk7SUFDWix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzZWFyY2gtcGFkZGluZy1ub3JtYWw6IDEwcHggNTBweCAwO1xuJHNlYXJjaC1wYWRkaW5nLXJlZHVjZWQ6IDAgNTBweCAwO1xuXG4uZm9ybS1maWVsZCxcbi50YWctY29udGFpbmVyIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIG1hcmdpbjogMCAxMDBweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogJHNlYXJjaC1wYWRkaW5nLW5vcm1hbDtcbiAgei1pbmRleDogMjtcblxuICBpbnB1dCB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmb250LXNpemUgMC41cyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjVzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjVzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjVzIGVhc2Utb3V0O1xuICB9XG59XG5cbi5lYXNlLXBhZGRpbmcge1xuICAtd2Via2l0LXRyYW5zaXRpb246IHBhZGRpbmcgMC41cyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXMgZWFzZS1vdXQsIGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IHBhZGRpbmcgMC41cyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzIGVhc2Utb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xufVxuXG4uc3RpY2stbWVudSB7XG4gIHBhZGRpbmc6ICRzZWFyY2gtcGFkZGluZy1yZWR1Y2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbn1cblxuLnVuc3RpY2stbWVudSB7XG4gIHBhZGRpbmc6ICRzZWFyY2gtcGFkZGluZy1ub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNlYXJjaC1vcGVuIHtcbiAgcGFkZGluZzogJHNlYXJjaC1wYWRkaW5nLW5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXG4gIGlucHV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMzdweDtcbiAgfVxufVxuXG4uc2VhcmNoLWNsb3NlZCB7XG4gIGlucHV0IHtcbiAgICBmb250LXNpemU6IDM3cHg7XG4gIH1cbn1cblxubWF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5tYXQtY2hpcC1saXN0IHtcbiAgbWF0LWNoaXAge1xuICAgIG1hcmdpbi10b3A6IC03cHg7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm5vLXJlc3VsdC10ZXh0IHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBoNCB7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuaDEsXG5oMixcbmg0LFxuaDUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmg0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm5vLXJlc3VsdC1jb250YWluZXIge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4ucmVzdWx0LXRpdGxlIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZzogMTEwcHggMCAwO1xuICB9XG59XG5cbi5zZWFyY2gtcmVzdWx0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG5cbiAgbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIGxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICB9XG5cbiAgbGluZS1pdGVtIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB9XG59Il19 */"

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
/* harmony import */ var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/companies/companies.service */ "./src/app/services/companies/companies.service.ts");







var SearchComponent = /** @class */ (function () {
    function SearchComponent(companiesService, searchService, router, location) {
        this.companiesService = companiesService;
        this.searchService = searchService;
        this.router = router;
        this.location = location;
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.activeTags = [];
        this.stickMenu = 'unstick-menu';
        this.focus = 'search-close';
        this.companies = [];
        this.tagSearchResult = [];
        this.searchResult = [];
        this.companyNameSearchResult = [];
        this.aboutSearchResult = [];
        this.suggestionResult = [];
        this.requiredScrollPos = 50;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companiesService.companies.subscribe(function (companies) {
            _this.searchResult = _this.companies = companies;
            _this.maybeSetHomePage();
            _this.buildSearchControl();
            _this.setParamAndInit();
            _this.searchService.activeTags$.subscribe(function (actionTags) {
                _this.activeTags = actionTags;
                _this.refreshSearchResults();
                _this.updateParamsToUrl();
            });
            _this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                    _this.updateParamsToUrl();
                }
            });
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
            this.router.navigateByUrl('/home');
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
        this.router.navigateByUrl('/brand/' + company.name);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_6__["CompaniesService"],
            src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _presentationals_line_item_line_item_module__WEBPACK_IMPORTED_MODULE_8__["LineItemModule"],
            ],
            exports: [_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]],
            providers: [
                Window
            ],
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
                websiteUrl: 'https://humblecoffee.co.za/',
            },
            {
                name: 'JFF',
                img: '/assets/imgs/JFF-rooftop-farm-profile.jpg',
                about: 'TODO TODO TODO TODO TODO',
                tags: [{ name: 'female owned' }, { name: 'black owned' }],
                websiteDisplay: 'jffrooftopfarm.business.site',
                websiteUrl: 'https://jffrooftopfarm.business.site/',
            },
            {
                img: '/assets/imgs/the-nest-profile.jpg',
                name: 'The Nest',
                about: 'TODO TODO TODO TODO TODO',
                tags: [{ name: 'female owned' }, { name: 'black owned' }],
                websiteDisplay: 'thenestspace.co.za',
                websiteUrl: 'http://thenestspace.co.za',
            },
            {
                img: '/assets/imgs/native-nosi-profile.png',
                name: 'Native Nosi',
                about: 'TODO TODO TODO TODO TODO',
                tags: [{ name: 'female owned' }, { name: 'black owned' }],
                websiteDisplay: 'nativenosi.co.za',
                websiteUrl: 'https://nativenosi.co.za/',
            },
            {
                img: '/assets/imgs/tolokazi-beer-profile.jpeg',
                name: 'Tolokazi beer',
                about: 'TODO TODO TODO TODO TODO',
                tags: [{ name: 'female owned' }, { name: 'black owned' }],
                websiteDisplay: 'ukhambabeerworx.co.za',
                websiteUrl: 'https://www.ukhambabeerworx.co.za',
            },
        ];
    }
    Object.defineProperty(CompaniesService.prototype, "companies", {
        get: function () {
            var _this = this;
            if (this._companies.length != 0) {
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
        this._isHomePage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.activeTags = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._activeTags = [];
        this.router.events.subscribe(function (event) {
            if (event.urlAfterRedirects == '/home') {
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
                    row[6].formattedValue.split(',').forEach(function (tag) {
                        tags.push({ name: tag });
                    });
                    var company = {
                        name: row[1].formattedValue,
                        websiteUrl: row[2].formattedValue,
                        websiteDisplay: row[3].formattedValue,
                        email: row[4].formattedValue,
                        product: row[5].formattedValue,
                        tags: tags,
                        img: "/assets/imgs/" + row[7].formattedValue,
                        location: row[8].formattedValue,
                        delivery: row[9].formattedValue,
                        about: 'TODO abouts',
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