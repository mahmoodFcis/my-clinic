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
/* harmony import */ var _list_clinics_list_clinics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-clinics/list-clinics.component */ "./src/app/list-clinics/list-clinics.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register_doctor_register_doctor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-doctor/register-doctor.component */ "./src/app/register-doctor/register-doctor.component.ts");
/* harmony import */ var _clinic_detail_clinic_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clinic-detail/clinic-detail.component */ "./src/app/clinic-detail/clinic-detail.component.ts");
/* harmony import */ var _doctor_detail_doctor_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./doctor-detail/doctor-detail.component */ "./src/app/doctor-detail/doctor-detail.component.ts");
/* harmony import */ var _list_doctors_list_doctors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-doctors/list-doctors.component */ "./src/app/list-doctors/list-doctors.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");












var routes = [{ path: 'list-clinics', component: _list_clinics_list_clinics_component__WEBPACK_IMPORTED_MODULE_3__["ListClinicsComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'register-doctor', component: _register_doctor_register_doctor_component__WEBPACK_IMPORTED_MODULE_7__["RegisterDoctorComponent"] },
    { path: 'clinic-detail', component: _clinic_detail_clinic_detail_component__WEBPACK_IMPORTED_MODULE_8__["ClinicDetailComponent"] },
    { path: 'doctor-detail', component: _doctor_detail_doctor_detail_component__WEBPACK_IMPORTED_MODULE_9__["DoctorDetailComponent"] },
    { path: 'list-doctors', component: _list_doctors_list_doctors_component__WEBPACK_IMPORTED_MODULE_10__["ListDoctorsComponent"] },
    { path: 'booking', component: _booking_booking_component__WEBPACK_IMPORTED_MODULE_11__["BookingComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- Favicons-->\n<link rel=\"shortcut icon\" href=\"img/favicon.ico\" type=\"image/x-icon\">\n<link rel=\"apple-touch-icon\" type=\"image/x-icon\" href=\"img/apple-touch-icon-57x57-precomposed.png\">\n<link rel=\"apple-touch-icon\" type=\"image/x-icon\" sizes=\"72x72\" href=\"img/apple-touch-icon-72x72-precomposed.png\">\n<link rel=\"apple-touch-icon\" type=\"image/x-icon\" sizes=\"114x114\" href=\"img/apple-touch-icon-114x114-precomposed.png\">\n<link rel=\"apple-touch-icon\" type=\"image/x-icon\" sizes=\"144x144\" href=\"img/apple-touch-icon-144x144-precomposed.png\">\n\n<!-- GOOGLE WEB FONT -->\n  <link href=\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800\" rel=\"stylesheet\">\n\n\n\n<app-menu></app-menu>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

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
        this.appTitle = 'My Clinic';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _list_clinics_list_clinics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-clinics/list-clinics.component */ "./src/app/list-clinics/list-clinics.component.ts");
/* harmony import */ var _list_doctors_list_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-doctors/list-doctors.component */ "./src/app/list-doctors/list-doctors.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register_doctor_register_doctor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register-doctor/register-doctor.component */ "./src/app/register-doctor/register-doctor.component.ts");
/* harmony import */ var _doctor_detail_doctor_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./doctor-detail/doctor-detail.component */ "./src/app/doctor-detail/doctor-detail.component.ts");
/* harmony import */ var _clinic_detail_clinic_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clinic-detail/clinic-detail.component */ "./src/app/clinic-detail/clinic-detail.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _list_clinics_list_clinics_component__WEBPACK_IMPORTED_MODULE_8__["ListClinicsComponent"],
                _list_doctors_list_doctors_component__WEBPACK_IMPORTED_MODULE_9__["ListDoctorsComponent"],
                _booking_booking_component__WEBPACK_IMPORTED_MODULE_10__["BookingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _register_doctor_register_doctor_component__WEBPACK_IMPORTED_MODULE_13__["RegisterDoctorComponent"],
                _doctor_detail_doctor_detail_component__WEBPACK_IMPORTED_MODULE_14__["DoctorDetailComponent"],
                _clinic_detail_clinic_detail_component__WEBPACK_IMPORTED_MODULE_15__["ClinicDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking/booking.component.css":
/*!***********************************************!*\
  !*** ./src/app/booking/booking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvYm9va2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/booking/booking.component.html":
/*!************************************************!*\
  !*** ./src/app/booking/booking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div id=\"breadcrumb\">\n    <div class=\"container\">\n      <ul>\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">Category</a></li>\n        <li>Page active</li>\n      </ul>\n    </div>\n  </div>\n  <!-- /breadcrumb -->\n\n  <div class=\"container margin_60\">\n    <div class=\"row\">\n      <div class=\"col-xl-8 col-lg-8\">\n      <div class=\"box_general_3 cart\">\n        <div class=\"message\">\n          <p>Exisitng Customer? <a href=\"#0\">Click here to login</a></p>\n        </div>\n        <div class=\"form_title\">\n          <h3><strong>1</strong>Your Details</h3>\n          <p>\n            Mussum ipsum cacilds, vidis litro abertis.\n          </p>\n        </div>\n        <div class=\"step\">\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6\">\n              <div class=\"form-group\">\n                <label>First name</label>\n                <input type=\"text\" class=\"form-control\" id=\"firstname_booking\" name=\"firstname_booking\" placeholder=\"Jhon\">\n              </div>\n            </div>\n            <div class=\"col-md-6 col-sm-6\">\n              <div class=\"form-group\">\n                <label>Last name</label>\n                <input type=\"text\" class=\"form-control\" id=\"lastname_booking\" name=\"lastname_booking\" placeholder=\"Doe\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6\">\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"email\" id=\"email_booking\" name=\"email_booking\" class=\"form-control\" placeholder=\"jhon@doe.com\">\n              </div>\n            </div>\n            <div class=\"col-md-6 col-sm-6\">\n              <div class=\"form-group\">\n                <label>Confirm email</label>\n                <input type=\"email\" id=\"email_booking_2\" name=\"email_booking_2\" class=\"form-control\" placeholder=\"jhon@doe.com\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6\">\n              <div class=\"form-group\">\n                <label>Telephone</label>\n                <input type=\"text\" id=\"telephone_booking\" name=\"telephone_booking\" class=\"form-control\" placeholder=\"00 44 678 94329\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr>\n        <!--End step -->\n\n        <div class=\"form_title\">\n          <h3><strong>2</strong>Payment Information</h3>\n          <p>\n            Mussum ipsum cacilds, vidis litro abertis.\n          </p>\n        </div>\n        <div class=\"step\">\n          <div class=\"form-group\">\n            <label>Name on card</label>\n            <input type=\"text\" class=\"form-control\" id=\"name_card_booking\" name=\"name_card_booking\" placeholder=\"Jhon Doe\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Card number</label>\n                <input type=\"text\" id=\"card_number\" name=\"card_number\" class=\"form-control\" placeholder=\"xxxx - xxxx - xxxx - xxxx\">\n              </div>\n            </div>\n            <div class=\"col-md-6 col-sm-6\">\n              <img src=\"img/payments.png\" alt=\"Cards\" class=\"cards\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Expiration date</label>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" id=\"expire_month\" name=\"expire_month\" class=\"form-control\" placeholder=\"MM\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" id=\"expire_year\" name=\"expire_year\" class=\"form-control\" placeholder=\"Year\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Security code</label>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"ccv\" name=\"ccv\" class=\"form-control\" placeholder=\"CCV\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-8\">\n                    <img src=\"img/icon_ccv.gif\" width=\"50\" height=\"29\" alt=\"ccv\"><small>Last 3 digits</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--End row -->\n\n          <h5>Or checkout with Paypal</h5>\n          <p>\n            Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui vocent ornatus molestie, reque fierent dissentiunt mel ea.\n          </p>\n          <p>\n            <img src=\"img/paypal_bt.png\" alt=\"Image\">\n          </p>\n        </div>\n        <hr>\n        <!--End step -->\n\n        <div class=\"form_title\">\n          <h3><strong>3</strong>Billing Address</h3>\n          <p>\n            Mussum ipsum cacilds, vidis litro abertis.\n          </p>\n        </div>\n        <div class=\"step\">\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6\">\n              <label>Country</label>\n              <div class=\"form-group\">\n                <select class=\"form-control\" name=\"country\" id=\"country\">\n                  <option value=\"\">Select your country</option>\n                  <option value=\"Europe\">Europe</option>\n                  <option value=\"United states\">United states</option>\n                  <option value=\"Asia\">Asia</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6\">\n              <div class=\"form-group\">\n                <label>Street line 1</label>\n                <input type=\"text\" id=\"street_1\" name=\"street_1\" class=\"form-control\" placeholder=\"Street line 1\">\n              </div>\n            </div>\n            <div class=\"col-md-6 col-sm-6\">\n              <div class=\"form-group\">\n                <label>Street line 2</label>\n                <input type=\"text\" id=\"street_2\" name=\"street_2\" class=\"form-control\" placeholder=\"Street line 1\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>City</label>\n                <input type=\"text\" id=\"city_booking\" name=\"city_booking\" class=\"form-control\" placeholder=\"Miami\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>State</label>\n                <input type=\"text\" id=\"state_booking\" name=\"state_booking\" class=\"form-control\" placeholder=\"Florida\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Postal code</label>\n                <input type=\"text\" id=\"postal_code\" name=\"postal_code\" class=\"form-control\" placeholder=\"00342\">\n              </div>\n            </div>\n          </div>\n          <!--End row -->\n        </div>\n        <hr>\n        <!--End step -->\n        <div id=\"policy\">\n          <h4>Cancellation policy</h4>\n          <div class=\"form-group\">\n            <div class=\"checkboxes\">\n              <label class=\"container_check\">I accept <a href=\"#0\">terms and conditions and general policy</a>\n                <input type=\"checkbox\">\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n      <!-- /col -->\n      <aside class=\"col-xl-4 col-lg-4\" id=\"sidebar\">\n        <div class=\"box_general_3 booking\">\n          <form>\n            <div class=\"title\">\n              <h3>Your booking</h3>\n            </div>\n            <div class=\"summary\">\n              <ul>\n                <li>Date: <strong class=\"float-right\">11/12/2017</strong></li>\n                <li>Time: <strong class=\"float-right\">10.30 am</strong></li>\n                <li>Dr. Name: <strong class=\"float-right\">Dr. julia Jhones</strong></li>\n              </ul>\n            </div>\n            <ul class=\"treatments checkout clearfix\">\n              <li>\n                Back Pain visit <strong class=\"float-right\">$55</strong>\n              </li>\n              <li>\n                Cardiovascular screen <strong class=\"float-right\">$55</strong>\n              </li>\n              <li class=\"total\">\n                Total <strong class=\"float-right\">$110</strong>\n              </li>\n            </ul>\n            <hr>\n            <a href=\"confirm.html\" class=\"btn_1 full-width\">Confirm and pay</a>\n          </form>\n        </div>\n        <!-- /box_general -->\n      </aside>\n      <!-- /asdide -->\n    </div>\n    <!-- /row -->\n  </div>\n  <!-- /container -->\n</main>\n<!-- /main -->\n\n"

/***/ }),

/***/ "./src/app/booking/booking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/booking/booking.component.ts ***!
  \**********************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookingComponent = /** @class */ (function () {
    function BookingComponent() {
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.css */ "./src/app/booking/booking.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/clinic-detail/clinic-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/clinic-detail/clinic-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaW5pYy1kZXRhaWwvY2xpbmljLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/clinic-detail/clinic-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/clinic-detail/clinic-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  clinic-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/clinic-detail/clinic-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/clinic-detail/clinic-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: ClinicDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicDetailComponent", function() { return ClinicDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClinicDetailComponent = /** @class */ (function () {
    function ClinicDetailComponent() {
    }
    ClinicDetailComponent.prototype.ngOnInit = function () {
    };
    ClinicDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clinic-detail',
            template: __webpack_require__(/*! ./clinic-detail.component.html */ "./src/app/clinic-detail/clinic-detail.component.html"),
            styles: [__webpack_require__(/*! ./clinic-detail.component.css */ "./src/app/clinic-detail/clinic-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClinicDetailComponent);
    return ClinicDetailComponent;
}());



/***/ }),

/***/ "./src/app/doctor-detail/doctor-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/doctor-detail/doctor-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci1kZXRhaWwvZG9jdG9yLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/doctor-detail/doctor-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/doctor-detail/doctor-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div id=\"breadcrumb\">\n    <div class=\"container\">\n      <ul>\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">Category</a></li>\n        <li>Page active</li>\n      </ul>\n    </div>\n  </div>\n  <!-- /breadcrumb -->\n\n  <div class=\"container margin_60\">\n    <div class=\"row\">\n      <div class=\"col-xl-8 col-lg-8\">\n        <nav id=\"secondary_nav\">\n          <div class=\"container\">\n            <ul class=\"clearfix\">\n              <li><a href=\"#section_1\" class=\"active\">General info</a></li>\n              <li><a href=\"#section_2\">Reviews</a></li>\n              <li><a href=\"#sidebar\">Booking</a></li>\n            </ul>\n          </div>\n        </nav>\n        <div id=\"section_1\">\n          <div class=\"box_general_3\">\n            <div class=\"profile\">\n              <div class=\"row\">\n                <div class=\"col-lg-5 col-md-4\">\n                  <figure>\n                    <img src=\"img/doctor_listing_1.jpg\" alt=\"\" class=\"img-fluid\">\n                  </figure>\n                </div>\n                <div class=\"col-lg-7 col-md-8\">\n                  <small>Primary care - Internist</small>\n                  <h1>DR. Julia Jhones</h1>\n                  <span class=\"rating\">\n                    <i class=\"icon_star voted\"></i>\n                    <i class=\"icon_star voted\"></i>\n                    <i class=\"icon_star voted\"></i>\n                    <i class=\"icon_star voted\"></i>\n                    <i class=\"icon_star\"></i>\n                    <small>(145)</small>\n                    <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"img/badges/badge_1.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n                  </span>\n                  <ul class=\"statistic\">\n                    <li>854 Views</li>\n                    <li>124 Patients</li>\n                  </ul>\n                  <ul class=\"contacts\">\n                    <li>\n                      <h6>Address</h6>\n                      2726 Shinn Street, New York -\n                      <a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\"> <strong>View on map</strong></a>\n                    </li>\n                    <li>\n                      <h6>Phone</h6> <a href=\"tel://000434323342\">+00043 4323342</a> - <a href=\"tel://000434323342\">+00043 4323342</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            \n            <hr>\n            \n            <!-- /profile -->\n            <div class=\"indent_title_in\">\n              <i class=\"pe-7s-user\"></i>\n              <h3>Professional statement</h3>\n              <p>Mussum ipsum cacilds, vidis litro abertis.</p>\n            </div>\n            <div class=\"wrapper_indent\">\n              <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>\n              <h6>Specializations</h6>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <ul class=\"bullets\">\n                    <li>Abdominal Radiology</li>\n                    <li>Addiction Psychiatry</li>\n                    <li>Adolescent Medicine</li>\n                    <li>Cardiothoracic Radiology </li>\n                  </ul>\n                </div>\n                <div class=\"col-lg-6\">\n                  <ul class=\"bullets\">\n                    <li>Abdominal Radiology</li>\n                    <li>Addiction Psychiatry</li>\n                    <li>Adolescent Medicine</li>\n                    <li>Cardiothoracic Radiology </li>\n                  </ul>\n                </div>\n              </div>\n              <!-- /row-->\n            </div>\n            <!-- /wrapper indent -->\n\n            <hr>\n\n            <div class=\"indent_title_in\">\n              <i class=\"pe-7s-news-paper\"></i>\n              <h3>Education</h3>\n              <p>Mussum ipsum cacilds, vidis litro abertis.</p>\n            </div>\n            <div class=\"wrapper_indent\">\n              <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>\n              <h6>Curriculum</h6>\n              <ul class=\"list_edu\">\n                <li><strong>New York Medical College</strong> - Doctor of Medicine</li>\n                <li><strong>Montefiore Medical Center</strong> - Residency in Internal Medicine</li>\n                <li><strong>New York Medical College</strong> - Master Internal Medicine</li>\n              </ul>\n            </div>\n            <!--  End wrapper indent -->\n\n            <hr>\n\n            <div class=\"indent_title_in\">\n              <i class=\"pe-7s-cash\"></i>\n              <h3>Prices &amp; Payments</h3>\n              <p>Mussum ipsum cacilds, vidis litro abertis.</p>\n            </div>\n            <div class=\"wrapper_indent\">\n              <p>Zril causae ancillae sit ea. Dicam veritus mediocritatem sea ex, nec id agam eius. Te pri facete latine salutandi, scripta mediocrem et sed, cum ne mundi vulputate. Ne his sint graeco detraxit, posse exerci volutpat has in.</p>\n              <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th>Service - Visit</th>\n                    <th>Price</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>New patient visit</td>\n                    <td>$34</td>\n                  </tr>\n                  <tr>\n                    <td>General consultation</td>\n                    <td>$60</td>\n                  </tr>\n                  <tr>\n                    <td>Back Pain</td>\n                    <td>$40</td>\n                  </tr>\n                  <tr>\n                    <td>Diabetes Consultation</td>\n                    <td>$55</td>\n                  </tr>\n                  <tr>\n                    <td>Eating disorder</td>\n                    <td>$60</td>\n                  </tr>\n                  <tr>\n                    <td>Foot Pain</td>\n                    <td>$35</td>\n                  </tr>\n                </tbody>\n              </table>\n              </div>\n            </div>\n            <!--  /wrapper_indent -->\n          </div>\n          <!-- /section_1 -->\n        </div>\n        <!-- /box_general -->\n\n        <div id=\"section_2\">\n          <div class=\"box_general_3\">\n            <div class=\"reviews-container\">\n              <div class=\"row\">\n                <div class=\"col-lg-3\">\n                  <div id=\"review_summary\">\n                    <strong>4.7</strong>\n                    <div class=\"rating\">\n                      <i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i>\n                    </div>\n                    <small>Based on 4 reviews</small>\n                  </div>\n                </div>\n                <div class=\"col-lg-9\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-10 col-9\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-2 col-3\"><small><strong>5 stars</strong></small></div>\n                  </div>\n                  <!-- /row -->\n                  <div class=\"row\">\n                    <div class=\"col-lg-10 col-9\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-2 col-3\"><small><strong>4 stars</strong></small></div>\n                  </div>\n                  <!-- /row -->\n                  <div class=\"row\">\n                    <div class=\"col-lg-10 col-9\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-2 col-3\"><small><strong>3 stars</strong></small></div>\n                  </div>\n                  <!-- /row -->\n                  <div class=\"row\">\n                    <div class=\"col-lg-10 col-9\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-2 col-3\"><small><strong>2 stars</strong></small></div>\n                  </div>\n                  <!-- /row -->\n                  <div class=\"row\">\n                    <div class=\"col-lg-10 col-9\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 0\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-2 col-3\"><small><strong>1 stars</strong></small></div>\n                  </div>\n                  <!-- /row -->\n                </div>\n              </div>\n              <!-- /row -->\n\n              <hr>\n\n              <div class=\"review-box clearfix\">\n                <figure class=\"rev-thumb\"><img src=\"img/avatar1.jpg\" alt=\"\">\n                </figure>\n                <div class=\"rev-content\">\n                  <div class=\"rating\">\n                    <i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i>\n                  </div>\n                  <div class=\"rev-info\">\n                    Admin – April 03, 2016:\n                  </div>\n                  <div class=\"rev-text\">\n                    <p>\n                      Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <!-- End review-box -->\n\n              <div class=\"review-box clearfix\">\n                <figure class=\"rev-thumb\"><img src=\"img/avatar2.jpg\" alt=\"\">\n                </figure>\n                <div class=\"rev-content\">\n                  <div class=\"rating\">\n                    <i class=\"icon-star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i>\n                  </div>\n                  <div class=\"rev-info\">\n                    Ahsan – April 01, 2016\n                  </div>\n                  <div class=\"rev-text\">\n                    <p>\n                      Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <!-- End review-box -->\n\n              <div class=\"review-box clearfix\">\n                <figure class=\"rev-thumb\"><img src=\"img/avatar3.jpg\" alt=\"\">\n                </figure>\n                <div class=\"rev-content\">\n                  <div class=\"rating\">\n                    <i class=\"icon-star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i>\n                  </div>\n                  <div class=\"rev-info\">\n                    Sara – March 31, 2016\n                  </div>\n                  <div class=\"rev-text\">\n                    <p>\n                      Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <!-- End review-box -->\n            </div>\n            <!-- End review-container -->\n            <hr>\n              <div class=\"text-right\"><a href=\"submit-review.html\" class=\"btn_1\">Submit review</a></div>\n          </div>\n        </div>\n        <!-- /section_2 -->\n      </div>\n      <!-- /col -->\n      <aside class=\"col-xl-4 col-lg-4\" id=\"sidebar\">\n        <div class=\"box_general_3 booking\">\n          <div class=\"title\">\n            <h3>Book a Visit</h3>\n            <small>Monday to Friday 09.00am-06.00pm</small>\n          </div>\n          <div id=\"message-booking\"></div>\n            <form method=\"post\" action=\"http://www.ansonika.com/findoctor/assets/booking.php\" id=\"booking\">\n            <input type=\"hidden\" value=\"Dr. Julia Jhones\" name=\"doctor_name_booking\" id=\"doctor_name_booking\">\n            <div class=\"row\">\n              <div class=\"col-md-6 \">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name_booking\" id=\"name_booking\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" name=\"lastname_booking\" id=\"lastname_booking\">\n                </div>\n              </div>\n            </div>\n            <!-- /row -->\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" name=\"email_booking\" id=\"email_booking\">\n                </div>\n              </div>\n            </div>\n            <!-- /row -->\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" id=\"booking_date\" name=\"booking_date\" data-lang=\"en\" data-min-year=\"2017\" data-max-year=\"2020\" data-disabled-days=\"10/17/2017,11/18/2017\">\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" id=\"booking_time\" name=\"booking_time\">\n                </div>\n              </div>\n            </div>\n            <!-- /row -->\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                  <select class=\"form-control\" name=\"booking_visit\" id=\"booking_visit\">\n                    <option value=\"\">Select visit</option>\n                    <option value=\"General visit\">General visit</option>\n                    <option value=\"Cardiothoracic Radiology\">Cardiothoracic Radiology</option>\n                    <option value=\"Abdominal Radiology\">Abdominal Radiology</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <!-- /row -->\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <div class=\"form-group\">\n                  <textarea rows=\"5\" id=\"booking_message\" name=\"booking_message\" class=\"form-control\" style=\"height:80px;\" placeholder=\"Additional message\"></textarea>\n                </div>\n              </div>\n            </div>\n            <!-- /row -->\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <input type=\"text\" id=\"verify_booking\" class=\"form-control\" placeholder=\"Human verify: 3 + 1 =?\">\n                </div>\n              </div>\n            </div>\n            <!-- /row -->\n            <hr>\n            <div style=\"position:relative;\"><input type=\"submit\" class=\"btn_1 full-width\" value=\"Book Now\" id=\"submit-booking\"></div>\n          </form>\n        </div>\n        <!-- /box_general -->\n      </aside>\n      <!-- /asdide -->\n    </div>\n    <!-- /row -->\n  </div>\n  <!-- /container -->\n</main>\n<!-- /main -->\n"

/***/ }),

/***/ "./src/app/doctor-detail/doctor-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/doctor-detail/doctor-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: DoctorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorDetailComponent", function() { return DoctorDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DoctorDetailComponent = /** @class */ (function () {
    function DoctorDetailComponent() {
    }
    DoctorDetailComponent.prototype.ngOnInit = function () {
    };
    DoctorDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doctor-detail',
            template: __webpack_require__(/*! ./doctor-detail.component.html */ "./src/app/doctor-detail/doctor-detail.component.html"),
            styles: [__webpack_require__(/*! ./doctor-detail.component.css */ "./src/app/doctor-detail/doctor-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DoctorDetailComponent);
    return DoctorDetailComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container margin_60_35\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-12\">\n        <p>\n          <a href=\"index-2.html\" title=\"Findoctor\">\n            <img src=\"img/logo.png\" data-retina=\"true\" alt=\"\" width=\"163\" height=\"36\" class=\"img-fluid\">\n          </a>\n        </p>\n      </div>\n      <div class=\"col-lg-3 col-md-4\">\n        <h5>About</h5>\n        <ul class=\"links\">\n          <li><a href=\"#0\">About us</a></li>\n          <li><a href=\"blog.html\">Blog</a></li>\n          <li><a href=\"#0\">FAQ</a></li>\n          <li><a href=\"login.html\">Login</a></li>\n          <li><a href=\"register.html\">Register</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-3 col-md-4\">\n        <h5>Useful links</h5>\n        <ul class=\"links\">\n          <li><a href=\"#0\">Doctors</a></li>\n          <li><a href=\"#0\">Clinics</a></li>\n          <li><a href=\"#0\">Specialization</a></li>\n          <li><a href=\"#0\">Join as a Doctor</a></li>\n          <li><a href=\"#0\">Download App</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-3 col-md-4\">\n        <h5>Contact with Us</h5>\n        <ul class=\"contacts\">\n          <li><a href=\"tel://61280932400\"><i class=\"icon_mobile\"></i> + 61 23 8093 3400</a></li>\n          <li><a href=\"mailto:info@findoctor.com\"><i class=\"icon_mail_alt\"></i> help@findoctor.com</a></li>\n        </ul>\n        <div class=\"follow_us\">\n          <h5>Follow us</h5>\n          <ul>\n            <li><a href=\"#0\"><i class=\"social_facebook\"></i></a></li>\n            <li><a href=\"#0\"><i class=\"social_twitter\"></i></a></li>\n            <li><a href=\"#0\"><i class=\"social_linkedin\"></i></a></li>\n            <li><a href=\"#0\"><i class=\"social_instagram\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/row-->\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <ul id=\"additional_links\">\n          <li><a href=\"#0\">Terms and conditions</a></li>\n          <li><a href=\"#0\">Privacy</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-4\">\n        <div id=\"copy\">© 2017 Findoctor</div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"hero_home version_1\">\n    <div class=\"content\">\n      <h3>Find a Doctor!</h3>\n      <p>\n        Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.\n      </p>\n      <form method=\"post\" action=\"http://www.ansonika.com/findoctor/list.html\">\n        <div id=\"custom-search-input\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\" search-query\" placeholder=\"Ex. Name, Specialization ....\">\n            <input type=\"submit\" class=\"btn_search\" value=\"Search\">\n          </div>\n          <ul>\n            <li>\n              <input type=\"radio\" id=\"all\" name=\"radio_search\" value=\"all\" checked>\n              <label for=\"all\">All</label>\n            </li>\n            <li>\n              <input type=\"radio\" id=\"doctor\" name=\"radio_search\" value=\"doctor\">\n              <label for=\"doctor\">Doctor</label>\n            </li>\n            <li>\n              <input type=\"radio\" id=\"clinic\" name=\"radio_search\" value=\"clinic\">\n              <label for=\"clinic\">Clinic</label>\n            </li>\n          </ul>\n        </div>\n      </form>\n    </div>\n  </div>\n  <!-- /Hero -->\n\n  <div class=\"container margin_120_95\">\n    <div class=\"main_title\">\n      <h2>Discover the <strong>online</strong> appointment!</h2>\n      <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie. Sed ad debet scaevola, ne mel.</p>\n    </div>\n    <div class=\"row add_bottom_30\">\n      <div class=\"col-lg-4\">\n        <div class=\"box_feat\" id=\"icon_1\">\n          <span></span>\n          <h3>Find a Doctor</h3>\n          <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"box_feat\" id=\"icon_2\">\n          <span></span>\n          <h3>View profile</h3>\n          <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"box_feat\" id=\"icon_3\">\n          <h3>Book a visit</h3>\n          <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>\n        </div>\n      </div>\n    </div>\n    <!-- /row -->\n    <p class=\"text-center\"><a href=\"list.html\" class=\"btn_1 medium\">Find Doctor</a></p>\n\n  </div>\n  <!-- /container -->\n\n  <div class=\"bg_color_1\">\n    <div class=\"container margin_120_95\">\n      <div class=\"main_title\">\n        <h2>Most Viewed doctors</h2>\n        <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri.</p>\n      </div>\n      <div id=\"reccomended\" class=\"owl-carousel owl-theme\">\n        <div class=\"item\">\n          <a href=\"detail-page.html\">\n            <div class=\"views\"><i class=\"icon-eye-7\"></i>140</div>\n            <div class=\"title\">\n              <h4>Dr. Julia Holmes<em>Pediatrician - Cardiologist</em></h4>\n            </div><img src=\"../../assets/img/doctor_1_carousel.jpg\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"item\">\n          <a href=\"detail-page.html\">\n            <div class=\"views\"><i class=\"icon-eye-7\"></i>120</div>\n            <div class=\"title\">\n              <h4>Dr. Julia Holmes<em>Pediatrician</em></h4>\n            </div><img src=\"../../assets/img/doctor_2_carousel.jpg\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"item\">\n          <a href=\"detail-page.html\">\n            <div class=\"views\"><i class=\"icon-eye-7\"></i>115</div>\n            <div class=\"title\">\n              <h4>Dr. Julia Holmes<em>Pediatrician</em></h4>\n            </div><img src=\"../../assets/img/doctor_3_carousel.jpg\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"item\">\n          <a href=\"detail-page.html\">\n            <div class=\"views\"><i class=\"icon-eye-7\"></i>98</div>\n            <div class=\"title\">\n              <h4>Dr. Julia Holmes<em>Pediatrician</em></h4>\n            </div><img src=\"../../assets/img/doctor_4_carousel.jpg\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"item\">\n          <a href=\"detail-page.html\">\n            <div class=\"views\"><i class=\"icon-eye-7\"></i>98</div>\n            <div class=\"title\">\n              <h4>Dr. Julia Holmes<em>Pediatrician</em></h4>\n            </div><img src=\"../../assets/img/doctor_5_carousel.jpg\" alt=\"\">\n          </a>\n        </div>\n      </div>\n      <!-- /carousel -->\n    </div>\n    <!-- /container -->\n  </div>\n  <!-- /white_bg -->\n\n  <div class=\"container margin_120_95\">\n    <div class=\"main_title\">\n      <h2>Find your doctor or clinic</h2>\n      <p>Nec graeci sadipscing disputationi ne, mea ea nonumes percipitur. Nonumy ponderum oporteat cu mel, pro movet cetero at.</p>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-xl-4 col-lg-5 col-md-6\">\n        <div class=\"list_home\">\n          <div class=\"list_title\">\n            <i class=\"icon_pin_alt\"></i>\n            <h3>Search by City or Zone</h3>\n          </div>\n          <ul>\n            <li><a href=\"list.html\"><strong>23</strong>Albany</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Albuquerque</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Atlanta</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Baltimore</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Baton Rouge</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Birmingham</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Boston</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Buffalo</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Charleston</a></li>\n            <li><a href=\"list.html\">More...</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-5 col-md-6\">\n        <div class=\"list_home\">\n          <div class=\"list_title\">\n            <i class=\"icon_archive_alt\"></i>\n            <h3>Search by type</h3>\n          </div>\n          <ul>\n            <li><a href=\"list.html\"><strong>23</strong>Allergist</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Cardiologist</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Chiropractor</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Dentist</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Dermatologist</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Gastroenterologist</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Ophthalmologist</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Optometrist</a></li>\n            <li><a href=\"list.html\"><strong>23</strong>Pediatrician</a></li>\n            <li><a href=\"list.html\">More....</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!-- /row -->\n  </div>\n  <!-- /container -->\n\n  <div id=\"app_section\">\n    <div class=\"container\">\n      <div class=\"row justify-content-around\">\n        <div class=\"col-md-5\">\n          <p><img src=\"../../assets/img/app_img.svg\" alt=\"\" class=\"img-fluid\" width=\"500\" height=\"433\"></p>\n        </div>\n        <div class=\"col-md-6\">\n          <small>Application</small>\n          <h3>Download <strong>Findoctor App</strong> Now!</h3>\n          <p class=\"lead\">Tota omittantur necessitatibus mei ei. Quo paulo perfecto eu, errem percipit ponderum no eos. Has eu mazim sensibus. Ad nonumes dissentiunt qui, ei menandri electram eos. Nam iisque consequuntur cu.</p>\n          <div class=\"app_buttons wow\" data-wow-offset=\"100\">\n            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 43.1 85.9\" style=\"enable-background:new 0 0 43.1 85.9;\" xml:space=\"preserve\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"st0 draw-arrow\" d=\"M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1\" />\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"draw-arrow tail-1\" d=\"M40.6,78.1C39,71.3,37.2,64.6,35.2,58\" />\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"draw-arrow tail-2\" d=\"M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9\" />\n          </svg>\n            <a href=\"#0\" class=\"fadeIn\"><img src=\"../../assets/img/apple_app.png\" alt=\"\" width=\"150\" height=\"50\" data-retina=\"true\"></a>\n            <a href=\"#0\" class=\"fadeIn\"><img src=\"../../assets/img/google_play_app.png\" alt=\"\" width=\"150\" height=\"50\" data-retina=\"true\"></a>\n          </div>\n        </div>\n      </div>\n      <!-- /row -->\n    </div>\n    <!-- /container -->\n  </div>\n  <!-- /app_section -->\n</main>\n<!-- /main content -->\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/list-clinics/list-clinics.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-clinics/list-clinics.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY2xpbmljcy9saXN0LWNsaW5pY3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/list-clinics/list-clinics.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-clinics/list-clinics.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"theia-exception\">\n  <div id=\"results\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h4><strong>Showing 10</strong> of 140 results</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"search_bar_list\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ex. Specialist, Name, Doctor...\">\n            <input type=\"submit\" value=\"Search\">\n          </div>\n        </div>\n      </div>\n      <!-- /row -->\n    </div>\n    <!-- /container -->\n  </div>\n  <!-- /results -->\n\n  <div class=\"filters_listing\">\n    <div class=\"container\">\n      <ul class=\"clearfix\">\n        <li>\n          <h6>Type</h6>\n          <div class=\"switch-field\">\n            <input type=\"radio\" id=\"all\" name=\"type_patient\" value=\"all\" checked>\n            <label for=\"all\">All</label>\n            <input type=\"radio\" id=\"doctors\" name=\"type_patient\" value=\"doctors\">\n            <label for=\"doctors\">Doctors</label>\n            <input type=\"radio\" id=\"clinics\" name=\"type_patient\" value=\"clinics\">\n            <label for=\"clinics\">Clinics</label>\n          </div>\n        </li>\n        <li>\n          <h6>Layout</h6>\n          <div class=\"layout_view\">\n            <a href=\"grid-list.html\"><i class=\"icon-th\"></i></a>\n            <a href=\"#0\" class=\"active\"><i class=\"icon-th-list\"></i></a>\n            <a href=\"list-map.html\"><i class=\"icon-map-1\"></i></a>\n          </div>\n        </li>\n        <li>\n          <h6>Sort by</h6>\n          <select name=\"orderby\" class=\"selectbox\">\n          <option value=\"Closest\">Closest</option>\n          <option value=\"Best rated\">Best rated</option>\n          <option value=\"Men\">Men</option>\n          <option value=\"Women\">Women</option>\n          </select>\n        </li>\n      </ul>\n    </div>\n    <!-- /container -->\n  </div>\n  <!-- /filters -->\n  \n  <div class=\"container margin_60_35\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n\n        <div class=\"strip_list \">\n          <a href=\"#0\" class=\"wish_bt\"></a>\n          <figure>\n            <a href=\"/clinic-detail\"><img src=\"../../assets/img/doctor_listing_1.jpg\" alt=\"\"></a>\n          </figure>\n          <small>Pediatrician</small>\n          <h3>Dr. Cornfield</h3>\n          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>\n          <span class=\"rating\"><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i><i class=\"icon_star\"></i> <small>(145)</small></span>\n          <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"../../assets/img/badges/badge_1.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n          <ul>\n            <li><a href=\"#0\" onclick=\"onHtmlClick('Doctors', 0)\" class=\"btn_listing\">View on Map</a></li>\n            <li><a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\">Directions</a></li>\n            <li><a href=\"/booking\">Book Now</a></li>\n          </ul>\n        </div>\n        <!-- /strip_list -->\n\n        <div class=\"strip_list \">\n          <a href=\"#0\" class=\"wish_bt\"></a>\n          <figure>\n            <a href=\"/clinic-detail\"><img src=\"../../assets/img/doctor_listing_2.jpg\" alt=\"\"></a>\n          </figure>\n          <small>Psicologist</small>\n          <h3>Dr. Shoemaker</h3>\n          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>\n          <span class=\"rating\"><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i><i class=\"icon_star\"></i> <small>(145)</small></span>\n          <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"../../assets/img/badges/badge_2.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n          <ul>\n            <li><a href=\"#0\" onclick=\"onHtmlClick('Doctors', 1)\" class=\"btn_listing\">View on Map</a></li>\n            <li><a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\">Directions</a></li>\n            <li><a href=\"/booking\">Book Now</a></li>\n          </ul>\n        </div>\n        <!-- /strip_list -->\n\n        <div class=\"strip_list \">\n          <a href=\"#0\" class=\"wish_bt\"></a>\n          <figure>\n            <a href=\"/clinic-detail\"><img src=\"../../assets/img/doctor_listing_3.jpg\" alt=\"\"></a>\n          </figure>\n          <small>Pediatrician</small>\n          <h3>Dr. Lachinet</h3>\n          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>\n          <span class=\"rating\"><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i><i class=\"icon_star\"></i> <small>(145)</small></span>\n          <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"../../assets/img/badges/badge_3.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n          <ul>\n            <li><a href=\"#0\" onclick=\"onHtmlClick('Doctors', 2)\" class=\"btn_listing\">View on Map</a></li>\n            <li><a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\">Directions</a></li>\n            <li><a href=\"/booking\">Book Now</a></li>\n          </ul>\n        </div>\n        <!-- /strip_list -->\n\n        <div class=\"strip_list \">\n          <a href=\"#0\" class=\"wish_bt\"></a>\n          <figure>\n            <a href=\"/clinic-detail\"><img src=\"../../assets/img/doctor_listing_4.jpg\" alt=\"\"></a>\n          </figure>\n          <small>Pediatrician</small>\n          <h3>Dr. Rainwater</h3>\n          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>\n          <span class=\"rating\"><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i><i class=\"icon_star\"></i> <small>(145)</small></span>\n          <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"../../assets/img/badges/badge_4.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n          <ul>\n            <li><a href=\"#0\" onclick=\"onHtmlClick('Doctors', 1)\" class=\"btn_listing\">View on Map</a></li>\n            <li><a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\">Directions</a></li>\n            <li><a href=\"/booking\">Book Now</a></li>\n          </ul>\n        </div>\n        <!-- /strip_list -->\n\n        <div class=\"strip_list \">\n          <a href=\"#0\" class=\"wish_bt\"></a>\n          <figure>\n            <a href=\"/clinic-detail\"><img src=\"../../assets/img/doctor_listing_5.jpg\" alt=\"\"></a>\n          </figure>\n          <small>Psicologist</small>\n          <h3>Dr. Manzone</h3>\n          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>\n          <span class=\"rating\"><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i><i class=\"icon_star\"></i> <small>(145)</small></span>\n          <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"../../assets/img/badges/badge_4.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n          <ul>\n            <li><a href=\"#0\" onclick=\"onHtmlClick('Doctors', 1)\" class=\"btn_listing\">View on Map</a></li>\n            <li><a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\">Directions</a></li>\n            <li><a href=\"/booking\">Book Now</a></li>\n          </ul>\n        </div>\n        <!-- /strip_list -->\n        \n        <nav aria-label=\"\" class=\"add_top_20\">\n          <ul class=\"pagination pagination-sm\">\n            <li class=\"page-item disabled\">\n              <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\n            </li>\n            <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\">Next</a>\n            </li>\n          </ul>\n        </nav>\n        <!-- /pagination -->\n      </div>\n      <!-- /col -->\n      \n      <aside class=\"col-lg-5\" id=\"sidebar\">\n        <div id=\"map_listing\" class=\"normal_list\">\n        </div>\n      </aside>\n      <!-- /aside -->\n      \n    </div>\n    <!-- /row -->\n  </div>\n  <!-- /container -->\n</main>\n<!-- /main -->\n\t<!-- COMMON SCRIPTS -->\n\t"

/***/ }),

/***/ "./src/app/list-clinics/list-clinics.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-clinics/list-clinics.component.ts ***!
  \********************************************************/
/*! exports provided: ListClinicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClinicsComponent", function() { return ListClinicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListClinicsComponent = /** @class */ (function () {
    function ListClinicsComponent() {
    }
    ListClinicsComponent.prototype.ngOnInit = function () {
    };
    ListClinicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-clinics',
            template: __webpack_require__(/*! ./list-clinics.component.html */ "./src/app/list-clinics/list-clinics.component.html"),
            styles: [__webpack_require__(/*! ./list-clinics.component.css */ "./src/app/list-clinics/list-clinics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListClinicsComponent);
    return ListClinicsComponent;
}());



/***/ }),

/***/ "./src/app/list-doctors/list-doctors.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-doctors/list-doctors.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtZG9jdG9ycy9saXN0LWRvY3RvcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/list-doctors/list-doctors.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-doctors/list-doctors.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"theia-exception\">\n  <div id=\"results\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h4><strong>Showing 10</strong> of 140 results</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"search_bar_list\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ex. Specialist, Name, Doctor...\">\n            <input type=\"submit\" value=\"Search\">\n          </div>\n        </div>\n      </div>\n      <!-- /row -->\n    </div>\n    <!-- /container -->\n  </div>\n  <!-- /results -->\n\n  <div class=\"filters_listing\">\n    <div class=\"container\">\n      <ul class=\"clearfix\">\n        <li>\n          <h6>Type</h6>\n          <div class=\"switch-field\">\n            <input type=\"radio\" id=\"all\" name=\"type_patient\" value=\"all\" checked>\n            <label for=\"all\">All</label>\n            <input type=\"radio\" id=\"doctors\" name=\"type_patient\" value=\"doctors\">\n            <label for=\"doctors\">Doctors</label>\n            <input type=\"radio\" id=\"clinics\" name=\"type_patient\" value=\"clinics\">\n            <label for=\"clinics\">Clinics</label>\n          </div>\n        </li>\n        <li>\n          <h6>Layout</h6>\n          <div class=\"layout_view\">\n            <a href=\"grid-list.html\"><i class=\"icon-th\"></i></a>\n            <a href=\"#0\" class=\"active\"><i class=\"icon-th-list\"></i></a>\n            <a href=\"list-map.html\"><i class=\"icon-map-1\"></i></a>\n          </div>\n        </li>\n        <li>\n          <h6>Sort by</h6>\n          <select name=\"orderby\" class=\"selectbox\">\n          <option value=\"Closest\">Closest</option>\n          <option value=\"Best rated\">Best rated</option>\n          <option value=\"Men\">Men</option>\n          <option value=\"Women\">Women</option>\n          </select>\n        </li>\n      </ul>\n    </div>\n    <!-- /container -->\n  </div>\n  <!-- /filters -->\n  \n  <div class=\"container margin_60_35\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n\n        <div class=\"strip_list \">\n          <a href=\"#0\" class=\"wish_bt\"></a>\n          <figure>\n            <a href=\"/clinic-detail\"><img src=\"../../assets/img/doctor_listing_1.jpg\" alt=\"\"></a>\n          </figure>\n          <small>Pediatrician</small>\n          <h3>Dr. Cornfield</h3>\n          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>\n          <span class=\"rating\"><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i><i class=\"icon_star\"></i> <small>(145)</small></span>\n          <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"../../assets/img/badges/badge_1.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n          <ul>\n            <li><a href=\"#0\" onclick=\"onHtmlClick('Doctors', 0)\" class=\"btn_listing\">View on Map</a></li>\n            <li><a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\">Directions</a></li>\n            <li><a href=\"/booking\">Book Now</a></li>\n          </ul>\n        </div>\n        <!-- /strip_list -->\n\n        <div class=\"strip_list \">\n          <a href=\"#0\" class=\"wish_bt\"></a>\n          <figure>\n            <a href=\"/clinic-detail\"><img src=\"../../assets/img/doctor_listing_2.jpg\" alt=\"\"></a>\n          </figure>\n          <small>Psicologist</small>\n          <h3>Dr. Shoemaker</h3>\n          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>\n          <span class=\"rating\"><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i><i class=\"icon_star\"></i> <small>(145)</small></span>\n          <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"../../assets/img/badges/badge_2.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n          <ul>\n            <li><a href=\"#0\" onclick=\"onHtmlClick('Doctors', 1)\" class=\"btn_listing\">View on Map</a></li>\n            <li><a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\">Directions</a></li>\n            <li><a href=\"/booking\">Book Now</a></li>\n          </ul>\n        </div>\n        <!-- /strip_list -->\n\n        <div class=\"strip_list \">\n          <a href=\"#0\" class=\"wish_bt\"></a>\n          <figure>\n            <a href=\"/clinic-detail\"><img src=\"../../assets/img/doctor_listing_3.jpg\" alt=\"\"></a>\n          </figure>\n          <small>Pediatrician</small>\n          <h3>Dr. Lachinet</h3>\n          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>\n          <span class=\"rating\"><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i><i class=\"icon_star\"></i> <small>(145)</small></span>\n          <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"../../assets/img/badges/badge_3.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n          <ul>\n            <li><a href=\"#0\" onclick=\"onHtmlClick('Doctors', 2)\" class=\"btn_listing\">View on Map</a></li>\n            <li><a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\">Directions</a></li>\n            <li><a href=\"/booking\">Book Now</a></li>\n          </ul>\n        </div>\n        <!-- /strip_list -->\n\n        <div class=\"strip_list \">\n          <a href=\"#0\" class=\"wish_bt\"></a>\n          <figure>\n            <a href=\"/clinic-detail\"><img src=\"../../assets/img/doctor_listing_4.jpg\" alt=\"\"></a>\n          </figure>\n          <small>Pediatrician</small>\n          <h3>Dr. Rainwater</h3>\n          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>\n          <span class=\"rating\"><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i><i class=\"icon_star\"></i> <small>(145)</small></span>\n          <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"../../assets/img/badges/badge_4.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n          <ul>\n            <li><a href=\"#0\" onclick=\"onHtmlClick('Doctors', 1)\" class=\"btn_listing\">View on Map</a></li>\n            <li><a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\">Directions</a></li>\n            <li><a href=\"/booking\">Book Now</a></li>\n          </ul>\n        </div>\n        <!-- /strip_list -->\n\n        <div class=\"strip_list \">\n          <a href=\"#0\" class=\"wish_bt\"></a>\n          <figure>\n            <a href=\"/clinic-detail\"><img src=\"../../assets/img/doctor_listing_5.jpg\" alt=\"\"></a>\n          </figure>\n          <small>Psicologist</small>\n          <h3>Dr. Manzone</h3>\n          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>\n          <span class=\"rating\"><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i><i class=\"icon_star\"></i> <small>(145)</small></span>\n          <a href=\"badges.html\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"Badge Level\" class=\"badge_list_1\"><img src=\"../../assets/img/badges/badge_4.svg\" width=\"15\" height=\"15\" alt=\"\"></a>\n          <ul>\n            <li><a href=\"#0\" onclick=\"onHtmlClick('Doctors', 1)\" class=\"btn_listing\">View on Map</a></li>\n            <li><a href=\"https://www.google.com/maps/dir//Assistance+–+Hôpitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+–+Hôpitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361\" target=\"_blank\">Directions</a></li>\n            <li><a href=\"/booking\">Book Now</a></li>\n          </ul>\n        </div>\n        <!-- /strip_list -->\n        \n        <nav aria-label=\"\" class=\"add_top_20\">\n          <ul class=\"pagination pagination-sm\">\n            <li class=\"page-item disabled\">\n              <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\n            </li>\n            <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\">Next</a>\n            </li>\n          </ul>\n        </nav>\n        <!-- /pagination -->\n      </div>\n      <!-- /col -->\n      \n      <aside class=\"col-lg-5\" id=\"sidebar\">\n        <div id=\"map_listing\" class=\"normal_list\">\n        </div>\n      </aside>\n      <!-- /aside -->\n      \n    </div>\n    <!-- /row -->\n  </div>\n  <!-- /container -->\n</main>\n<!-- /main -->\n\t<!-- COMMON SCRIPTS -->\n\t"

/***/ }),

/***/ "./src/app/list-doctors/list-doctors.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-doctors/list-doctors.component.ts ***!
  \********************************************************/
/*! exports provided: ListDoctorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDoctorsComponent", function() { return ListDoctorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListDoctorsComponent = /** @class */ (function () {
    function ListDoctorsComponent() {
    }
    ListDoctorsComponent.prototype.ngOnInit = function () {
    };
    ListDoctorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-doctors',
            template: __webpack_require__(/*! ./list-doctors.component.html */ "./src/app/list-doctors/list-doctors.component.html"),
            styles: [__webpack_require__(/*! ./list-doctors.component.css */ "./src/app/list-doctors/list-doctors.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListDoctorsComponent);
    return ListDoctorsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"bg_color_2\">\n    <div class=\"container margin_60_35\">\n      <div id=\"login-2\">\n        <h1>Please login to Findoctor!</h1>\n        <form>\n          <div class=\"box_form clearfix\">\n            <div class=\"box_login\">\n              <a href=\"#0\" class=\"social_bt facebook\">Login with Facebook</a>\n              <a href=\"#0\" class=\"social_bt google\">Login with Google</a>\n              <a href=\"#0\" class=\"social_bt linkedin\">Login with Linkedin</a>\n            </div>\n            <div class=\"box_login last\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Your email address\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Your password\" id=\"password\" name=\"password\">\n                <a href=\"#0\" class=\"forgot\"><small>Forgot password?</small></a>\n              </div>\n              <div class=\"form-group\">\n                <a routerLink=\"/home\"><input class=\"btn_1\" type=\"submit\" value=\"Login\"></a>\n              </div>\n            </div>\n          </div>\n        </form>\n        <p class=\"text-center link_bright\">Do not have an account yet? <a href=\"/register\"><strong>Register now!</strong></a></p>\n      </div>\n      <!-- /login -->\n    </div>\n  </div>\n</main>\n<!-- /main -->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width:992px){nav#menu.main-menu{display:block!important}#mm-menu.main-menu,header .btn_mobile{display:none!important}.main-menu{position:relative;z-index:9;width:auto;top:11px;float:right;transition:all .3s ease-in-out;color:#fff}.main-menu ul,.main-menu ul li{position:relative;display:inline-block;margin:0;padding:0}.main-menu ul a,.main-menu ul li a{position:relative;margin:0;display:block;padding:5px 10px;white-space:nowrap}.main-menu>ul>li span>a{color:#333;padding:0 8px 17px;font-size:14px;font-size:.875rem;font-weight:500}.main-menu>ul>li span:hover>a{color:#e74e84}.main-menu ul ul{position:absolute;z-index:1;visibility:hidden;left:3px;top:100%;margin:0;display:block;padding:0;background:#fff;min-width:210px;box-shadow:0 6px 12px 0 rgba(0,0,0,.175);-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0;transition:all .2s ease;border-top:2px solid #e74e84}.main-menu ul ul li{display:block;height:auto;padding:0}.main-menu ul ul li a{font-size:13px;font-size:.8125rem;color:#555;border-bottom:1px solid #ededed;display:block;padding:15px 10px;line-height:1}.main-menu ul li:hover>ul{padding:0;visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);opacity:1}.main-menu ul ul li:last-child a{border-bottom:none}.main-menu ul ul li:hover>a{background-color:#f9f9f9;color:#e74e84;padding-left:15px;transition:all .3s ease}}\n.main-menu ul ul li span>a{font-weight:400!important}\n.main-menu ul ul li span>a:hover{background-color:#f9f9f9;color:#e74e84;padding-left:18px;opacity:1}\n.main-menu ul ul li span>a:after{font-family:ElegantIcons;content:\"\\35\";float:right;font-size:16px;font-size:1rem;margin-top:-2px}\n.main-menu ul ul ul{position:absolute;border-top:0;z-index:1;height:auto;left:100%;top:0;margin:0;padding:0;background:#fff;min-width:190px;box-shadow:0 6px 12px rgba(0,0,0,.175)}\n.main-menu ul ul ul.third_level_left{right:100%;left:auto}\n.main-menu ul ul ul li a{border-bottom:1px solid #ededed!important}\n.main-menu ul ul ul:before{border-width:0;margin-left:0}\n@media only screen and (max-width:991px){.btn_mobile{position:absolute;left:15px;top:15px;width:30px;display:block;z-index:9999}.hamburger-inner,.hamburger-inner::after,.hamburger-inner::before{background-color:#333!important}.hamburger--spin.is-active .hamburger-inner,.hamburger--spin.is-active .hamburger-inner::after,.hamburger--spin.is-active .hamburger-inner::before{background-color:#e74e84!important}nav#menu{display:none!important}.mm-menu{background:#fff!important}.main-menu{top:0;right:0;float:none}ul.mm-listview{line-height:25px}ul.mm-listview li a{color:#555!important;display:block}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDLG1CQUFtQix1QkFBdUIsQ0FBQyxzQ0FBc0Msc0JBQXNCLENBQUMsV0FBVyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQWlKLDhCQUE4QixDQUFDLFVBQVUsQ0FBQywrQkFBK0IsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQ0FBbUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsOEJBQThCLGFBQWEsQ0FBQyxpQkFBaUIsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBZ0csd0NBQXdDLENBQUMsa0NBQWtDLENBQThGLDBCQUEwQixDQUFDLFNBQVMsQ0FBcUgsdUJBQXVCLENBQUMsNEJBQTRCLENBQUMsb0JBQW9CLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHNCQUFzQixjQUFjLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQywrQkFBK0IsQ0FBcUYsdUJBQXVCLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxrQkFBa0IsQ0FBQyw0QkFBNEIsd0JBQXdCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFxSCx1QkFBdUIsQ0FBQztBQUFDLDJCQUEyQix5QkFBeUI7QUFBQyxpQ0FBaUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFNBQVM7QUFBQyxpQ0FBaUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLGVBQWU7QUFBQyxvQkFBb0IsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQWdELHNDQUFzQztBQUFDLHFDQUFxQyxVQUFVLENBQUMsU0FBUztBQUFDLHlCQUF5Qix5Q0FBeUM7QUFBQywyQkFBMkIsY0FBYyxDQUFDLGFBQWE7QUFBQyx5Q0FBeUMsWUFBWSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGtFQUFrRSwrQkFBK0IsQ0FBQyxtSkFBbUosa0NBQWtDLENBQUMsU0FBUyxzQkFBc0IsQ0FBQyxTQUFTLHlCQUF5QixDQUFDLFdBQVcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxnQkFBZ0IsQ0FBQyxvQkFBb0Isb0JBQW9CLENBQUMsYUFBYSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpe25hdiNtZW51Lm1haW4tbWVudXtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH0jbW0tbWVudS5tYWluLW1lbnUsaGVhZGVyIC5idG5fbW9iaWxle2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9Lm1haW4tbWVudXtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4Ojk7d2lkdGg6YXV0bzt0b3A6MTFweDtmbG9hdDpyaWdodDstbW96LXRyYW5zaXRpb246YWxsIC4zcyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7LW1zLXRyYW5zaXRpb246YWxsIC4zcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7Y29sb3I6I2ZmZn0ubWFpbi1tZW51IHVsLC5tYWluLW1lbnUgdWwgbGl7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjA7cGFkZGluZzowfS5tYWluLW1lbnUgdWwgYSwubWFpbi1tZW51IHVsIGxpIGF7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjA7ZGlzcGxheTpibG9jaztwYWRkaW5nOjVweCAxMHB4O3doaXRlLXNwYWNlOm5vd3JhcH0ubWFpbi1tZW51PnVsPmxpIHNwYW4+YXtjb2xvcjojMzMzO3BhZGRpbmc6MCA4cHggMTdweDtmb250LXNpemU6MTRweDtmb250LXNpemU6Ljg3NXJlbTtmb250LXdlaWdodDo1MDB9Lm1haW4tbWVudT51bD5saSBzcGFuOmhvdmVyPmF7Y29sb3I6I2U3NGU4NH0ubWFpbi1tZW51IHVsIHVse3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTt2aXNpYmlsaXR5OmhpZGRlbjtsZWZ0OjNweDt0b3A6MTAwJTttYXJnaW46MDtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOiNmZmY7bWluLXdpZHRoOjIxMHB4Oy13ZWJraXQtYm94LXNoYWRvdzowIDZweCAxMnB4IDAgcmdiYSgwLDAsMCwuMTc1KTstbW96LWJveC1zaGFkb3c6MCA2cHggMTJweCAwIHJnYmEoMCwwLDAsLjE3NSk7Ym94LXNoYWRvdzowIDZweCAxMnB4IDAgcmdiYSgwLDAsMCwuMTc1KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpO29wYWNpdHk6MDstbW96LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlOy1vLXRyYW5zaXRpb246YWxsIC4ycyBlYXNlOy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7LW1zLXRyYW5zaXRpb246YWxsIC4ycyBlYXNlO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlO2JvcmRlci10b3A6MnB4IHNvbGlkICNlNzRlODR9Lm1haW4tbWVudSB1bCB1bCBsaXtkaXNwbGF5OmJsb2NrO2hlaWdodDphdXRvO3BhZGRpbmc6MH0ubWFpbi1tZW51IHVsIHVsIGxpIGF7Zm9udC1zaXplOjEzcHg7Zm9udC1zaXplOi44MTI1cmVtO2NvbG9yOiM1NTU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VkZWRlZDtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTVweCAxMHB4O2xpbmUtaGVpZ2h0OjF9Lm1haW4tbWVudSB1bCBsaTpob3Zlcj51bHtwYWRkaW5nOjA7dmlzaWJpbGl0eTp2aXNpYmxlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7LW8tdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfS5tYWluLW1lbnUgdWwgdWwgbGk6bGFzdC1jaGlsZCBhe2JvcmRlci1ib3R0b206bm9uZX0ubWFpbi1tZW51IHVsIHVsIGxpOmhvdmVyPmF7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O2NvbG9yOiNlNzRlODQ7cGFkZGluZy1sZWZ0OjE1cHg7LW1vei10cmFuc2l0aW9uOmFsbCAuM3MgZWFzZTstby10cmFuc2l0aW9uOmFsbCAuM3MgZWFzZTstd2Via2l0LXRyYW5zaXRpb246YWxsIC4zcyBlYXNlOy1tcy10cmFuc2l0aW9uOmFsbCAuM3MgZWFzZTt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZX19Lm1haW4tbWVudSB1bCB1bCBsaSBzcGFuPmF7Zm9udC13ZWlnaHQ6NDAwIWltcG9ydGFudH0ubWFpbi1tZW51IHVsIHVsIGxpIHNwYW4+YTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjk7Y29sb3I6I2U3NGU4NDtwYWRkaW5nLWxlZnQ6MThweDtvcGFjaXR5OjF9Lm1haW4tbWVudSB1bCB1bCBsaSBzcGFuPmE6YWZ0ZXJ7Zm9udC1mYW1pbHk6RWxlZ2FudEljb25zO2NvbnRlbnQ6XCJcXDM1XCI7ZmxvYXQ6cmlnaHQ7Zm9udC1zaXplOjE2cHg7Zm9udC1zaXplOjFyZW07bWFyZ2luLXRvcDotMnB4fS5tYWluLW1lbnUgdWwgdWwgdWx7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXRvcDowO3otaW5kZXg6MTtoZWlnaHQ6YXV0bztsZWZ0OjEwMCU7dG9wOjA7bWFyZ2luOjA7cGFkZGluZzowO2JhY2tncm91bmQ6I2ZmZjttaW4td2lkdGg6MTkwcHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtib3gtc2hhZG93OjAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KX0ubWFpbi1tZW51IHVsIHVsIHVsLnRoaXJkX2xldmVsX2xlZnR7cmlnaHQ6MTAwJTtsZWZ0OmF1dG99Lm1haW4tbWVudSB1bCB1bCB1bCBsaSBhe2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZGVkZWQhaW1wb3J0YW50fS5tYWluLW1lbnUgdWwgdWwgdWw6YmVmb3Jle2JvcmRlci13aWR0aDowO21hcmdpbi1sZWZ0OjB9QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXsuYnRuX21vYmlsZXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjE1cHg7dG9wOjE1cHg7d2lkdGg6MzBweDtkaXNwbGF5OmJsb2NrO3otaW5kZXg6OTk5OX0uaGFtYnVyZ2VyLWlubmVyLC5oYW1idXJnZXItaW5uZXI6OmFmdGVyLC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiMzMzMhaW1wb3J0YW50fS5oYW1idXJnZXItLXNwaW4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIsLmhhbWJ1cmdlci0tc3Bpbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIsLmhhbWJ1cmdlci0tc3Bpbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2U3NGU4NCFpbXBvcnRhbnR9bmF2I21lbnV7ZGlzcGxheTpub25lIWltcG9ydGFudH0ubW0tbWVudXtiYWNrZ3JvdW5kOiNmZmYhaW1wb3J0YW50fS5tYWluLW1lbnV7dG9wOjA7cmlnaHQ6MDtmbG9hdDpub25lfXVsLm1tLWxpc3R2aWV3e2xpbmUtaGVpZ2h0OjI1cHh9dWwubW0tbGlzdHZpZXcgbGkgYXtjb2xvcjojNTU1IWltcG9ydGFudDtkaXNwbGF5OmJsb2NrfX0iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header_sticky\">\t\n  <a href=\"#menu\" class=\"btn_mobile\">\n    <div class=\"hamburger hamburger--spin\" id=\"hamburger\">\n      <div class=\"hamburger-box\">\n        <div class=\"hamburger-inner\"></div>\n      </div>\n    </div>\n  </a>\n  <!-- /btn_mobile-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-6\">\n        <div id=\"logo_home\">\n          <h1><a href=\"index-2.html\" title=\"Findoctor\">My Clinic</a></h1>\n        </div>\n      </div>\n      <div class=\"col-lg-9 col-6\">\n        <ul id=\"top_access\">\n          <li><a href=\"/login\"><i class=\"pe-7s-user\"></i></a></li>\n          <li><a href=\"/register-doctor\"><i class=\"pe-7s-add-user\"></i></a></li>\n        </ul>\n        <nav id=\"menu\" class=\"main-menu\">\n          <ul>\n            <li>\n              <span><a href=\"/home\">Home</a></span>\n              \n            </li>\n            <li>\n              <span><a href=\"/list-clinics\">Clinics</a></span>\n              \n            </li>\n            <li>\n              <span><a href=\"/list-doctors\">Doctors</a></span>\n              \n            </li>\n                <li><a href=\"submit-review.html\">Submit Review</a></li>\n                <li><a href=\"/login\">Login</a></li>\n                <li><a href=\"/register-doctor\">Register Doctor</a></li>\n                <li><a href=\"/register\">Register</a></li>\n                \n              \n          </ul>\n             \n          \n        </nav>\n           \n                        \n        \n        <!-- /main-menu -->\n      </div>\n    </div>\n  </div>\n  <!-- /container -->\n</header>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/register-doctor/register-doctor.component.css":
/*!***************************************************************!*\
  !*** ./src/app/register-doctor/register-doctor.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWRvY3Rvci9yZWdpc3Rlci1kb2N0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/register-doctor/register-doctor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/register-doctor/register-doctor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div id=\"hero_register\">\n    <div class=\"container margin_120_95\">\t\t\t\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <h1>It's time to find you!</h1>\n          <p class=\"lead\">Te pri adhuc simul. No eros errem mea. Diam mandamus has ad. Invenire senserit ad has, has ei quis iudico, ad mei nonumes periculis.</p>\n          <div class=\"box_feat_2\">\n            <i class=\"pe-7s-map-2\"></i>\n            <h3>Let patients to Find you!</h3>\n            <p>Ut nam graece accumsan cotidieque. Has voluptua vivendum accusamus cu. Ut per assueverit temporibus dissentiet.</p>\n          </div>\n          <div class=\"box_feat_2\">\n            <i class=\"pe-7s-date\"></i>\n            <h3>Easly manage Bookings</h3>\n            <p>Has voluptua vivendum accusamus cu. Ut per assueverit temporibus dissentiet. Eum no atqui putant democritum, velit nusquam sententiae vis no.</p>\n          </div>\n          <div class=\"box_feat_2\">\n            <i class=\"pe-7s-phone\"></i>\n            <h3>Instantly via Mobile</h3>\n            <p>Eos eu epicuri eleifend suavitate, te primis placerat suavitate his. Nam ut dico intellegat reprehendunt, everti audiam diceret in pri, id has clita consequat suscipiantur.</p>\n          </div>\n        </div>\n        <!-- /col -->\n        <div class=\"col-lg-5 ml-auto\">\n          <div class=\"box_form\">\n            <form>\n              <div class=\"row\">\n                <div class=\"col-md-6 \">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\">\n                  </div>\n                </div>\n              </div>\n              <!-- /row -->\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Specialization\">\n                  </div>\n                </div>\n              </div>\n              <!-- /row -->\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"City\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <select class=\"form-control\">\n                      <option value=\"\">Country</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <!-- /row -->\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Mobile Phone\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Office Phone\">\n                  </div>\n                </div>\n              </div>\n              <!-- /row -->\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\">\n                  </div>\n                </div>\n              </div>\n              <!-- /row -->\n              <p class=\"text-center add_top_30\"><input type=\"submit\" class=\"btn_1\" value=\"Submit\"></p>\n              <div class=\"text-center\"><small>Ut nam graece accumsan cotidieque. Has voluptua vivendum accusamus cu. Ut per assueverit temporibus dissentiet.</small></div>\n            </form>\n          </div>\n          <!-- /box_form -->\n        </div>\n        <!-- /col -->\n      </div>\n      <!-- /row -->\n    </div>\n    <!-- /container -->\n  </div>\n  <!-- /hero_register -->\n</main>\n<!-- /main -->\n"

/***/ }),

/***/ "./src/app/register-doctor/register-doctor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/register-doctor/register-doctor.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDoctorComponent", function() { return RegisterDoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterDoctorComponent = /** @class */ (function () {
    function RegisterDoctorComponent() {
    }
    RegisterDoctorComponent.prototype.ngOnInit = function () {
    };
    RegisterDoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-doctor',
            template: __webpack_require__(/*! ./register-doctor.component.html */ "./src/app/register-doctor/register-doctor.component.html"),
            styles: [__webpack_require__(/*! ./register-doctor.component.css */ "./src/app/register-doctor/register-doctor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterDoctorComponent);
    return RegisterDoctorComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"bg_color_2\">\n    <div class=\"container margin_60_35\">\n      <div id=\"register\">\n        <h1>Please register to Findoctor!</h1>\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-5\">\n            <form>\n              <div class=\"box_form\">\n                <div class=\"form-group\">\n                  <label>Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Your name\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Last name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Your last name\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Email</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Your email address\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Password</label>\n                  <input type=\"password\" class=\"form-control\" id=\"password1\" name=\"password1\" placeholder=\"Your password\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Confirm password</label>\n                  <input type=\"password\" class=\"form-control\" id=\"password2\" name=\"password2\" placeholder=\"Confirm password\">\n                </div>\n                <div id=\"pass-info\" class=\"clearfix\"></div>\n                <div class=\"checkbox-holder text-left\">\n                  <div class=\"checkbox_2\">\n                    <input type=\"checkbox\" value=\"accept_2\" id=\"check_2\" name=\"check_2\" checked>\n                    <label for=\"check_2\"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>\n                  </div>\n                </div>\n                <div class=\"form-group text-center add_top_30\">\n                  <input class=\"btn_1\" type=\"submit\" value=\"Submit\">\n                </div>\n              </div>\n              <p class=\"text-center\"><small>Has voluptua vivendum accusamus cu. Ut per assueverit temporibus dissentiet. Eum no atqui putant democritum, velit nusquam sententiae vis no.</small></p>\n            </form>\n          </div>\n        </div>\n        <!-- /row -->\n      </div>\n      <!-- /register -->\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mahmoudtolba/Documents/myClinic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map