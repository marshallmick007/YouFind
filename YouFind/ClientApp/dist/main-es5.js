function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return [""];
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "navbar", "navbar-light", "p-0", "m-1"], [1, "navbar-brand", "text-dark", 3, "routerLink"], [1, "row", "justify-content-sm-center"], [1, "col-sm-12", "body-content", "app-body-content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "YouFind");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["@media (max-width: 767px) {\r\n  \r\n  .body-content[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 720px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2RkFBNkY7RUFDN0Y7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cclxuICAuYm9keS1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _loading_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./loading.pipe */
    "./src/app/loading.pipe.ts");
    /* harmony import */


    var _results_item_results_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./results-item/results-item.component */
    "./src/app/results-item/results-item.component.ts");
    /* harmony import */


    var _person_profile_person_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./person-profile/person-profile.component */
    "./src/app/person-profile/person-profile.component.ts");
    /* harmony import */


    var _arrayShortener_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./arrayShortener.pipe */
    "./src/app/arrayShortener.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
        appId: "ng-cli-universal"
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        pathMatch: "full"
      }, {
        path: "person",
        component: _person_profile_person_profile_component__WEBPACK_IMPORTED_MODULE_10__["PersonProfileComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _loading_pipe__WEBPACK_IMPORTED_MODULE_8__["LoadingPipe"], _arrayShortener_pipe__WEBPACK_IMPORTED_MODULE_11__["ArrayShortenerPipe"], _results_item_results_item_component__WEBPACK_IMPORTED_MODULE_9__["ResultsItemComponent"], _person_profile_person_profile_component__WEBPACK_IMPORTED_MODULE_10__["PersonProfileComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _loading_pipe__WEBPACK_IMPORTED_MODULE_8__["LoadingPipe"], _arrayShortener_pipe__WEBPACK_IMPORTED_MODULE_11__["ArrayShortenerPipe"], _results_item_results_item_component__WEBPACK_IMPORTED_MODULE_9__["ResultsItemComponent"], _person_profile_person_profile_component__WEBPACK_IMPORTED_MODULE_10__["PersonProfileComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
            appId: "ng-cli-universal"
          }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
            path: "",
            component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            pathMatch: "full"
          }, {
            path: "person",
            component: _person_profile_person_profile_component__WEBPACK_IMPORTED_MODULE_10__["PersonProfileComponent"]
          }])],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/arrayShortener.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/arrayShortener.pipe.ts ***!
    \****************************************/

  /*! exports provided: ArrayShortenerPipe */

  /***/
  function srcAppArrayShortenerPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayShortenerPipe", function () {
      return ArrayShortenerPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ArrayShortenerPipe = /*#__PURE__*/function () {
      function ArrayShortenerPipe() {
        _classCallCheck(this, ArrayShortenerPipe);
      }

      _createClass(ArrayShortenerPipe, [{
        key: "transform",
        value: function transform(val) {
          if (val && val.constructor === Array) {
            if (val.length > 1) {
              return this.accumulateItems(val);
            } else if (val.length == 1) {
              return val[0];
            } else {
              return "";
            }
          } else {
            return val;
          }
        }
      }, {
        key: "accumulateItems",
        value: function accumulateItems(val) {
          var c = 1;
          var first = val[0];
          var notDone = true;

          while (notDone) {
            if (val.length > c && first.length + val[c].length < 30) {
              first += ", ".concat(val[c]);
              c++;
            } else {
              notDone = false;
            }
          }

          if (val.length - c < 1) {
            return first;
          } else {
            return "".concat(first, ", and ").concat(val.length - c, " more");
          }
        }
      }]);

      return ArrayShortenerPipe;
    }();

    ArrayShortenerPipe.ɵfac = function ArrayShortenerPipe_Factory(t) {
      return new (t || ArrayShortenerPipe)();
    };

    ArrayShortenerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "arrayShorten",
      type: ArrayShortenerPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrayShortenerPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "arrayShorten"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _person_search_person_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../person-search/person-search.service */
    "./src/app/person-search/person-search.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _results_item_results_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../results-item/results-item.component */
    "./src/app/results-item/results-item.component.ts");
    /* harmony import */


    var _loading_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../loading.pipe */
    "./src/app/loading.pipe.ts");

    function HomeComponent_div_10_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_10_ng_template_2_app_results_item_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-results-item", 15);
      }

      if (rf & 2) {
        var person_r7 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("person", person_r7)("searching", ctx_r6.isSearching);
      }
    }

    function HomeComponent_div_10_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_10_ng_template_2_app_results_item_0_Template, 1, 2, "app-results-item", 14);
      }

      if (rf & 2) {
        var results_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", results_r2.value);
      }
    }

    function HomeComponent_div_10_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No results found for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.value);
      }
    }

    function HomeComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_10_ng_template_1_Template, 6, 0, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_10_ng_template_2_Template, 1, 1, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_10_ng_template_3_Template, 5, 1, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var results_r2 = ctx.ngIf;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", results_r2.loading || ctx_r1.isSearching);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", results_r2.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", results_r2.noresults && !ctx_r1.isSearching);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(personService) {
        _classCallCheck(this, HomeComponent);

        this.personService = personService;
        this.showResults = false;
        this.isSearching = false;
        this.search = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(HomeComponent, [{
        key: "performSearch",
        value: function performSearch(term) {
          this.showResults = term !== "";
          this.isSearching = this.showResults; //console.log(`Performing search for '${term}'`);

          this.search.next(term);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.results$ = this.search.pipe( // wait after each keystroke before considering the term
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(175), // ignore new term if same as previous term
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            return _this.isSearching = true;
          }), // switch to new search observable each time the term changes
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            return _this.personService.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["defaultIfEmpty"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              //console.log("searching complete");
              _this.isSearching = false;
            }));
          }) //concat(
          //  of({ type: "searching" }),
          //  this.personService.search(term)
          //  //.pipe(map((value) => ({ type: "completed" })))
          //)
          //)
          );
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_person_search_person_search_service__WEBPACK_IMPORTED_MODULE_3__["PersonSearchService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 15,
      vars: 9,
      consts: [[1, "row", "justify-content-sm-center"], [1, "col-sm-12", "search-outline"], [1, "input-group"], ["type", "text", "placeholder", "Search YouFind...", 1, "form-control", 3, "input"], ["searchInput", ""], [1, "input-group-append"], ["type", "button", "id", "button-addon", 1, "btn", "btn-search", 3, "click"], [1, "search-results", "mb-2"], ["class", "search-results-container", 4, "ngIf"], [1, "tag-line", "text-muted", "pt-4"], [1, "search-results-container"], [3, "ngIf"], [1, "results-message", "results-loading", "text-center", "text-muted"], [1, "lds-ellipsis"], [3, "person", "searching", 4, "ngFor", "ngForOf"], [3, "person", "searching"], [1, "results-message", "text-center", "text-muted"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HomeComponent_Template_input_input_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.performSearch(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.performSearch(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 4, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Autocompleting Fake Names since 2020! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showResults ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx.results$)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showResults ? "none" : "block");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _results_item_results_item_component__WEBPACK_IMPORTED_MODULE_5__["ResultsItemComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _loading_pipe__WEBPACK_IMPORTED_MODULE_6__["LoadingPipe"]],
      styles: [".search-outline[_ngcontent-%COMP%] {\n  border: 1px solid #c1292e;\n  border-radius: 3px;\n  padding: 0.2rem;\n}\n\n.btn-search[_ngcontent-%COMP%] {\n  background-color: #c1292e;\n  color: white;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  border: 0px;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border-color: transparent;\n  box-shadow: 0 1px 1px transparent inset, 0 0 1px transparent;\n  outline: 0 none;\n}\n\n.results-message[_ngcontent-%COMP%] {\n  height: 3rem;\n  line-height: 3rem;\n}\n\n.results-loading[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.search-results-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n\n\n.lds-ellipsis[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #c1292e;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcd29ya1xcZG90bmV0XFxZb3VGaW5kXFxZb3VGaW5kXFxDbGllbnRBcHAvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9DOlxcd29ya1xcZG90bmV0XFxZb3VGaW5kXFxZb3VGaW5kXFxDbGllbnRBcHAvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSx5QkVUZ0I7RUZVaEIsWUFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBREdFO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0FDREo7O0FES0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURTQSxnREFBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRXhEZ0I7RUZ5RGhCLDJEQUFBO1VBQUEsbURBQUE7QUNMRjs7QURPQTtFQUNFLFNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDSkY7O0FETUE7RUFDRSxTQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0hGOztBREtBO0VBQ0UsVUFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNGRjs7QURJQTtFQUNFLFVBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDREY7O0FER0E7RUFDRTtJQUNFLG1CQUFBO0VDQUY7RURFQTtJQUNFLG1CQUFBO0VDQUY7QUFDRjs7QUROQTtFQUNFO0lBQ0UsbUJBQUE7RUNBRjtFREVBO0lBQ0UsbUJBQUE7RUNBRjtBQUNGOztBREVBO0VBQ0U7SUFDRSxtQkFBQTtFQ0FGO0VERUE7SUFDRSxtQkFBQTtFQ0FGO0FBQ0Y7O0FETkE7RUFDRTtJQUNFLG1CQUFBO0VDQUY7RURFQTtJQUNFLG1CQUFBO0VDQUY7QUFDRjs7QURFQTtFQUNFO0lBQ0UsMEJBQUE7RUNBRjtFREVBO0lBQ0UsNkJBQUE7RUNBRjtBQUNGOztBRE5BO0VBQ0U7SUFDRSwwQkFBQTtFQ0FGO0VERUE7SUFDRSw2QkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uc2VhcmNoLW91dGxpbmUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR5b3VfYnJhbmRfY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxufVxyXG5cclxuLmJ0bi1zZWFyY2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR5b3VfYnJhbmRfY29sb3I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsIDAgMCAxcHggdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzdWx0cy1tZXNzYWdlIHtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5yZXN1bHRzLWxvYWRpbmcge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy1jb250YWluZXIge1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4udGFnLWxpbmUge1xyXG4gIC8vcGFkZGluZy10b3A6IDRyZW07XHJcbn1cclxuXHJcbi8qIExvYWRpbmcgSW5kaWNhdG9yIC0gaHR0cHM6Ly9sb2FkaW5nLmlvL2Nzcy8gKi9cclxuLmxkcy1lbGxpcHNpcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDhweDtcclxuICB3aWR0aDogMTNweDtcclxuICBoZWlnaHQ6IDEzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICR5b3VfYnJhbmRfY29sb3I7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgbGVmdDogOHB4O1xyXG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgbGVmdDogOHB4O1xyXG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgbGVmdDogMzJweDtcclxuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIGxlZnQ6IDU2cHg7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gIH1cclxufVxyXG4iLCIuc2VhcmNoLW91dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzEyOTJlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbn1cblxuLmJ0bi1zZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzEyOTJlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBib3JkZXI6IDBweDtcbn1cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsIDAgMCAxcHggdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IDAgbm9uZTtcbn1cblxuLnJlc3VsdHMtbWVzc2FnZSB7XG4gIGhlaWdodDogM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG59XG5cbi5yZXN1bHRzLWxvYWRpbmcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLyogTG9hZGluZyBJbmRpY2F0b3IgLSBodHRwczovL2xvYWRpbmcuaW8vY3NzLyAqL1xuLmxkcy1lbGxpcHNpcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2MxMjkyZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xuICBsZWZ0OiAzMnB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cblxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcbiAgfVxufSIsIiR5b3VfYnJhbmRfY29sb3I6ICNjMTI5MmU7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-home",
          templateUrl: "./home.component.html",
          styleUrls: ["./home.component.scss"]
        }]
      }], function () {
        return [{
          type: _person_search_person_search_service__WEBPACK_IMPORTED_MODULE_3__["PersonSearchService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/loading.pipe.ts":
  /*!*********************************!*\
    !*** ./src/app/loading.pipe.ts ***!
    \*********************************/

  /*! exports provided: LoadingPipe */

  /***/
  function srcAppLoadingPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingPipe", function () {
      return LoadingPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoadingPipe = /*#__PURE__*/function () {
      function LoadingPipe() {
        _classCallCheck(this, LoadingPipe);
      }

      _createClass(LoadingPipe, [{
        key: "transform",
        value: function transform(val) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(val) ? val.pipe( //tap((value: any) => console.log("pipe value", value)),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return {
              loading: value.type === "start",
              value: value.type ? value.value : value,
              noresults: value && value.constructor === Array && value.length === 0
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({
            loading: true
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
              loading: false,
              error: error
            });
          })) : val;
        }
      }]);

      return LoadingPipe;
    }();

    LoadingPipe.ɵfac = function LoadingPipe_Factory(t) {
      return new (t || LoadingPipe)();
    };

    LoadingPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "loading",
      type: LoadingPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "loading"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/address.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/address.model.ts ***!
    \*****************************************/

  /*! exports provided: Address */

  /***/
  function srcAppModelsAddressModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Address", function () {
      return Address;
    });

    var Address = function Address() {
      _classCallCheck(this, Address);
    };
    /***/

  },

  /***/
  "./src/app/models/person.model.ts":
  /*!****************************************!*\
    !*** ./src/app/models/person.model.ts ***!
    \****************************************/

  /*! exports provided: Person */

  /***/
  function srcAppModelsPersonModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Person", function () {
      return Person;
    });
    /* harmony import */


    var _address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./address.model */
    "./src/app/models/address.model.ts");

    var Person = function Person() {
      _classCallCheck(this, Person);

      this.address = new _address_model__WEBPACK_IMPORTED_MODULE_0__["Address"]();
    };
    /***/

  },

  /***/
  "./src/app/nav-menu/nav-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.ts ***!
    \************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1(a0) {
      return {
        "in": a0
      };
    };

    var _c2 = function _c2() {
      return ["link-active"];
    };

    var _c3 = function _c3() {
      return {
        exact: true
      };
    };

    var _c4 = function _c4() {
      return ["/counter"];
    };

    var _c5 = function _c5() {
      return ["/fetch-data"];
    };

    var NavMenuComponent = /*#__PURE__*/function () {
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);

        this.isExpanded = false;
      }

      _createClass(NavMenuComponent, [{
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isExpanded = !this.isExpanded;
        }
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) {
      return new (t || NavMenuComponent)();
    };

    NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavMenuComponent,
      selectors: [["app-nav-menu"]],
      decls: 26,
      vars: 20,
      consts: [[1, "main-nav"], [1, "navbar", "navbar-inverse"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", 1, "navbar-toggle", 3, "click"], [1, "sr-only"], [1, "icon-bar"], [1, "navbar-brand", 3, "routerLink"], [1, "clearfix"], [1, "navbar-collapse", "collapse", 3, "ngClass"], [1, "nav", "navbar-nav"], [3, "routerLinkActive", "routerLinkActiveOptions"], [3, "routerLink", "click"], [1, "glyphicon", "glyphicon-home"], [3, "routerLinkActive"], [1, "glyphicon", "glyphicon-education"], [1, "glyphicon", "glyphicon-th-list"]],
      template: function NavMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_button_click_3_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toggle navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "YouFind");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_a_click_15_listener() {
            return ctx.collapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_a_click_19_listener() {
            return ctx.collapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Counter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_a_click_23_listener() {
            return ctx.collapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Fetch data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isExpanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.isExpanded));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c5));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["li[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n\r\nli.link-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], li.link-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, li.link-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.main-nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    \r\n    .main-nav[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar[_ngcontent-%COMP%] {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header[_ngcontent-%COMP%] {\r\n        float: none;\r\n    }\r\n    .navbar-collapse[_ngcontent-%COMP%] {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        float: none;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        \r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSwwQ0FBMEM7O0FBQzFDOzs7SUFHSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQSx5RUFBeUU7O0FBQ3pFO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlFQUFpRTtJQUNqRTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbURBQW1EO1FBQ25ELFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIC5nbHlwaGljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXHJcbmxpLmxpbmstYWN0aXZlIGEsXHJcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXHJcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cclxuLm1haW4tbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXHJcbiAgICAubWFpbi1uYXYge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIHVsIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgbGkge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBtYXJnaW46IDZweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgYSB7XHJcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-menu',
          templateUrl: './nav-menu.component.html',
          styleUrls: ['./nav-menu.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/person-profile/person-profile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/person-profile/person-profile.component.ts ***!
    \************************************************************/

  /*! exports provided: PersonProfileComponent */

  /***/
  function srcAppPersonProfilePersonProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonProfileComponent", function () {
      return PersonProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _models_person_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/person.model */
    "./src/app/models/person.model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PersonProfileComponent_li_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r1, " ");
      }
    }

    var _c0 = function _c0() {
      return [""];
    };

    var PersonProfileComponent = /*#__PURE__*/function () {
      function PersonProfileComponent(router) {
        _classCallCheck(this, PersonProfileComponent);

        this.router = router;
        this.person = new _models_person_model__WEBPACK_IMPORTED_MODULE_2__["Person"]();
        var extras = this.router.getCurrentNavigation().extras; //.state.person;

        if (extras && extras.state && extras.state.person) {
          this.person = extras.state.person;
        } else {
          this.router.navigate([""]);
        }
      }

      _createClass(PersonProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PersonProfileComponent;
    }();

    PersonProfileComponent.ɵfac = function PersonProfileComponent_Factory(t) {
      return new (t || PersonProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    PersonProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonProfileComponent,
      selectors: [["app-person-profile"]],
      decls: 35,
      vars: 12,
      consts: [[1, "person-profile", "row", "p-3"], [1, "col-sm-4"], [1, "profile-item", "pb-4"], [1, "avatar"], [1, "face", 3, "src"], [1, "profile-item"], [1, "text-muted"], [1, "proile-item", "profile-item-bottom"], [1, "btn", "btn-link", "btn-connect", 3, "routerLink"], [1, "col-sm-8"], [1, "d-flex", "flex-column", "justify-content-between", "h-100"], [1, "profile-item", "profile-name"], [1, "font-weight-light"], [1, "text-muted", "font-bold"], ["class", "text-muted", 4, "ngFor", "ngForOf"], [1, "profile-item", "profile-footer", "d-flex", "flex-row-reverse"], ["disabled", "", 1, "btn", "btn-link", "btn-connect"]],
      template: function PersonProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "address", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u2190 Go Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Interests:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PersonProfileComponent_li_31_Template, 2, 1, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.person.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.person.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.person.address.addressLine1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.person.address.city, ", ", ctx.person.address.state, " ", ctx.person.address.postalCode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.person.age, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.person.interests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Connect with ", ctx.person.name, " \u2192 ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".person-profile[_ngcontent-%COMP%] {\n  min-height: 400px;\n  border: 1px solid #c1292e;\n  border-radius: 3px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  border-radius: 80px;\n  border: 2px solid #c1292e;\n  background: var(--light);\n  margin: 0 auto;\n}\n\n.avatar[_ngcontent-%COMP%]   img.face[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin: 4px;\n}\n\n.profile-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.profile-item-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n}\n\n.btn-connect[_ngcontent-%COMP%] {\n  color: #c1292e;\n}\n\n.btn-connect[_ngcontent-%COMP%]:hover {\n  color: #972024;\n}\n\n.btn-connect[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.1rem #f2c4c5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uLXByb2ZpbGUvQzpcXHdvcmtcXGRvdG5ldFxcWW91RmluZFxcWW91RmluZFxcQ2xpZW50QXBwL3NyY1xcYXBwXFxwZXJzb24tcHJvZmlsZVxccGVyc29uLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BlcnNvbi1wcm9maWxlL3BlcnNvbi1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wZXJzb24tcHJvZmlsZS9DOlxcd29ya1xcZG90bmV0XFxZb3VGaW5kXFxZb3VGaW5kXFxDbGllbnRBcHAvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDREY7O0FER0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREtBO0VBQ0UsV0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxjRWxDZ0I7QURnQ2xCOztBRElFO0VBQ0UsY0FBQTtBQ0ZKOztBREtFO0VBQ0UsZ0NBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi1wcm9maWxlL3BlcnNvbi1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLnBlcnNvbi1wcm9maWxlIHtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkeW91X2JyYW5kX2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogODBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkeW91X2JyYW5kX2NvbG9yO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgaW1nLmZhY2Uge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlLWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pdGVtLWJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uYnRuLWNvbm5lY3Qge1xyXG4gIGNvbG9yOiAkeW91X2JyYW5kX2NvbG9yO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrZW4oJHlvdV9icmFuZF9jb2xvciwgMTAlKTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtIGxpZ2h0ZW4oJHlvdV9icmFuZF9jb2xvciwgNDAlKTtcclxuICB9XHJcbn1cclxuIiwiLnBlcnNvbi1wcm9maWxlIHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMTI5MmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2MxMjkyZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5hdmF0YXIgaW1nLmZhY2Uge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4ucHJvZmlsZS1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWl0ZW0tYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbn1cblxuLmJ0bi1jb25uZWN0IHtcbiAgY29sb3I6ICNjMTI5MmU7XG59XG4uYnRuLWNvbm5lY3Q6aG92ZXIge1xuICBjb2xvcjogIzk3MjAyNDtcbn1cbi5idG4tY29ubmVjdDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjZjJjNGM1O1xufSIsIiR5b3VfYnJhbmRfY29sb3I6ICNjMTI5MmU7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-person-profile",
          templateUrl: "./person-profile.component.html",
          styleUrls: ["./person-profile.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/person-search/person-search.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/person-search/person-search.service.ts ***!
    \********************************************************/

  /*! exports provided: PersonSearchService */

  /***/
  function srcAppPersonSearchPersonSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonSearchService", function () {
      return PersonSearchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PersonSearchService = /*#__PURE__*/function () {
      function PersonSearchService(http) {
        _classCallCheck(this, PersonSearchService);

        this.http = http;
      }

      _createClass(PersonSearchService, [{
        key: "search",
        value: function search(term) {
          console.log('calling api/search for term', term);

          if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
          }

          var api = "/api/person/search?q=".concat(term);
          return this.http.get(api).pipe( // return an empty array if there was an error
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError([])));
        }
      }, {
        key: "handleError",
        value: function handleError(result) {
          return function (error) {
            console.error(error); // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }]);

      return PersonSearchService;
    }();

    PersonSearchService.ɵfac = function PersonSearchService_Factory(t) {
      return new (t || PersonSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PersonSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PersonSearchService,
      factory: PersonSearchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/results-item/results-item.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/results-item/results-item.component.ts ***!
    \********************************************************/

  /*! exports provided: ResultsItemComponent */

  /***/
  function srcAppResultsItemResultsItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsItemComponent", function () {
      return ResultsItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_person_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/person.model */
    "./src/app/models/person.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _arrayShortener_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../arrayShortener.pipe */
    "./src/app/arrayShortener.pipe.ts");

    var ResultsItemComponent = /*#__PURE__*/function () {
      function ResultsItemComponent(router) {
        _classCallCheck(this, ResultsItemComponent);

        this.router = router;
      }

      _createClass(ResultsItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigateToProfile",
        value: function navigateToProfile() {
          this.router.navigate(["person"], {
            state: {
              person: this.person
            }
          }); //this.router.navigateByUrl()
        }
      }]);

      return ResultsItemComponent;
    }();

    ResultsItemComponent.ɵfac = function ResultsItemComponent_Factory(t) {
      return new (t || ResultsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ResultsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultsItemComponent,
      selectors: [["app-results-item"]],
      inputs: {
        person: "person",
        searching: "searching"
      },
      decls: 22,
      vars: 12,
      consts: [[1, "search-results-item", "pt-1", "pb-1", "ml-1", "mr-1", "mb-2", "row", "align-items-center", 3, "click"], [1, "col-2", "col-md-1"], [1, "avatar"], [1, "face", 3, "src"], [1, "col-6", "col-md-6", "d-flex", "flex-column"], [1, "person-title", "text-dark", "font-weight-light"], [1, "text-muted", "person-age"], [1, "person-subtitle", "text-muted"], [1, "col-4", "col-md-4"], [1, "d-none", "d-lg-block", "col-md-1"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 492.004 492.004", 0, "xml", "space", "preserve", 1, "action-icon", 2, "width", "1rem", "enable-background", "new 0 0 492.004 492.004"], ["d", "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"]],
      template: function ResultsItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsItemComponent_Template_div_click_0_listener() {
            return ctx.navigateToProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "arrayShorten");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("searching", ctx.searching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.person.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.person.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("| Age ", ctx.person.age, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx.person.interests), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.person.address.addressLine1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.person.address.city, ", ", ctx.person.address.state, " ", ctx.person.address.postalCode, " ");
        }
      },
      pipes: [_arrayShortener_pipe__WEBPACK_IMPORTED_MODULE_3__["ArrayShortenerPipe"]],
      styles: [".search-results-item[_ngcontent-%COMP%]:hover {\n  background: var(--light);\n  cursor: pointer;\n}\n.search-results-item[_ngcontent-%COMP%]:hover   .action-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #c1292e;\n}\n.search-results-item.searching[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: var(--light);\n  border-color: var(--light);\n}\naddress[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-weight: lighter;\n  font-size: 0.8rem;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  border: 2px solid #c1292e;\n  background: var(--light);\n}\n.avatar[_ngcontent-%COMP%]   img.face[_ngcontent-%COMP%] {\n  width: 37px;\n  height: 37px;\n  border-radius: 19px;\n}\n.person-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n}\n.person-age[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.7rem;\n}\n.person-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.action-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy1pdGVtL0M6XFx3b3JrXFxkb3RuZXRcXFlvdUZpbmRcXFlvdUZpbmRcXENsaWVudEFwcC9zcmNcXGFwcFxccmVzdWx0cy1pdGVtXFxyZXN1bHRzLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VsdHMtaXRlbS9yZXN1bHRzLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VsdHMtaXRlbS9DOlxcd29ya1xcZG90bmV0XFxZb3VGaW5kXFxZb3VGaW5kXFxDbGllbnRBcHAvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FES007RUFDRSxhRVRVO0FETWxCO0FEV0k7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0FDVE47QURjQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ1hGO0FEY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ1hGO0FEYUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWEo7QURlQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNaRjtBRGNBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ1hGO0FEY0E7RUFDRSxpQkFBQTtBQ1hGO0FEZUU7RUFDRSxpQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0cy1pdGVtL3Jlc3VsdHMtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5zZWFyY2gtcmVzdWx0cy1pdGVtIHtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAuYWN0aW9uLWljb24ge1xyXG4gICAgICBwYXRoIHtcclxuICAgICAgICBmaWxsOiAkeW91X2JyYW5kX2NvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnNlYXJjaGluZyB7XHJcbiAgICAvL2JhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcclxuXHJcbiAgICAmICoge1xyXG4gICAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFkZHJlc3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHlvdV9icmFuZF9jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7XHJcblxyXG4gIGltZy5mYWNlIHtcclxuICAgIHdpZHRoOiAzN3B4O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuICB9XHJcbn1cclxuXHJcbi5wZXJzb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbn1cclxuLnBlcnNvbi1hZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLnBlcnNvbi1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi5hY3Rpb24taWNvbiB7XHJcbiAgcGF0aCB7XHJcbiAgICBmaWxsOiB2YXIoLS1ncmF5KTtcclxuICB9XHJcbn1cclxuIiwiLnNlYXJjaC1yZXN1bHRzLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWFyY2gtcmVzdWx0cy1pdGVtOmhvdmVyIC5hY3Rpb24taWNvbiBwYXRoIHtcbiAgZmlsbDogI2MxMjkyZTtcbn1cbi5zZWFyY2gtcmVzdWx0cy1pdGVtLnNlYXJjaGluZyAqIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbmFkZHJlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjMTI5MmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcbn1cbi5hdmF0YXIgaW1nLmZhY2Uge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBib3JkZXItcmFkaXVzOiAxOXB4O1xufVxuXG4ucGVyc29uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XG59XG5cbi5wZXJzb24tYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLnBlcnNvbi1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuXG4uYWN0aW9uLWljb24gcGF0aCB7XG4gIGZpbGw6IHZhcigtLWdyYXkpO1xufSIsIiR5b3VfYnJhbmRfY29sb3I6ICNjMTI5MmU7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-results-item",
          templateUrl: "./results-item.component.html",
          styleUrls: ["./results-item.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        person: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searching: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"](providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\work\dotnet\YouFind\YouFind\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map