function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./dist/ng2-animate-on-scroll/fesm2015/ng2-animate-on-scroll.js":
  /*!**********************************************************************!*\
    !*** ./dist/ng2-animate-on-scroll/fesm2015/ng2-animate-on-scroll.js ***!
    \**********************************************************************/

  /*! exports provided: AnimateOnScrollDirective, AnimateOnScrollModule, ScrollService */

  /***/
  function distNg2AnimateOnScrollFesm2015Ng2AnimateOnScrollJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateOnScrollDirective", function () {
      return AnimateOnScrollDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateOnScrollModule", function () {
      return AnimateOnScrollModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollService", function () {
      return ScrollService;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ScrollService =
    /*#__PURE__*/
    function () {
      function ScrollService() {
        var _this = this;

        _classCallCheck(this, ScrollService);

        this.scrollSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.resizeSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"](); // set initial value

        this.manageScrollPos(); // create observable that we can subscribe to from component or directive

        this.scrollObs = typeof window !== 'undefined' ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll') : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])(); // initiate subscription to update values

        this.scrollSub = this.scrollObs.subscribe(function () {
          return _this.manageScrollPos();
        }); // create observable for changes in screen size

        this.resizeObs = typeof window !== 'undefined' ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize') : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])(); // initiate subscription to update values

        this.resizeSub = this.resizeObs.subscribe(function () {
          return _this.manageScrollPos();
        });
      }

      _createClass(ScrollService, [{
        key: "manageScrollPos",
        value: function manageScrollPos() {
          // update service property
          this.pos = typeof window !== 'undefined' ? window.pageYOffset : 0;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scrollSub.unsubscribe();
          this.resizeSub.unsubscribe();
        }
      }]);

      return ScrollService;
    }();

    ScrollService.ɵfac = function ScrollService_Factory(t) {
      return new (t || ScrollService)();
    };

    ScrollService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: ScrollService,
      factory: ScrollService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ScrollService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    var AnimateOnScrollDirective =
    /*#__PURE__*/
    function () {
      function AnimateOnScrollDirective(elementRef, renderer, scroll) {
        _classCallCheck(this, AnimateOnScrollDirective);

        this.elementRef = elementRef;
        this.renderer = renderer;
        this.scroll = scroll;
        this.scrollSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.resizeSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"](); // Pixel offset from screen bottom to the animated element to determine the start of the animation

        this.offset = 80; //for scroll Listener
      }

      _createClass(AnimateOnScrollDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (!this.animationName) {
            return;
          } // default visibility to false


          this.isVisible = false;
          console.log(this.animationName, typeof this.animationName);
          this.useScroll = this.useScroll ? this.useScroll : this.useScroll === false ? false : true;
          this.threshold = this.threshold ? this.threshold | 0 : 0.5; // using intersecting observer by default, else fallback to scroll Listener

          if ("IntersectionObserver" in window && this.useScroll) {
            var options = {
              root: null,
              threshold: this.threshold,
              rootMargin: "0px"
            };
            var observer = new IntersectionObserver(function (entries, observer) {
              entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;

                _this2.addAnimationClass();
              });
            }, options);
            observer.observe(this.elementRef.nativeElement);
            return;
          } // subscribe to scroll event using service


          this.scrollSub = this.scroll.scrollObs.subscribe(function () {
            return _this2.manageVisibility();
          }); // subscribe to resize event using service so scrolling position is always accurate

          this.resizeSub = this.scroll.resizeObs.subscribe(function () {
            return _this2.manageVisibility();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          // run visibility check initially in case the element is already visible in viewport
          setTimeout(function () {
            return _this3.manageVisibility();
          }, 1);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scrollSub.unsubscribe();
          this.resizeSub.unsubscribe();
        }
        /**
         * check for visibility of element in viewport to add animation
         *
         * @returns void
         */

      }, {
        key: "manageVisibility",
        value: function manageVisibility() {
          if (this.isVisible) {
            // Optimisation; nothing to do if class has already been applied
            return;
          } // check for window height, may change with a window resize


          this.getWinHeight(); // get vertical position for selected element

          this.getOffsetTop(); // we should trigger the addition of the animation class a little after getting to the element

          var scrollTrigger = this.offsetTop + this.offset - this.winHeight; // using values updated in service

          if (this.scroll.pos >= scrollTrigger) {
            this.addAnimationClass();
          }
        }
        /**
         * utility function to mark element visible and add css class
         *
         * @returns void
         */

      }, {
        key: "addAnimationClass",
        value: function addAnimationClass() {
          // stops execution if no class is provided
          if (!this.animationName) return; // mark this element visible, we won't remove the class after this

          this.isVisible = true; // use default for animate.css if no value provided

          this.setClass(this.animationName);
        }
        /**
         * utility function to add one or more css classes to element in DOM
         *
         * @param  {string} classes
         * @returns void
         */

      }, {
        key: "setClass",
        value: function setClass(classes) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = classes.split(' ')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var c = _step.value;
              this.renderer.addClass(this.elementRef.nativeElement, c);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        /**
         * get window height utility function
         *
         * @returns void
         */

      }, {
        key: "getWinHeight",
        value: function getWinHeight() {
          this.winHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
        }
        /**
         * get offsetTop value for element
         *
         * @returns void
         */

      }, {
        key: "getOffsetTop",
        value: function getOffsetTop() {
          if (typeof this.elementRef.nativeElement.getBoundingClientRect === 'function') {
            var viewportTop = this.elementRef.nativeElement.getBoundingClientRect().top;
            var clientTop = this.elementRef.nativeElement.clientTop; // get vertical position for selected element

            this.offsetTop = viewportTop + this.scroll.pos - clientTop;
          } else {
            this.offsetTop = 0;
          }
        }
      }, {
        key: "id",
        get: function get() {
          return this.elementRef.nativeElement.id;
        }
      }]);

      return AnimateOnScrollDirective;
    }();

    AnimateOnScrollDirective.ɵfac = function AnimateOnScrollDirective_Factory(t) {
      return new (t || AnimateOnScrollDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ScrollService));
    };

    AnimateOnScrollDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
      type: AnimateOnScrollDirective,
      selectors: [["", "animateOnScroll", ""]],
      inputs: {
        animationName: "animationName",
        offset: "offset",
        useScroll: "useScroll",
        threshold: "threshold"
      }
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(AnimateOnScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[animateOnScroll]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: ScrollService
        }];
      }, {
        animationName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        useScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        threshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var AnimateOnScrollModule =
    /*#__PURE__*/
    function () {
      function AnimateOnScrollModule() {
        _classCallCheck(this, AnimateOnScrollModule);
      }

      _createClass(AnimateOnScrollModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: AnimateOnScrollModule,
            providers: [ScrollService]
          };
        }
      }]);

      return AnimateOnScrollModule;
    }();

    AnimateOnScrollModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: AnimateOnScrollModule
    });
    AnimateOnScrollModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function AnimateOnScrollModule_Factory(t) {
        return new (t || AnimateOnScrollModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(AnimateOnScrollModule, {
        declarations: [AnimateOnScrollDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [AnimateOnScrollDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(AnimateOnScrollModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          declarations: [AnimateOnScrollDirective],
          exports: [AnimateOnScrollDirective]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-animate-on-scroll.js.map

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


    var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-animate-on-scroll */
    "./dist/ng2-animate-on-scroll/fesm2015/ng2-animate-on-scroll.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'animate-on-scroll-sample-project';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 65,
      vars: 2,
      consts: [[1, "container"], [1, "jumbotron"], [1, "display-3"], [1, "lead"], [1, "row", "p-5"], [1, "col-12", "col-md-6", "col-lg-4"], ["animateOnScroll", "", "threshold", "0", 1, "card", 3, "animationName", "useScroll"], [1, "card-block"], [1, "card-title"], [1, "card-text"], ["animateOnScroll", "", "animationName", "animated fadeInDown", "threshold", "0.5", 1, "card", "hide-on-init", "animated-delay-1"], ["animateOnScroll", "", "animationName", "animated fadeInDown", 1, "card", "hide-on-init", "animated-delay-2"], ["animateOnScroll", "", "animationName", "animated fadeInLeft", 1, "col", "hide-on-init"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-secondary"], ["animateOnScroll", "", "animationName", "animated fadeInRight", 1, "col", "hide-on-init"], [1, "col"], [1, "row"], [1, "col-md-12", "col-lg-6", "p-3"], ["src", "../assets/sunset.jpg", "animateOnScroll", "", "animationName", "animated zoomInDown", 1, "img-fluid", "rounded", "float-left", "hide-on-init"], ["src", "../assets/tiger.jpg", "animateOnScroll", "", "animationName", "animated zoomInDown", 1, "img-fluid", "rounded", "float-left", "hide-on-init"], ["src", "../assets/mountains.jpg", "animateOnScroll", "", "animationName", "animated zoomInDown", 1, "img-fluid", "rounded", "float-left", "hide-on-init"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ng2-animate-on-scroll example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scroll down for a few examples");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cards that ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "... fade in at ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "... different times.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Divs containing other elements like buttons or forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit feugiat, venenatis turpis id, pharetra felis. Cras mollis vitae orci eget volutpat. Proin dapibus massa vitae lacus maximus, vitae cursus diam sodales. Curabitur laoreet nunc sit amet est sagittis rutrum. Nulla at ante sed elit scelerisque vestibulum. Vivamus commodo mauris ante, quis varius ante dictum vel. Mauris in est volutpat, auctor diam ut, pretium est. Suspendisse ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Sections of text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit feugiat, venenatis turpis id, pharetra felis. Cras mollis vitae orci eget volutpat. Proin dapibus massa vitae lacus maximus, vitae cursus diam sodales. Curabitur laoreet nunc sit amet est sagittis rutrum. Nulla at ante sed elit scelerisque vestibulum. Vivamus commodo mauris ante, quis varius ante dictum vel. Mauris in est volutpat, auctor diam ut, pretium est. Suspendisse ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationName", null)("useScroll", false);
        }
      },
      directives: [ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_1__["AnimateOnScrollDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-animate-on-scroll */
    "./dist/ng2-animate-on-scroll/fesm2015/ng2-animate-on-scroll.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'serverApp'
      }), ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__["AnimateOnScrollModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__["AnimateOnScrollModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
            appId: 'serverApp'
          }), ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__["AnimateOnScrollModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
        return console.error(err);
      });
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
    /*! /home/abhirup/Documents/selfProjects/animate-on-scroll/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map