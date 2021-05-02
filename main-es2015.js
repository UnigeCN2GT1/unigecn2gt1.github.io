(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Atomic\Desktop\Code\unigecn2gt1.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "HwiI":
/*!***************************************!*\
  !*** ./src/app/data/en/questions1.ts ***!
  \***************************************/
/*! exports provided: enQuiz1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enQuiz1", function() { return enQuiz1; });
const enQuiz1 = [
    {
        context: 'I have just received an email and I do not know who it is from. It is asking me to click on a link to change my password to connect to the NGO’s services.',
        question: 'Should I click on the link and change my password?',
        responses: {
            1: 'Yes, of course I should because it concerns the organization’s services.',
            2: 'Not sure, but I could just click on the link to see where it takes me.',
            3: 'No, I should neither click on the link nor change your password before being sure of who the sender is.',
        },
        correct: 3,
        reason: 'The link could lead to a site controlled by cybercriminals, who could then use your password to compromise your data, your computer or your organization, either by stealing important information or by using ransomware to lock your documents and asking for money to unlock them. This is known as a phishing attack.'
    },
    {
        context: 'I have just received an email from someone in my organization. It looks legitimate because the name, icon and email address match what I am used to seeing from them.',
        question: 'How can I be sure that the sender of the e-mail is who they claim to be?',
        responses: {
            1: 'Follow your instincts.',
            2: 'Ask yourself if you were expecting this email or check with the sender by contacting them on another device, for example.',
        },
        correct: 2,
        reason: 'By checking with the sender whether or not they really sent the email, you can see whether they really sent the email, or if their account was compromised.'
    },
    {
        context: 'I have created a new email account and have to set a new password to access its inbox.',
        question: 'Which password should I use?',
        responses: {
            1: '188Hello',
            2: 'The same password I use on my other email accounts.',
            3: '7z23Nk&ui',
            4: 'Spring2021'
        },
        correct: 3,
        reason: 'By using a password that is too short or too simple, you expose yourself to having the password be cracked or enumerated. By making the password more complex and longer, you reduce the likelihood of that happening. By not reusing your passwords, you reduce how many services can be compromised by knowing one password. If you write your passwords down, make sure only you can retrieve them and that they are stored in a safe place.'
    },
    {
        context: 'I changed my email account password 5 months ago and my account has not been compromised.',
        question: 'Should I change my account password?',
        responses: {
            1: 'Yes, I should change it regularly',
            2: 'Yes, if I wish to.',
            3: 'No, I changed it a few months ago already and it is still secure, so there is no need.',
        },
        correct: 1,
        reason: 'It is important to change your password regularly because it reduces the likelihood of your account being compromised. Additionally, you can set up haveibeenpwned.com to check if and when your email address appears in a data breach.'
    },
    {
        context: 'A colleague or acquaintance says they need information that is on one of my accounts urgently, and I cannot access it currently because I am not at my computer. They ask me for the password so that they can retrieve it without bothering me.',
        question: 'Should I give this person my password?',
        responses: {
            1: 'Yes, I can because it is an emergency!',
            2: 'I try to avoid doing this, but it is an emergency, so yes.',
            3: 'No, absolutely not.',
        },
        correct: 3,
        reason: 'It is important never to share your passwords with other people, because you cannot be certain it is really them. Cybercriminals regularly instill a sense of urgency to get you to share information. If it was really them, there is the possibility that the message containing the password is intercepted by a cybercriminal.'
    },
    {
        context: 'I am leaving my workstation at the office to go grab a coffee with some colleagues.',
        question: 'Should I log out of my mailbox?',
        responses: {
            1: 'Yes, it is very important.',
            2: 'No, the only people that can access this computer are my colleagues.',
            3: 'No, there is no need as the computer will go to sleep after a short while anyways.',
        },
        correct: 1,
        reason: 'It is important to log out of your services and from your computer because someone -- including your colleagues -- could possibly access it for some nefarious purposes, such as retrieving confidential information.'
    },
];


/***/ }),

/***/ "K6Ak":
/*!*******************************************!*\
  !*** ./src/app/services/title.service.ts ***!
  \*******************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



/**
 * Class that handles the dynamic display of webpage titles.
 *
 * @export
 */
class TitleService {
    /**
     * Creates an instance of TitleService.
     *
     * @param title A service that can modify the title in the HTML header.
     */
    constructor(title) {
        this.title = title;
    }
    /**
     * Sets a new title to the page.
     *
     * @param newTitle The new title of the page.
     */
    setTitle(newTitle) {
        this.title.setTitle(newTitle + ' - CN2 GT1');
    }
}
TitleService.ɵfac = function TitleService_Factory(t) { return new (t || TitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"])); };
TitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TitleService, factory: TitleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OEO0":
/*!**************************************************************!*\
  !*** ./src/app/content/common-ui/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function () { return ["/home"]; };
const _c1 = function (a0) { return { "active": a0 }; };
/**
 * The header element of the page.
 *
 * @export
 */
class HeaderComponent {
    /**
     * Creates an instance of HeaderComponent.
     *
     * @param router The Router to observe the url path from.
     */
    constructor(router) {
        this.router = router;
        /** What page is currently loaded, used to highlight the navbar. */
        this.currentPath = '/home';
    }
    /** Initialises the component. */
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterEvent"]) {
                this.currentPath = event.url;
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 8, consts: [[1, "w-100", "row", "m-0", "py-0", "px-3", "d-flex", "flex-row", "justify-content-between"], [1, "ml-2", "text-center"], [3, "routerLink"], [1, "d-flex", "flex-row", "flex-wrap"], [3, "ngClass"], ["href", "/home"], ["href", "/quiz"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " CN2GT1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx.currentPath.localeCompare("/home") == 0 || ctx.currentPath.localeCompare("/") == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx.currentPath.localeCompare("/quiz") == 0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["header[_ngcontent-%COMP%] {\n  z-index: 997;\n  transition: all 0.5s ease-in-out;\n  padding: 14px 0;\n  background: #1e1146;\n}\n\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n\nli.active[_ngcontent-%COMP%] {\n  background: #27165b;\n  border-radius: 5px;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #60baff !important;\n}\n\nli[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 1px #1e1146, 0 0 10px #0000FF;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 768px) {\n  header[_ngcontent-%COMP%] {\n    padding: 4px 0 !important;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0 auto !important;\n    margin-bottom: 0.25rem !important;\n  }\n  header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 4px 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0U7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFLRTtFQUNFLHlCQUFBO0FBRko7O0FBT0U7RUFDRSw4Q0FBQTtFQUNBLGlCQUFBO0FBSko7O0FBU0E7RUFDRTtJQUNFLHlCQUFBO0VBTkY7RUFRRTtJQUNFLFdBQUE7RUFOSjtFQVVJO0lBQ0UseUJBQUE7SUFDQSxpQ0FBQTtFQVJOO0VBWUU7SUFFRSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VBWEo7RUFjTTtJQUNFLDRCQUFBO0VBWlI7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIHotaW5kZXg6IDk5NztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgYmFja2dyb3VuZDogIzFlMTE0NjtcclxufVxyXG5cclxuaDEge1xyXG4gIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxubGkuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRjb2xvcjogIzFlMTE0NiwgJGFtb3VudDogNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzYwYmFmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxubGk6bm90KC5hY3RpdmUpIHtcclxuICBhOmhvdmVyIHtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMXB4ICMxZTExNDYsIDAgMCAxMHB4ICMwMDAwRkY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA0cHggMCAhaW1wb3J0YW50O1xyXG5cclxuICAgIG5hdiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG5cclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _content_common_ui_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/common-ui/header/header.component */ "OEO0");
/* harmony import */ var _content_common_ui_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/common-ui/main-body/main-body.component */ "cnKr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




/**
 * Everything.
 *
 * @export
 */
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "h-100", "w-100", "d-flex", "flex-column", "justify-content-between"], [1, "align-self-stretch"], [1, "align-self-stretch", "align-items-stretch", "mb-auto", "h-100"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-main-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_content_common_ui_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _content_common_ui_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_2__["MainBodyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TnWJ":
/*!******************************************!*\
  !*** ./src/app/services/meta.service.ts ***!
  \******************************************/
/*! exports provided: MetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaService", function() { return MetaService; });
/* harmony import */ var src_app_data_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/url */ "VHBP");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/title.service */ "K6Ak");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
// tslint:disable: quotemark






/**
 * Class that handles the dynamic injection of website metadata tags.
 *
 * @export
 */
class MetaService {
    /**
     * Creates an instance of MetaService.
     *
     * @param meta The service that can inject meta data into the HTML page header.
     * @param title A service that sets the webpage's title.
     */
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
    }
    /**
     * Injects the metadata tags into the HTML page. Used for SSR and SEO.
     *
     * @param url The URL of this resource.
     * @param title The title of the page.
     * @param imgUrl The URL of the meta image.
     * @param imgWidth The width of the meta image.
     * @param imgHeight The height of the meta image.
     * @param keywords An assortment of keywords for SEO.
     * @param [description] A description of the content of the page.
     * @param [authorName] The name of the person that wrote the content in the page.
     * @param [authorSocial] The author's social media links.
     */
    setTags(url, title, imgUrl, imgWidth, imgHeight, keywords, description, authorName, authorSocial) {
        this.title.setTitle(title);
        [
            { name: 'og:url', content: url },
            { name: 'og:locale', content: 'en_us' },
            { name: 'og:site_name', content: `${src_app_data_url__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}` },
            { name: 'og:title', content: `${title} @Digital Overdose` },
            { name: 'og:description', content: `${description !== null && description !== void 0 ? description : 'Welcome to Digital Overdose! We\'re an ethical hacking community dedicated to providing help and resources for members and guests. We aim to create a large community that people can enjoy and find support or friends in.'}` },
            { name: 'og:image', content: imgUrl },
            { name: 'description', content: `${description !== null && description !== void 0 ? description : 'Welcome to Digital Overdose! We\'re an ethical hacking community dedicated to providing help and resources for members and guests. We aim to create a large community that people can enjoy and find support or friends in.'}` },
            { name: 'keywords', content: ['digital', 'overdose', 'infosec', 'security', 'cybersec', 'cybersecurity', ...keywords].join(', ') },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:url', content: url },
            { name: 'twitter:image', content: imgUrl },
            { name: 'twitter:label1', content: 'Written By' },
            { name: 'twitter:data1', content: `${authorName !== null && authorName !== void 0 ? authorName : 'Digital Overdose'}` },
            { name: 'twitter:site', content: '@d_overcon' },
            { name: 'twitter:creator', content: `${authorSocial !== null && authorSocial !== void 0 ? authorSocial : '@d_overcon'}` },
            { name: 'twitter:image:width', content: `${imgWidth}` },
            { name: 'twitter:image:height', content: `${imgHeight}` },
        ].forEach(x => this.meta.updateTag(x));
    }
}
MetaService.ɵfac = function MetaService_Factory(t) { return new (t || MetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_title_service__WEBPACK_IMPORTED_MODULE_1__["TitleService"])); };
MetaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MetaService, factory: MetaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VHBP":
/*!*****************************!*\
  !*** ./src/app/data/url.ts ***!
  \*****************************/
/*! exports provided: BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/** The base URL of the website. */
const BASE_URL = 'https://digitaloverdose.tech';


/***/ }),

/***/ "W6Y4":
/*!********************************************************************!*\
  !*** ./src/app/content/common-ui/quiz-body/quiz-body.component.ts ***!
  \********************************************************************/
/*! exports provided: QuizBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizBodyComponent", function() { return QuizBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["anchor"];
function QuizBodyComponent_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizBodyComponent_ng_container_1_div_9_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const q_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onClick($event, q_r7.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "response-", q_r7.key, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", q_r7.key, " - ", q_r7.value, " ");
} }
function QuizBodyComponent_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizBodyComponent_ng_container_1_ng_container_11_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onVerify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function QuizBodyComponent_ng_container_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reason:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizBodyComponent_ng_container_1_ng_template_12_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onNextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Next Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.quiz[ctx_r6.currentQuestion - 1].reason);
} }
function QuizBodyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuizBodyComponent_ng_container_1_div_9_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuizBodyComponent_ng_container_1_ng_container_11_Template, 3, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuizBodyComponent_ng_container_1_ng_template_12_Template, 7, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Question ", ctx_r0.currentQuestion, " / ", ctx_r0.numberOfQuestions, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quiz[ctx_r0.currentQuestion - 1].context);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quiz[ctx_r0.currentQuestion - 1].question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx_r0.quiz[ctx_r0.currentQuestion - 1].responses));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.reasonShown)("ngIfElse", _r5);
} }
function QuizBodyComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your score is ", ctx_r2.Math.round(ctx_r2.correctAnswers / ctx_r2.numberOfQuestions * 100), "%");
} }
class QuizBodyComponent {
    constructor() {
        this.currentQuestion = 1;
        this.selectedAnswer = -1;
        this.reasonShown = false;
        this.correctAnswers = 0;
        this.Math = Math;
    }
    ngOnInit() {
        this.numberOfQuestions = this.quiz.length;
        this.shuffleArray(this.quiz);
    }
    onClick(event, index) {
        const responses = document.getElementById('responses');
        Array.from(responses.children).forEach(x => x.classList.remove('alert-primary'));
        event.target.classList.add('alert-primary');
        this.selectedAnswer = index;
    }
    onVerify() {
        if (this.selectedAnswer < 0) {
            return;
        }
        const responses = document.getElementById('responses');
        Array.from(responses.children).forEach(x => x.classList.remove('selected'));
        this.reasonShown = true;
        // tslint:disable-next-line: triple-equals
        if (this.selectedAnswer == this.quiz[this.currentQuestion - 1].correct) {
            document.getElementById('response-' + this.selectedAnswer).classList.add('alert-success');
            this.correctAnswers += 1;
        }
        else {
            document.getElementById('response-' + this.selectedAnswer).classList.add('alert-danger');
            document.getElementById('response-' + this.quiz[this.currentQuestion - 1].correct).classList.add('alert-success');
        }
    }
    onNextQuestion() {
        this.shuffleArray(this.quiz[this.currentQuestion].responses);
        this.currentQuestion += 1;
        this.selectedAnswer = -1;
        this.reasonShown = false;
    }
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
QuizBodyComponent.ɵfac = function QuizBodyComponent_Factory(t) { return new (t || QuizBodyComponent)(); };
QuizBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizBodyComponent, selectors: [["app-quiz-body"]], viewQuery: function QuizBodyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.anchor = _t.first);
    } }, inputs: { quiz: "quiz" }, decls: 4, vars: 2, consts: [[1, "quiz-container"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "text-center"], [1, "px-1", "py-0", "text-justify"], ["id", "responses", 1, "d-flex", "flex-column"], ["class", "card py-2 px-3 my-1 text-justify", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "card", "py-2", "px-3", "my-1", "text-justify", 3, "id", "click"], [1, "btn", "btn-primary", "mx-auto", "mt-3", 3, "click"], [1, "mt-3"], [1, "text-justify"], [1, "btn", "btn-primary", "mt-3", 3, "click"]], template: function QuizBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizBodyComponent_ng_container_1_Template, 14, 9, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuizBodyComponent_ng_template_2_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuestion != ctx.numberOfQuestions + 1)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]], styles: [".card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: #8a9fff;\n}\n\n.card[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 769px) {\n  .quiz-container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVpei1ib2R5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJxdWl6LWJvZHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAxNTksIDI1NSk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgLnF1aXotY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "XiKI":
/*!****************************************************************!*\
  !*** ./src/app/content/not-found404/not-found404.component.ts ***!
  \****************************************************************/
/*! exports provided: NotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound404Component", function() { return NotFound404Component; });
/* harmony import */ var src_app_data_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/url */ "VHBP");
/* harmony import */ var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/meta.service */ "TnWJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




/**
 * Displays the 404 page.
 *
 * @export
 */
class NotFound404Component {
    /**
     * Creates an instance of NotFound404Component.
     *
     * @param meta The HTML header metadata injection service.
     */
    constructor(meta) {
        this.meta = meta;
    }
    /** Set the page metadata information. */
    ngOnInit() {
        this.meta.setTags(`${src_app_data_url__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}/404-not-found`, 'The error page', `${src_app_data_url__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}/assets/images/404_image.jfif`, 460, 403, ['community', 'discord', 'error', '404'], 'Waffles. Correct Horse Battery Staple. DEBUG. g̵̺̙͍̼͓͈̤̋͒ļ̶̛̖̖̭͎̪͍͉̎͋̿̑́͋̈́̀̈́͊͠ì̴̛͈͇͓̯̤̻͈̯͂̈͂́̊̑͛̈́̏̚ṯ̵͎̝̘̱̜̋̂̓͊̌́̄̽̄̎̃̽̕͝c̵̣̪͍͎̹̪̎̓̓̓͊̽͠ͅh̵̢̡̡̛̭̯̠̥̳̗̘̽͑́̑͑͘e̴̢̡̝̹̼̱͙͚̿͂̍̎́̀̊̄͠ͅs̷̠̣͙̓̈̉̂̉̃́̍̃̉͠͝͝. "><script>console.log(\'test\');</script>');
    }
}
NotFound404Component.ɵfac = function NotFound404Component_Factory(t) { return new (t || NotFound404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"])); };
NotFound404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotFound404Component, selectors: [["app-not-found404"]], decls: 10, vars: 0, consts: [[1, "d-flex", "flex-column"], [1, "media-container"], [1, "text-center"], ["src", "/assets/images/404_image.jfif", "alt", "The Mario 'Your princess is in another castle' meme, but applied to a 'Content not found' error."]], template: function NotFound404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "This is a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " error.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (max-width: 480px) {\n  .media-container[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: xx-large;\n  }\n\n  .media-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 90% !important;\n    aspect-ratio: 1.14;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3QtZm91bmQ0MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUNFLG1CQUFBO0VBREY7O0VBSUE7SUFDRSxxQkFBQTtJQUNBLGtCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJub3QtZm91bmQ0MDQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLm1lZGlhLWNvbnRhaW5lciA+IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAubWVkaWEtY29udGFpbmVyID4gaW1nIHtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIGFzcGVjdC1yYXRpbzogMS4xNDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _content_common_ui_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/common-ui/header/header.component */ "OEO0");
/* harmony import */ var _content_common_ui_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/common-ui/main-body/main-body.component */ "cnKr");
/* harmony import */ var _content_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/home/home.component */ "fzLu");
/* harmony import */ var _utils_service_locator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/service.locator */ "oGAD");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _content_common_ui_quiz_body_quiz_body_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/common-ui/quiz-body/quiz-body.component */ "W6Y4");
/* harmony import */ var _content_quiz_main_quiz_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/quiz-main/quiz-main.component */ "kK2d");
/* harmony import */ var _pipes_number_to_array_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/number-to-array.pipe */ "uApl");














class AppModule {
    constructor(injector) {
        this.injector = injector;
        _utils_service_locator__WEBPACK_IMPORTED_MODULE_5__["ServiceLocator"].injector = this.injector;
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserTransferStateModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"].withServerTransition({ appId: 'unigecn2gt1' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _content_common_ui_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _content_common_ui_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_3__["MainBodyComponent"],
        _content_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _content_common_ui_quiz_body_quiz_body_component__WEBPACK_IMPORTED_MODULE_9__["QuizBodyComponent"],
        _content_quiz_main_quiz_main_component__WEBPACK_IMPORTED_MODULE_10__["QuizMainComponent"],
        _pipes_number_to_array_pipe__WEBPACK_IMPORTED_MODULE_11__["NumberToArrayPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserTransferStateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();


/***/ }),

/***/ "cnKr":
/*!********************************************************************!*\
  !*** ./src/app/content/common-ui/main-body/main-body.component.ts ***!
  \********************************************************************/
/*! exports provided: MainBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBodyComponent", function() { return MainBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*"];
/**
 * The core element of the page.
 *
 * @export
 */
class MainBodyComponent {
}
MainBodyComponent.ɵfac = function MainBodyComponent_Factory(t) { return new (t || MainBodyComponent)(); };
MainBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBodyComponent, selectors: [["app-main-body"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "main-page", "w-100", "h-100", "d-flex", "flex-column", "flex-grow", "justify-content-stretch", "align-self-stretch"], [1, "align-self-stretch", "flex-grow", "h-100"]], template: function MainBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 80% !important;\n}\n\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1ib2R5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQUE7RUFDRjtBQUNGIiwiZmlsZSI6Im1haW4tYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "fzLu":
/*!************************************************!*\
  !*** ./src/app/content/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var src_app_data_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/url */ "VHBP");
/* harmony import */ var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/meta.service */ "TnWJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




/**
 * Displays the Home Page.
 *
 * @export
 */
class HomeComponent {
    /**
     * Creates an instance of HomeComponent.
     *
     * @param meta The HTML header metadata injection service.
     */
    constructor(meta) {
        this.meta = meta;
    }
    /** Set the page metadata information. */
    ngOnInit() {
        this.meta.setTags(`${src_app_data_url__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}/home`, 'Home', `${src_app_data_url__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]}/assets/images/cover.jfif`, 750, 750, ['community', 'discord', 'home', 'socials', 'twitter', 'patreon', 'youtube', 'linkedin', 'github', 'events'], 'Welcome to Digital Overdose !');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, consts: [[1, "intro-bg", "d-flex", "flex-column"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    } }, styles: [".intro-bg[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/cover.jfif\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  \n  background-position: center;\n}\n\n.fancy-container[_ngcontent-%COMP%] {\n  transform: rotate(-5deg);\n}\n\n.fancy-container[_ngcontent-%COMP%]   .fancy[_ngcontent-%COMP%] {\n  font-family: Anton;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 15px;\n}\n\n.fancy-container[_ngcontent-%COMP%]   .bg-1[_ngcontent-%COMP%] {\n  background-color: #b60064;\n  color: #4AF0B1;\n}\n\n.intro-text[_ngcontent-%COMP%] {\n  width: 70%;\n  background-color: #f5f5f5ea;\n  border-radius: 10px;\n  margin: 3rem auto;\n}\n\n.separator-1[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #0C0B0A, red);\n}\n\n.cal-tainer[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/community/cal-bg.svg);\n}\n\n.soc-tainer[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #7289da, #7289da, #4895E6, #4895E6, #4895E6, #1DA1F2, #1DA1F2);\n}\n\n.separator[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #FF0000, #4895E6);\n}\n\n.cal-text[_ngcontent-%COMP%], .soc-text[_ngcontent-%COMP%] {\n  background-color: #f5f5f5cc;\n  border-radius: 10px;\n}\n\n.cal-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .soc-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Anton;\n}\n\n.cal-frame[_ngcontent-%COMP%] {\n  padding-top: 0.6rem !important;\n  padding-bottom: 0.6rem !important;\n}\n\n.cal-text[_ngcontent-%COMP%] {\n  margin-left: 15px !important;\n}\n\n.separator2[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #4895E6, #9100da);\n}\n\n.soc2-tainer[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #9100da, orange);\n}\n\n@media screen and (max-width: 768px) {\n  .intro-text[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n\n  .cal-tainer[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    background-image: none;\n    background: linear-gradient(to bottom, red, orange, red);\n  }\n\n  .cal-frame[_ngcontent-%COMP%] {\n    padding: 0.3rem 0 !important;\n  }\n\n  .soc-tainer[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, #7289da, #7289da, #4895E6, #4895E6, #4895E6, #1DA1F2, #1DA1F2);\n    flex-direction: column !important;\n    align-items: center;\n  }\n\n  .soc-tainer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin: 0.3125rem 0;\n  }\n\n  .soc2-tainer[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, #9100da, orange);\n    flex-direction: column !important;\n    align-items: center;\n  }\n\n  .soc2-tainer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin: 0.3125rem 0;\n  }\n\n  .cal-text[_ngcontent-%COMP%], .cal-frame[_ngcontent-%COMP%] {\n    margin: 4px auto !important;\n    flex: 0 0 80% !important;\n    max-width: 80% !important;\n  }\n\n  .soc-text[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%], .cal-text[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .cal-text[_ngcontent-%COMP%], .cal-frame[_ngcontent-%COMP%] {\n    margin: 0 0 !important;\n    flex: 0 0 95% !important;\n    max-width: 95% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0RBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQXdCLDhEQUFBO0VBQ3hCLDJCQUFBO0FBRUY7O0FBQ0E7RUFDRSx3QkFBQTtBQUVGOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxvREFBQTtBQUFGOztBQUdBO0VBQ0UsMERBQUE7QUFBRjs7QUFHQTtFQUNFLG9HQUFBO0FBQUY7O0FBR0E7RUFDRSx3REFBQTtBQUFGOztBQUdBO0VBSUUsMkJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQURFO0VBQ0Usa0JBQUE7QUFHSjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7QUFBRjs7QUFHQTtFQUNFLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSx3REFBQTtBQUFGOztBQUdBO0VBQ0UsdURBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UscUJBQUE7RUFBRjs7RUFHQTtJQUNFLGlDQUFBO0lBQ0Esc0JBQUE7SUFDQSx3REFBQTtFQUFGOztFQUdBO0lBQ0UsNEJBQUE7RUFBRjs7RUFHQTtJQUNFLHFHQUFBO0lBQ0EsaUNBQUE7SUFDQSxtQkFBQTtFQUFGOztFQUdBO0lBQ0UsbUJBQUE7RUFBRjs7RUFHQTtJQUNFLHVEQUFBO0lBQ0EsaUNBQUE7SUFDQSxtQkFBQTtFQUFGOztFQUdBO0lBQ0UsbUJBQUE7RUFBRjs7RUFHQTtJQUNFLDJCQUFBO0lBQ0Esd0JBQUE7SUFDQSx5QkFBQTtFQUFGOztFQUdBO0lBQ0UsNkJBQUE7RUFBRjtBQUNGOztBQUdBO0VBRUU7SUFDRSxzQkFBQTtJQUNBLHdCQUFBO0lBQ0EseUJBQUE7RUFGRjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8tYmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY292ZXIuamZpZicpIDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmZhbmN5LWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG5cclxuICAuZmFuY3kge1xyXG4gICAgZm9udC1mYW1pbHk6IEFudG9uO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcblxyXG4gIC5iZy0xIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNjAwNjQ7XHJcbiAgICBjb2xvcjogIzRBRjBCMTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnRyby10ZXh0IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjVlYTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xyXG59XHJcblxyXG4uc2VwYXJhdG9yLTEge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwQzBCMEEsIHJlZCk7XHJcbn1cclxuXHJcbi5jYWwtdGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY29tbXVuaXR5L2NhbC1iZy5zdmcpO1xyXG59XHJcblxyXG4uc29jLXRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNzI4OWRhLCAjNzI4OWRhLCAgIzQ4OTVFNiwgIzQ4OTVFNiwgIzQ4OTVFNiwgIzFEQTFGMiwgIzFEQTFGMik7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRjAwMDAsICM0ODk1RTYpO1xyXG59XHJcblxyXG4uY2FsLXRleHQsIC5zb2MtdGV4dCB7XHJcbiAgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6IEFudG9uO1xyXG4gIH1cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1Y2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNhbC1mcmFtZSB7XHJcbiAgcGFkZGluZy10b3A6IC42cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IC42cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYWwtdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlcGFyYXRvcjIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0ODk1RTYsICM5MTAwZGEpO1xyXG59XHJcblxyXG4uc29jMi10YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5MTAwZGEsIG9yYW5nZSk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmludHJvLXRleHQge1xyXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhbC10YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJlZCwgb3JhbmdlLCByZWQpO1xyXG4gIH1cclxuXHJcbiAgLmNhbC1mcmFtZSB7XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAwICFpbXBvcnRhbnRcclxuICB9XHJcblxyXG4gIC5zb2MtdGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3Mjg5ZGEsICM3Mjg5ZGEsICAjNDg5NUU2LCAjNDg5NUU2LCAjNDg5NUU2LCAjMURBMUYyLCAjMURBMUYyKTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc29jLXRhaW5lciA+IGRpdiB7XHJcbiAgICBtYXJnaW46IDAuMzEyNXJlbSAwO1xyXG4gIH1cclxuXHJcbiAgLnNvYzItdGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5MTAwZGEsIG9yYW5nZSk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNvYzItdGFpbmVyID4gZGl2IHtcclxuICAgIG1hcmdpbjogMC4zMTI1cmVtIDA7XHJcbiAgfVxyXG5cclxuICAuY2FsLXRleHQsIC5jYWwtZnJhbWV7XHJcbiAgICBtYXJnaW46IDRweCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgODAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNvYy10ZXh0ID4gaDMsIC5jYWwtdGV4dCA+IGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHJcbiAgLmNhbC10ZXh0LCAuY2FsLWZyYW1lIHtcclxuICAgIG1hcmdpbjogMCAwICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgOTUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "kK2d":
/*!**********************************************************!*\
  !*** ./src/app/content/quiz-main/quiz-main.component.ts ***!
  \**********************************************************/
/*! exports provided: QuizMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizMainComponent", function() { return QuizMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_data_quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/quiz */ "srLr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_ui_quiz_body_quiz_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common-ui/quiz-body/quiz-body.component */ "W6Y4");
/* harmony import */ var _pipes_number_to_array_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/number-to-array.pipe */ "uApl");








function QuizMainComponent_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizMainComponent_ng_container_1_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const v_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.selectQuiz(v_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Quiz ", v_r4 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r3.quiz[ctx_r3.lang][v_r4 + 1].length, " questions");
} }
function QuizMainComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Quizzes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, QuizMainComponent_ng_container_1_div_4_Template, 5, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "toArr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 1, ctx_r0.numberOfQuizzes));
} }
function QuizMainComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizMainComponent_ng_template_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.backToMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "em", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0\u00A0Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-quiz-body", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("quiz", ctx_r2.selectedQuestionSet);
} }
class QuizMainComponent {
    constructor() {
        this.quiz = src_app_data_quiz__WEBPACK_IMPORTED_MODULE_3__["quiz"];
        this.lang = 'en';
        this.quizSelected = false;
    }
    ngOnInit() {
        console.log(this.quiz[this.lang][1]);
        this.observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0)).subscribe({
            next: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.numberOfQuizzes = Object.keys(src_app_data_quiz__WEBPACK_IMPORTED_MODULE_3__["quiz"][this.lang]).length;
            })
        });
    }
    selectQuiz(index) {
        this.quizSelected = true;
        this.selectedQuestionSet = this.quiz[this.lang][index + 1];
    }
    backToMenu() {
        this.quizSelected = false;
        this.selectedQuestionSet = null;
    }
}
QuizMainComponent.ɵfac = function QuizMainComponent_Factory(t) { return new (t || QuizMainComponent)(); };
QuizMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: QuizMainComponent, selectors: [["app-quiz-main"]], decls: 4, vars: 2, consts: [[1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "p-4"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "d-flex", "flex-row", "flex-wrap", "w-100", "justify-content-center"], ["class", "col-resp card m-2 p-4", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-resp", "card", "m-2", "p-4", 3, "click"], [1, "text-center"], [1, "text-center", "my-4", "p-0"], [1, "btn", "btn-info", "mb-2", 3, "click"], [1, "fas", "fa-chevron-left"], [3, "quiz"]], template: function QuizMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, QuizMainComponent_ng_container_1_Template, 6, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, QuizMainComponent_ng_template_2_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.quizSelected)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _common_ui_quiz_body_quiz_body_component__WEBPACK_IMPORTED_MODULE_6__["QuizBodyComponent"]], pipes: [_pipes_number_to_array_pipe__WEBPACK_IMPORTED_MODULE_7__["NumberToArrayPipe"]], styles: [".card[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.col-resp[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n@media screen and (max-width: 768px) {\n  .col-resp[_ngcontent-%COMP%] {\n    flex: 0 0 49%;\n    max-width: 49%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxxdWl6LW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJxdWl6LW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtcmVzcCB7XHJcbiAgZmxleDogMCAwIDI1JTtcclxuICBtYXgtd2lkdGg6IDI1JTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29sLXJlc3Age1xyXG4gICAgZmxleDogMCAwIDQ5JTtcclxuICAgIG1heC13aWR0aDogNDklO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "oGAD":
/*!******************************************!*\
  !*** ./src/app/utils/service.locator.ts ***!
  \******************************************/
/*! exports provided: ServiceLocator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocator", function() { return ServiceLocator; });
/** Dummy wrapper class that is used to always have access to the Injector, to access the services in OOP hierarchy. */
class ServiceLocator {
}


/***/ }),

/***/ "srLr":
/*!******************************!*\
  !*** ./src/app/data/quiz.ts ***!
  \******************************/
/*! exports provided: quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quiz", function() { return quiz; });
/* harmony import */ var _en_questions1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en/questions1 */ "HwiI");

const quiz = {
    en: {
        1: _en_questions1__WEBPACK_IMPORTED_MODULE_0__["enQuiz1"]
    }
};


/***/ }),

/***/ "uApl":
/*!***********************************************!*\
  !*** ./src/app/pipes/number-to-array.pipe.ts ***!
  \***********************************************/
/*! exports provided: NumberToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberToArrayPipe", function() { return NumberToArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NumberToArrayPipe {
    transform(value) {
        const res = [];
        for (let i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    }
}
NumberToArrayPipe.ɵfac = function NumberToArrayPipe_Factory(t) { return new (t || NumberToArrayPipe)(); };
NumberToArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toArr", type: NumberToArrayPipe, pure: true });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _content_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/home/home.component */ "fzLu");
/* harmony import */ var _content_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/not-found404/not-found404.component */ "XiKI");
/* harmony import */ var _content_quiz_main_quiz_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/quiz-main/quiz-main.component */ "kK2d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






/** {@link Route[] | Routes} used to navigate the application. */
const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    },
    {
        path: 'quiz',
        component: _content_quiz_main_quiz_main_component__WEBPACK_IMPORTED_MODULE_3__["QuizMainComponent"],
    },
    {
        path: '404-not-found',
        component: _content_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_2__["NotFound404Component"]
    },
    {
        path: '**',
        redirectTo: '/404-not-found'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
                relativeLinkResolution: 'legacy',
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                scrollOffset: [0, 64],
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map