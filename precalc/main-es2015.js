(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Efe\WebstormProjects\efeakinci-website-angular\src\main.ts */"zUnb");


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
/* harmony import */ var _trig_practice_trig_practice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trig-practice/trig-practice.component */ "nLdu");



class AppComponent {
    constructor() {
        this.title = 'efeakinci-website-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-trig-practice");
    } }, directives: [_trig_practice_trig_practice_component__WEBPACK_IMPORTED_MODULE_1__["TrigPracticeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-katex */ "a7Q/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _trig_practice_trig_practice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trig-practice/trig-practice.component */ "nLdu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-screen/home-screen.component */ "wJTJ");









const routes = [{
        path: 'precalculus/madtrigminute',
        component: _trig_practice_trig_practice_component__WEBPACK_IMPORTED_MODULE_4__["TrigPracticeComponent"]
    }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ng_katex__WEBPACK_IMPORTED_MODULE_2__["KatexModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _trig_practice_trig_practice_component__WEBPACK_IMPORTED_MODULE_4__["TrigPracticeComponent"],
        _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_6__["HomeScreenComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ng_katex__WEBPACK_IMPORTED_MODULE_2__["KatexModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _trig_practice_trig_practice_component__WEBPACK_IMPORTED_MODULE_4__["TrigPracticeComponent"],
                    _home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_6__["HomeScreenComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ng_katex__WEBPACK_IMPORTED_MODULE_2__["KatexModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nLdu":
/*!**********************************************************!*\
  !*** ./src/app/trig-practice/trig-practice.component.ts ***!
  \**********************************************************/
/*! exports provided: TrigPracticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrigPracticeComponent", function() { return TrigPracticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! katex */ "Oy/b");
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(katex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-katex */ "a7Q/");





function TrigPracticeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ng-katex", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("equation", question_r2);
} }
function TrigPracticeComponent_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ng-katex", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("equation", answer_r4);
} }
function TrigPracticeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Answers: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TrigPracticeComponent_div_11_div_8_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.answers);
} }
class TrigPracticeComponent {
    constructor() {
        this.funcs = [[Math.sin, 'sin'], [Math.cos, 'cos'], [Math.tan, 'tan'], [(x) => 1 / Math.sin(x), 'csc'], [(x) => 1 / Math.cos(x), 'sec'], [(x) => 1 / Math.tan(x), 'cot']];
        this.multChance = 0.10;
        this.negativeChance = 0.45;
        this.allowedValues = [[1, 6], [1, 4], [1, 3], [1, 2], [2, 3], [3, 4], [5, 6], [3, 2], [7, 6], [5, 4], [4, 3], [3, 2], [5, 3], [7, 4], [11, 6]];
        this.questions = [];
        this.answers = [];
        this.showAnswers = false;
    }
    numToLatex(num) {
        if (Number(num.toFixed(3)) < -100 || Number(num.toFixed(3)) > 100) {
            return 'undefined';
        }
        else {
            switch (Number(num.toFixed(3))) {
                case 0.707:
                    return '\\dfrac{\\sqrt{2}}{2}';
                case 0.500:
                    return '\\dfrac{1}{2}';
                case 0.866:
                    return '\\dfrac{\\sqrt{3}}{2}';
                case -0.707:
                    return '-\\dfrac{\\sqrt{2}}{2}';
                case -0.500:
                    return '-\\dfrac{1}{2}';
                case -0.866:
                    return '-\\dfrac{\\sqrt{3}}{2}';
                case 1.732:
                    return '\\sqrt{3}';
                case 1.000:
                    return '1';
                case 0.577:
                    return '\\dfrac{\\sqrt{3}}{3}';
                case -1.732:
                    return '-\\sqrt{3}';
                case -1.000:
                    return '-1';
                case -0.577:
                    return '-\\dfrac{\\sqrt{3}}{3}';
                case Infinity:
                    return 'undefined';
                case 1.155:
                    return '\\dfrac{2\\sqrt{3}}{3}';
                case 1.414:
                    return '\\sqrt{2}';
                case 2.000:
                    return '2';
                case -1.155:
                    return '-\\dfrac{2\\sqrt{3}}{3}';
                case -1.414:
                    return '-\\sqrt{2}';
                case -2.000:
                    return '-2';
                case 0.000:
                    return '0';
            }
        }
    }
    generateQuestions() {
        for (let i = 0; i < 10; i++) {
            const randomPair = this.allowedValues[Math.floor(Math.random() * this.allowedValues.length)];
            const func = this.funcs[Math.floor(Math.random() * this.funcs.length)];
            const randomPair2 = this.allowedValues[Math.floor(Math.random() * this.allowedValues.length)];
            const func2 = this.funcs[Math.floor(Math.random() * this.funcs.length)];
            if (Math.random() < this.multChance) {
                randomPair[0] += 2 * randomPair[1];
            }
            if (Math.random() < this.negativeChance) {
                randomPair[0] = -randomPair[0];
            }
            if (Math.random() < this.multChance) {
                randomPair2[0] += 2 * randomPair2[1];
            }
            if (Math.random() < this.negativeChance) {
                randomPair2[0] = -randomPair2[0];
            }
            this.questions[i] = (i + 1) + '. \\hspace{3ex}' + func[1] + '(\\dfrac{' + ((randomPair[0] === 1) ? '' : (randomPair[0] === -1) ? '-' : randomPair[0]) + '\\pi}{' + randomPair[1] + '})';
            console.log(this.questions[i]);
            this.answers[i] = (i + 1) + '. \\hspace{3ex}' + this.numToLatex(func[0]((randomPair[0] * Math.PI) / randomPair[1]));
        }
    }
    ngOnInit() {
        this.generateQuestions();
    }
}
TrigPracticeComponent.ɵfac = function TrigPracticeComponent_Factory(t) { return new (t || TrigPracticeComponent)(); };
TrigPracticeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrigPracticeComponent, selectors: [["app-trig-practice"]], decls: 18, vars: 2, consts: [["id", "navbar"], ["id", "navbar-list"], [1, "navbaritem"], [1, "container-fluid"], [1, "row"], ["id", "questions", 1, "container"], ["class", "col-6 question-holder", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "button-container", 1, "row", 2, "margin-top", "2em"], [1, "col", 2, "display", "flex", "justify-content", "center"], [1, "button-action", 3, "click"], [1, "col-6", "question-holder"], [3, "equation"], [1, "row", 2, "margin-top", "5em"], [1, "col-12", 2, "text-align", "center"], ["id", "answers", 1, "container"]], template: function TrigPracticeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Precalculus AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TrigPracticeComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TrigPracticeComponent_div_11_Template, 9, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrigPracticeComponent_Template_button_click_14_listener() { return ctx.generateQuestions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Generate New Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrigPracticeComponent_Template_button_click_16_listener() { return ctx.showAnswers = !ctx.showAnswers; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Show Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAnswers === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_katex__WEBPACK_IMPORTED_MODULE_3__["KatexComponent"]], styles: ["#navbar[_ngcontent-%COMP%]{\r\n  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);\r\n  background: white;\r\n  padding: 1em 0;\r\n  display: flex;\r\n  align-content: end;\r\n  justify-content: center;\r\n}\r\n#navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  margin-right: 2em;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.navbaritem[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  font-size: 1.2em;\r\n  margin: 0 1em;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n#container-main[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n#container-root[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#container-sidebar[_ngcontent-%COMP%]{\r\n  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);\r\n}\r\n.question-holder[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-top: 2em;\r\n}\r\n.button-action[_ngcontent-%COMP%] {\r\n  border: black solid 1px;\r\n  background: rgba(0, 0, 0, 0);\r\n  padding: 1em 2em;\r\n  border-radius: 1.5em;\r\n  outline: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaWctcHJhY3RpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUEyQztFQUMzQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFHaEIsb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZiIsImZpbGUiOiJ0cmlnLXByYWN0aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2YmFye1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCAwIHJnYmEoMzIsMzMsMzYsMC4yOCk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMWVtIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBlbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI25hdmJhciB1bHtcclxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLm5hdmJhcml0ZW17XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgbWFyZ2luOiAwIDFlbTtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiNjb250YWluZXItbWFpbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jY29udGFpbmVyLXJvb3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jY29udGFpbmVyLXNpZGViYXJ7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IDAgcmdiYSgzMiwzMywzNiwwLjI4KTtcclxufVxyXG4ucXVlc3Rpb24taG9sZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuLmJ1dHRvbi1hY3Rpb24ge1xyXG4gIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgcGFkZGluZzogMWVtIDJlbTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEuNWVtO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMS41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMS41ZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrigPracticeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trig-practice',
                templateUrl: './trig-practice.component.html',
                styleUrls: ['./trig-practice.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wJTJ":
/*!******************************************************!*\
  !*** ./src/app/home-screen/home-screen.component.ts ***!
  \******************************************************/
/*! exports provided: HomeScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScreenComponent", function() { return HomeScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeScreenComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeScreenComponent.ɵfac = function HomeScreenComponent_Factory(t) { return new (t || HomeScreenComponent)(); };
HomeScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeScreenComponent, selectors: [["app-home-screen"]], decls: 2, vars: 0, template: function HomeScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home-screen works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXNjcmVlbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-screen',
                templateUrl: './home-screen.component.html',
                styleUrls: ['./home-screen.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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