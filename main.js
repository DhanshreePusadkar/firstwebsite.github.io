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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'Home', component: _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] },
    { path: 'About', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__["IntroComponent"] },
    { path: 'Gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"] },
    { path: 'Services', component: _service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"] },
    { path: 'Testimonial', component: _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__["TestimonialComponent"] },
    { path: 'Clients', component: _client_client_component__WEBPACK_IMPORTED_MODULE_8__["ClientComponent"] },
    { path: 'Pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n  <div class=\"top-border wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\"></div>\n  <div class=\"right-border wow fadeInRight animated\" style=\"visibility: visible; animation-name: fadeInRight;\"></div>\n  <div class=\"bottom-border wow fadeInUp animated\" style=\"visibility: visible; animation-name: fadeInUp;\"></div>\n  <div class=\"left-border wow fadeInLeft animated\" style=\"visibility: visible; animation-name: fadeInLeft;\"></div>\n</div>\n  <!--Ma7in Content Area-->\n  <main id=\"content\">\n      <header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\n        <app-navigation></app-navigation>\n      </header>\n  </main>\n  <router-outlet></router-outlet>\n  <!--End Main Content Area-->\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'firstwebsite';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _client_client_component__WEBPACK_IMPORTED_MODULE_8__["ClientComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_11__["SocialComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_14__["ServiceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"]
            ],
            providers: [_config_service__WEBPACK_IMPORTED_MODULE_15__["ConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/client/client.component.css":
/*!*********************************************!*\
  !*** ./src/app/client/client.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/client.component.html":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Clients-->\n<section id=\"clients\" class=\"scrollto clearfix\">\n  <div class=\"row clearfix\">\n\n      <div class=\"col-3\">\n\n          <div class=\"section-heading\">\n              <h3>TRUST</h3>\n              <h2 class=\"section-title\">Companies who use our services</h2>\n              <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                  eiusmod\n                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>\n          </div>\n\n      </div>\n\n      <div class=\"col-2-3\">\n\n          <a href=\"#\" class=\"col-3\">\n              <img src=\"../assets/images/company-images/company-logo1.png\" alt=\"Company\"/>\n              <div class=\"client-overlay\"><span>Tree</span></div>\n          </a>\n          <a href=\"#\" class=\"col-3\">\n              <img src=\"../assets/images/company-images/company-logo2.png\" alt=\"Company\"/>\n              <div class=\"client-overlay\"><span>Fingerprint</span></div>\n          </a>\n          <a href=\"#\" class=\"col-3\">\n              <img src=\"../assets/images/company-images/company-logo3.png\" alt=\"Company\"/>\n              <div class=\"client-overlay\"><span>The Man</span></div>\n          </a>\n          <a href=\"#\" class=\"col-3\">\n              <img src=\"../assets/images/company-images/company-logo4.png\" alt=\"Company\"/>\n              <div class=\"client-overlay\"><span>Mustache</span></div>\n          </a>\n          <a href=\"#\" class=\"col-3\">\n              <img src=\"../assets/images/company-images/company-logo5.png\" alt=\"Company\"/>\n              <div class=\"client-overlay\"><span>Goat</span></div>\n          </a>\n          <a href=\"#\" class=\"col-3\">\n              <img src=\"../assets/images/company-images/company-logo6.png\" alt=\"Company\"/>\n              <div class=\"client-overlay\"><span>Justice</span></div>\n          </a>\n          <a href=\"#\" class=\"col-3\">\n              <img src=\"../assets/images/company-images/company-logo7.png\" alt=\"Company\"/>\n              <div class=\"client-overlay\"><span>Ball</span></div>\n          </a>\n          <a href=\"#\" class=\"col-3\">\n              <img src=\"../../assets/images/company-images/company-logo8.png\" alt=\"Company\"/>\n              <div class=\"client-overlay\"><span>Cold</span></div>\n          </a>\n\n          <a href=\"#\" class=\"col-3\">\n              <img src=\"../assets/images/company-images/company-logo9.png\" alt=\"Company\"/>\n              <div class=\"client-overlay\"><span>Cold</span></div>\n          </a>\n\n      </div>\n\n  </div>\n</section>\n<!--End of Clients-->"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.config = _configuration__WEBPACK_IMPORTED_MODULE_1__["configuration"];
    }
    ConfigService.prototype.getconfig = function () {
        return this.config;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/configuration.ts":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuration", function() { return configuration; });
var configuration = {
    header: {
        heading: 'first website',
        headingtext: 'Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
        buttontext: 'do some action!',
        buttonlink: '\home'
    },
};


/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--Content Section-->\n <div id=\"services\" class=\"scrollto clearfix\">\n\n  <div class=\"row no-padding-bottom clearfix\">\n\n\n      <!--Content Left Side-->\n      <div class=\"col-3\">\n          <!--User Testimonial-->\n          <blockquote class=\"testimonial text-right bigtest\">\n              <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                  labore\n                  et dolore magna aliqua</q>\n              <footer>— John Doe, Happy Customer</footer>\n          </blockquote>\n          <!-- End of Testimonial-->\n\n      </div>\n      <!--End Content Left Side-->\n\n      <!--Content of the Right Side-->\n      <div class=\"col-3\">\n          <div class=\"section-heading\">\n              <h3>BELIEVING</h3>\n              <h2 class=\"section-title\">Focusing On What Matters Most</h2>\n              <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>\n          </div>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n              dicta sunt explicabo.\n          </p>\n          <p>\n              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!\n          </p>\n          <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n          <a href=\"#\" data-videoid=\"UYJ5IjBRlW8\" data-videosite=\"youtube\" class=\"button video link-lightbox\">\n              WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n          </a>\n      </div>\n      <!--End Content Right Side-->\n\n      <div class=\"col-3\">\n          <img src=\"../../assets/images/user-images/dancer.jpg\" alt=\"Dancer\"/>\n      </div>\n\n  </div>\n\n\n</div>\n<!--End of Content Section-->\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer id=\"landing-footer\" class=\"clearfix\">\n  <div class=\"row clearfix\">\n\n      <p id=\"copyright\" class=\"col-2\">Made with love by <a href=\"https://www.shapingrain.com\">ShapingRain</a></p>\n\n      <!--Social Icons in Footer-->\n      <ul class=\"col-2 social-icons\" >\n          <app-social></app-social>\n      </ul>\n      <!--End of Social Icons in Footer-->\n  </div>\n</footer>\n<!--End of Footer-->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Gallery-->\n<aside id=\"gallery\" class=\"row text-center scrollto clearfix\" data-featherlight-gallery\ndata-featherlight-filter=\"a\">\n\n<a href=\"../assets/images/gallery-images/gallery-image-1.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.1s\"><img src=\"../assets/images/gallery-images/gallery-image-1.jpg\" alt=\"Landing Page\"/></a>\n<a href=\"../assets/images/gallery-images/gallery-image-2.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.3s\"><img src=\"../assets/images/gallery-images/gallery-image-2.jpg\" alt=\"Landing Page\"/></a>\n<a href=\"../assets/images/gallery-images/gallery-image-3.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.5s\"><img src=\"../assets/images/gallery-images/gallery-image-3.jpg\" alt=\"Landing Page\"/></a>\n<a href=\"../assets/images/gallery-images/gallery-image-4.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"1.1s\"><img src=\"../assets/images/gallery-images/gallery-image-4.jpg\" alt=\"Landing Page\"/></a>\n<a href=\"../assets/images/gallery-images/gallery-image-5.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.9s\"><img src=\"../assets/images/gallery-images/gallery-image-5.jpg\" alt=\"Landing Page\"/></a>\n<a href=\"../assets/images/gallery-images/gallery-image-6.jpg\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.7s\"><img src=\"../assets/images/gallery-images/gallery-image-6.jpg\" alt=\"Landing Page\"/></a>\n\n</aside>\n<!--End of Gallery-->"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\n        <div id=\"banner-content\" class=\"row clearfix\">\n\n                <div class=\"col-38\">\n        \n                    <div class=\"section-heading\">\n                        <h1>{{header.heading}}</h1>\n                        <h2>{{header.headingtext}}</h2>\n                    </div>\n        \n                    <!--Call to Action-->\n                    <a href=\"{{header.buttonlink}}\" class=\"button\">{{header.buttontext}}</a>\n                    <!--End Call to Action-->\n        \n                </div>\n           \n        \n            </div><!--End of Row-->\n      </header>\n        <!--Banner Content-->\n    \n   \n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(config) {
        this.config = config;
        this.header = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.header = this.getHeader();
    };
    HeaderComponent.prototype.getHeader = function () {
        return this.config.getconfig().header;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Introduction-->\n<section id=\"about\" class=\"introduction scrollto\">\n\n  <div class=\"row clearfix\">\n\n      <div class=\"col-3\">\n          <div class=\"section-heading\">\n              <h3>SUCCESS</h3>\n              <h2 class=\"section-title\">How We Help You To Sell Your Product</h2>\n              <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>\n          </div>\n\n      </div>\n\n      <div class=\"col-2-3\">\n\n          <!--Icon Block-->\n          <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\">\n              <!--Icon-->\n              <div class=\"icon\">\n                  <i class=\"fa fa-html5 fa-2x\"></i>\n              </div>\n              <!--Icon Block Description-->\n              <div class=\"icon-block-description\">\n                  <h4>HTML5 &amp; CSS3</h4>\n                  <p>Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro\n                      neglegentur iudico</p>\n              </div>\n          </div>\n          <!--End of Icon Block-->\n\n          <!--Icon Block-->\n          <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.3s\">\n              <!--Icon-->\n              <div class=\"icon\">\n                  <i class=\"fa fa-bolt fa-2x\"></i>\n              </div>\n              <!--Icon Block Description-->\n              <div class=\"icon-block-description\">\n                  <h4>Easy to Use</h4>\n                  <p>Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit\n                      detracto mediocrem disputationi</p>\n              </div>\n          </div>\n          <!--End of Icon Block-->\n\n          <!--Icon Block-->\n          <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\n              <!--Icon-->\n              <div class=\"icon\">\n                  <i class=\"fa fa-tablet fa-2x\"></i>\n              </div>\n              <!--Icon Block Description-->\n              <div class=\"icon-block-description\">\n                  <h4>Fully Responsive</h4>\n                  <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\n                      nemore vivendum</p>\n              </div>\n          </div>\n          <!--End of Icon Block-->\n\n          <!--Icon Block-->\n          <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\n              <!--Icon-->\n              <div class=\"icon\">\n                  <i class=\"fa fa-rocket fa-2x\"></i>\n              </div>\n              <!--Icon Block Description-->\n              <div class=\"icon-block-description\">\n                  <h4>Parallax Effect</h4>\n                  <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\n                      nemore vivendum</p>\n              </div>\n          </div>\n          <!--End of Icon Block-->\n\n      </div>\n\n  </div>\n\n\n</section>\n<!--End of Introduction-->\n"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div id=\"header\" class=\"nav-collapse\">\n        <div class=\"row clearfix\">\n            <div class=\"col-1\">\n\n                <!--Logo-->\n                <div id=\"logo\">\n\n                    <!--Logo that is shown on the banner-->\n                    <img src=\"../../assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\"/>\n                    <!--End of Banner Logo-->\n\n                    <!--The Logo that is shown on the sticky Navigation Bar-->\n                    <img src=\"../../assets/images/logo-2.png\" id=\"navigation-logo\" alt=\"Landing Page\"/>\n                    <!--End of Navigation Logo-->\n\n                </div>\n                <!--End of Logo-->\n\n                <app-social></app-social>\n                <!--Main Navigation-->\n<nav id=\"nav-main\">\n    <ul>\n        <li>\n            <a routerLink=\"/Home\" (click)=\"getAchtiveTab('home')\"[class.active]=\"activetab==='home'\">Home</a>\n        </li>\n        <li>\n            <a routerLink=\"/About\" (click)=\"getAchtiveTab('about')\"[class.active]=\"activetab==='about'\">About</a>\n        </li>\n        <li>\n            <a routerLink=\"/Gallery\" (click)=\"getAchtiveTab('gallery')\"[class.active]=\"activetab==='gallery'\">Gallery</a>\n        </li>\n        <li>\n            <a routerLink=\"/Services\" (click)=\"getAchtiveTab('services')\"[class.active]=\"activetab==='services'\">Services</a>\n        </li>\n        <li>\n            <a routerLink=\"/Testimonial\" (click)=\"getAchtiveTab('testimonials')\"[class.active]=\"activetab==='testimonials'\">Testimonials</a>\n        </li>\n        <li>\n                <a routerLink=\"/Clients\" (click)=\"getAchtiveTab('clients')\"[class.active]=\"activetab==='clients'\">Clients</a>\n            </li>\n        <li>\n            <a routerLink=\"/Pricing\" (click)=\"getAchtiveTab('pricing')\"[class.active]=\"activetab==='pricing'\">Pricing</a>\n        </li>\n    </ul>\n</nav>\n<!--End of Main Navigation-->\n                <div id=\"nav-trigger\"><span></span></div>\n                <nav id=\"nav-mobile\"></nav>\n\n            </div>\n        </div>\n    </div><!--End of Header-->"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.activetab = "home";
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.getActiveTab = function (tabname) {
        this.activetab = tabname;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/*!************************************************!*\
  !*** ./src/app/pricing/pricing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Pricing Tables-->\n<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n  <div class=\"row clearfix\">\n\n      <div class=\"section-heading\">\n          <h3>YOUR CHOICE</h3>\n          <h2 class=\"section-title\">We have the right package for you</h2>\n      </div>\n\n      <!--Pricing Block-->\n      <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n          <div class=\"pricing-block-content\">\n              <h3>Personal</h3>\n              <p class=\"pricing-sub\">The standard version</p>\n              <div class=\"pricing\">\n                  <div class=\"price\"><span>$</span>19</div>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n              </div>\n              <ul>\n                  <li>5 Downloads</li>\n                  <li>2 Extensions</li>\n                  <li>Tutorials</li>\n                  <li>Forum Support</li>\n                  <li>1 year free updates</li>\n              </ul>\n              <a href=\"#\" class=\"button\">BUY TODAY</a>\n          </div>\n      </div>\n      <!--End Pricing Block-->\n\n      <!--Pricing Block-->\n      <div class=\"pricing-block featured col-3 wow fadeInUp\" data-wow-delay=\"0.6s\">\n          <div class=\"pricing-block-content\">\n              <h3>Student</h3>\n              <p class=\"pricing-sub\">Most popular choice</p>\n              <div class=\"pricing\">\n                  <div class=\"price\"><span>$</span>29</div>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n              </div>\n              <ul>\n                  <li>15 Downloads</li>\n                  <li>5 Extensions</li>\n                  <li>Tutorials with Files</li>\n                  <li>Forum Support</li>\n                  <li>2 years free updates</li>\n              </ul>\n              <a href=\"#\" class=\"button\">BUY TODAY</a>\n          </div>\n      </div>\n      <!--End Pricing Block-->\n\n      <!--Pricing Block-->\n      <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.8s\">\n          <div class=\"pricing-block-content\">\n              <h3>Business</h3>\n              <p class=\"pricing-sub\">For the whole team</p>\n              <div class=\"pricing\">\n                  <div class=\"price\"><span>$</span>49</div>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n              </div>\n              <ul>\n                  <li>Unlimited Downloads</li>\n                  <li>Unlimited Extensions</li>\n                  <li>HD Video Tutorials</li>\n                  <li>Chat Support</li>\n                  <li>Lifetime free updates</li>\n              </ul>\n              <a href=\"#\" class=\"button\">BUY TODAY</a>\n          </div>\n      </div>\n      <!--End Pricing Block-->\n\n  </div>\n</section>\n<!--End of Pricing Tables-->"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/*!***********************************************!*\
  !*** ./src/app/service/service.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <!--Content Section-->\n        <div id=\"services\" class=\"scrollto clearfix\">\n\n          <div class=\"row no-padding-bottom clearfix\">\n\n\n              <!--Content Left Side-->\n              <div class=\"col-3\">\n                  <!--User Testimonial-->\n                  <blockquote class=\"testimonial text-right bigtest\">\n                      <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                          labore\n                          et dolore magna aliqua</q>\n                      <footer>— John Doe, Happy Customer</footer>\n                  </blockquote>\n                  <!-- End of Testimonial-->\n\n              </div>\n              <!--End Content Left Side-->\n\n              <!--Content of the Right Side-->\n              <div class=\"col-3\">\n                  <div class=\"section-heading\">\n                      <h3>BELIEVING</h3>\n                      <h2 class=\"section-title\">Focusing On What Matters Most</h2>\n                      <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>\n                  </div>\n                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n                      dicta sunt explicabo.\n                  </p>\n                  <p>\n                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n                      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!\n                  </p>\n                  <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n                  <a href=\"#\" data-videoid=\"UYJ5IjBRlW8\" data-videosite=\"youtube\" class=\"button video link-lightbox\">\n                      WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n                  </a>\n              </div>\n              <!--End Content Right Side-->\n\n              <div class=\"col-3\">\n                  <img src=\"../../assets/images/user-images/dancer.jpg\" alt=\"Dancer\"/>\n              </div>\n\n          </div>\n\n\n      </div>\n      <!--End of Content Section-->"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\n\n    <!--Social Icons in Header-->\n    <ul class=\"social-icons\">\n        <li>\n            <a target=\"_blank\" title=\"Facebook\" href=\"https://www.facebook.com/username\">\n                <i class=\"fa fa-facebook fa-1x\"></i><span>Facebook</span>\n            </a>\n        </li>\n        <li>\n            <a target=\"_blank\" title=\"Google+\" href=\"http://google.com/+username\">\n                <i class=\"fa fa-google-plus fa-1x\"></i><span>Google+</span>\n            </a>\n        </li>\n        <li>\n            <a target=\"_blank\" title=\"Twitter\" href=\"http://www.twitter.com/username\">\n                <i class=\"fa fa-twitter fa-1x\"></i><span>Twitter</span>\n            </a>\n        </li>\n        <li>\n            <a target=\"_blank\" title=\"Instagram\" href=\"http://www.instagram.com/username\">\n                <i class=\"fa fa-instagram fa-1x\"></i><span>Instagram</span>\n            </a>\n        </li>\n        <li>\n            <a target=\"_blank\" title=\"behance\" href=\"http://www.behance.net\">\n                <i class=\"fa fa-behance fa-1x\"></i><span>Behance</span>\n            </a>\n        </li>\n    </ul>\n    <!--End of Social Icons in Header-->\n\n</aside>"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/testimonial/testimonial.component.css":
/*!*******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.html":
/*!********************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <!--Testimonials-->\n      <aside id=\"testimonials\" class=\"scrollto text-center\" data-enllax-ratio=\".2\">\n\n        <div class=\"row clearfix\">\n\n            <div class=\"section-heading\">\n                <h3>FEEDBACK</h3>\n                <h2 class=\"section-title\">What our customers are saying</h2>\n            </div>\n\n            <!--User Testimonial-->\n            <blockquote class=\"col-3 testimonial classic\">\n                <img src=\"../assets/images/user-images/user-1.jpg\" alt=\"User\"/>\n                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et dolore magna aliqua</q>\n                <footer>John Doe - Happy Customer</footer>\n            </blockquote>\n            <!-- End of Testimonial-->\n\n            <!--User Testimonial-->\n            <blockquote class=\"col-3 testimonial classic\">\n                <img src=\"../assets/images/user-images/user-2.jpg\" alt=\"User\"/>\n                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et dolore magna aliqua</q>\n                <footer>Roslyn Doe - Happy Customer</footer>\n            </blockquote>\n            <!-- End of Testimonial-->\n\n            <!--User Testimonial-->\n            <blockquote class=\"col-3 testimonial classic\">\n                <img src=\"../assets/images/user-images/user-3.jpg\" alt=\"User\"/>\n                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et dolore magna aliqua</q>\n                <footer>Thomas Doe - Happy Customer</footer>\n            </blockquote>\n            <!-- End of Testimonial-->\n\n        </div>\n\n    </aside>\n    <!--End of Testimonials-->"

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.ts":
/*!******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.ts ***!
  \******************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    TestimonialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__(/*! ./testimonial.component.html */ "./src/app/testimonial/testimonial.component.html"),
            styles: [__webpack_require__(/*! ./testimonial.component.css */ "./src/app/testimonial/testimonial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialComponent);
    return TestimonialComponent;
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

module.exports = __webpack_require__(/*! E:\DHANSHREE\MY PROJECT FILE\ANGULAR\firstwebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map