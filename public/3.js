(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Logo */ "./resources/js/components/Logo.vue");
/* harmony import */ var _components_UploadModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UploadModal */ "./resources/js/components/UploadModal.vue");
/* harmony import */ var _components_FlashMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FlashMessage */ "./resources/js/components/FlashMessage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  components: {
    FlashMessage: _components_FlashMessage__WEBPACK_IMPORTED_MODULE_2__["default"],
    UploadModal: _components_UploadModal__WEBPACK_IMPORTED_MODULE_1__["default"],
    Logo: _components_Logo__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      button: 'Logout',
      button_2: 'Change Avatar'
    };
  },
  methods: {
    logout: function logout() {
      this.button = 'Loging Out ...';
      this.$inertia.post('/logout', this.form);
    }
  },
  computed: {
    user: function user() {
      return this.$page.auth.user;
    }
  },
  mounted: function mounted() {
    console.log(route('avatar'));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlashMessage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlashMessage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FlashMessage",
  data: function data() {
    return {
      show: true
    };
  },
  watch: {
    '$page.flash': {
      handler: function handler() {
        this.show = true;
      },
      deep: true
    },
    '$page.errors': {
      handler: function handler() {
        this.show = true;
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Logo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Logo',
  props: {
    avatar: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UploadModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UploadModal',
  data: function data() {
    return {
      file: null,
      button: 'Update'
    };
  },
  computed: {
    user: function user() {
      return this.$page.auth.user;
    }
  },
  mounted: function mounted() {
    var vm = this;
    var openmodal = document.querySelectorAll('.modal-open');

    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener('click', function (event) {
        event.preventDefault();
        vm.toggleModal();
      });
    }

    var overlay = document.querySelector('.modal-overlay');
    overlay.addEventListener('click', this.toggleModal);
    var closemodal = document.querySelectorAll('.modal-close');

    for (var _i = 0; _i < closemodal.length; _i++) {
      closemodal[_i].addEventListener('click', this.toggleModal);
    }

    document.onkeydown = function (evt) {
      evt = evt || window.event;
      var isEscape = false;

      if ('key' in evt) {
        isEscape = evt.key === 'Escape' || evt.key === 'Esc';
      } else {
        isEscape = evt.keyCode === 27;
      }

      if (isEscape && document.body.classList.contains('modal-active')) {
        vm.toggleModal();
      }
    };
  },
  methods: {
    handleUploadChange: function handleUploadChange() {
      this.file = this.$refs.uploadFile.files[0];
    },
    upload: function upload() {
      var _this = this;

      if (!this.file) {
        return;
      }

      this.button = 'Uploading ...';
      var bodyFormData = new FormData();
      bodyFormData.append('photo', this.file);
      this.$inertia.post(route('avatar'), bodyFormData).then(function () {
        _this.button = 'Upload';

        _this.clear();

        _this.toggleModal();
      });
    },
    clear: function clear() {
      var input = this.$refs.uploadFile;
      input.type = 'text';
      input.type = 'file';
    },
    toggleModal: function toggleModal() {
      var body = document.querySelector('body');
      var modal = document.querySelector('.modal');
      modal.classList.toggle('opacity-0');
      modal.classList.toggle('pointer-events-none');
      body.classList.toggle('modal-active');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Logo.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".NuxtLogo {\n  -webkit-animation: 1s appear;\n          animation: 1s appear;\n  margin: auto;\n}\n@-webkit-keyframes appear {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes appear {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Logo.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("br"),
      _vm._v(" "),
      _c("flash-message"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "max-w-sm rounded overflow-hidden shadow-lg bg-white" },
        [
          _c("logo", { attrs: { avatar: _vm.user.avatar } }),
          _vm._v(" "),
          _c("div", { staticClass: "px-6 py-4" }, [
            _c("div", { staticClass: "font-bold text-xl mb-2" }, [
              _vm._v(_vm._s(_vm.user.name))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-gray-700 text-base" }, [
              _vm._v(
                "\n                " + _vm._s(_vm.user.email) + "\n            "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "px-6 py-4" }, [
            _c(
              "span",
              {
                staticClass:
                  "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              },
              [
                _c("button", { staticClass: "modal-open" }, [
                  _vm._v(_vm._s(_vm.button_2))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              },
              [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.logout($event)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.button))]
                )
              ]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("upload-modal")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center text-gray-500 text-xs" }, [
      _c("br"),
      _c("br"),
      _vm._v("\n        ©2020 All rights reserved.\n    ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlashMessage.vue?vue&type=template&id=3cea7a62&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlashMessage.vue?vue&type=template&id=3cea7a62&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.$page.flash.success && _vm.show
      ? _c(
          "div",
          {
            staticClass:
              "mb-8 flex items-center justify-between bg-green-500 rounded max-w-lg"
          },
          [
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "svg",
                {
                  staticClass: "ml-4 mr-2 flex-no-shrink w-4 h-4 fill-white",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20"
                  }
                },
                [
                  _c("polygon", {
                    attrs: { points: "0 11 2 9 7 14 18 3 20 5 7 18" }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "py-4 text-white text-sm font-medium" },
                [_vm._v(_vm._s(_vm.$page.flash.success))]
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "group mr-2 p-2",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.show = false
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass:
                      "block w-2 h-2 fill-green-dark group-hover:fill-green-darker",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "235.908",
                      height: "235.908",
                      viewBox: "278.046 126.846 235.908 235.908"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"
                      }
                    })
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.$page.errors).length > 0 && _vm.show
      ? _c(
          "div",
          {
            staticClass:
              "mb-8 flex items-center justify-between bg-red-500 rounded max-w-lg"
          },
          [
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "svg",
                {
                  staticClass: "ml-4 mr-2 flex-no-shrink w-4 h-4 fill-white",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "py-4 text-white text-sm font-medium" },
                [
                  Object.keys(_vm.$page.errors).length === 1
                    ? _c("span", [_vm._v("There is one form error.")])
                    : _c("span", [
                        _vm._v(
                          "There are " +
                            _vm._s(Object.keys(_vm.$page.errors).length) +
                            " form errors."
                        )
                      ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "group mr-2 p-2",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.show = false
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass:
                      "block w-2 h-2 fill-red-dark group-hover:fill-red-darker",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "235.908",
                      height: "235.908",
                      viewBox: "278.046 126.846 235.908 235.908"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"
                      }
                    })
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=template&id=1c796f16&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Logo.vue?vue&type=template&id=1c796f16& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.avatar === null
      ? _c("div", [
          _c("img", {
            staticClass: "w-full",
            attrs: {
              src: "https://magak.me/assets/images/Geek-logo.png",
              alt: "img"
            }
          })
        ])
      : _c("div", [
          _c("img", {
            staticClass: "w-full",
            attrs: { src: _vm.avatar, alt: "img" }
          })
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadModal.vue?vue&type=template&id=db51cbde&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UploadModal.vue?vue&type=template&id=db51cbde&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
    },
    [
      _c("div", {
        staticClass:
          "modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
            },
            [
              _c(
                "svg",
                {
                  staticClass: "fill-current text-white",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "18",
                    height: "18",
                    viewBox: "0 0 18 18"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "text-sm" }, [_vm._v("(Esc)")])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "modal-content py-4 text-left px-6" }, [
            _c(
              "div",
              { staticClass: "flex justify-between items-center pb-3" },
              [
                _c("p", { staticClass: "text-2xl font-bold" }, [
                  _vm._v("Update Avatar")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-close cursor-pointer z-50" }, [
                  _c(
                    "svg",
                    {
                      staticClass: "fill-current text-black",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        }
                      })
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "custom-file" }, [
              _c("input", {
                ref: "uploadFile",
                class: [
                  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ",
                  _vm.$page.errors.photo ? "border-red-500" : ""
                ],
                attrs: { id: "uploadFile", type: "file", accept: "image/*" },
                on: { change: _vm.handleUploadChange }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-file-label",
                  attrs: { for: "uploadFile" }
                },
                [
                  _vm._v(
                    "\n                    Drop Files Here to upload\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _vm.$page.errors.photo
                ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$page.errors.photo[0]) +
                        "\n                "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex justify-end pt-2" }, [
              _c(
                "button",
                {
                  staticClass:
                    "px-4 bg-gray-300 p-3 rounded-lg text-indigo-500 hover:bg-gray-500 hover:text-indigo-400 mr-2",
                  attrs: { type: "button" },
                  on: { click: _vm.upload }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.button) +
                      "\n                "
                  )
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488&scoped=true& */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6a63e488",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=6a63e488&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FlashMessage.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/FlashMessage.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlashMessage_vue_vue_type_template_id_3cea7a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=template&id=3cea7a62&scoped=true& */ "./resources/js/components/FlashMessage.vue?vue&type=template&id=3cea7a62&scoped=true&");
/* harmony import */ var _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=script&lang=js& */ "./resources/js/components/FlashMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlashMessage_vue_vue_type_template_id_3cea7a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlashMessage_vue_vue_type_template_id_3cea7a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3cea7a62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FlashMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FlashMessage.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/FlashMessage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlashMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FlashMessage.vue?vue&type=template&id=3cea7a62&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FlashMessage.vue?vue&type=template&id=3cea7a62&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_3cea7a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessage.vue?vue&type=template&id=3cea7a62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlashMessage.vue?vue&type=template&id=3cea7a62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_3cea7a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_3cea7a62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Logo.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Logo.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=1c796f16& */ "./resources/js/components/Logo.vue?vue&type=template&id=1c796f16&");
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ "./resources/js/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Logo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Logo.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Logo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Logo.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Logo.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Logo.vue?vue&type=template&id=1c796f16&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Logo.vue?vue&type=template&id=1c796f16& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=1c796f16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Logo.vue?vue&type=template&id=1c796f16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_1c796f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UploadModal.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/UploadModal.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadModal_vue_vue_type_template_id_db51cbde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadModal.vue?vue&type=template&id=db51cbde&scoped=true& */ "./resources/js/components/UploadModal.vue?vue&type=template&id=db51cbde&scoped=true&");
/* harmony import */ var _UploadModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadModal.vue?vue&type=script&lang=js& */ "./resources/js/components/UploadModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UploadModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadModal_vue_vue_type_template_id_db51cbde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UploadModal_vue_vue_type_template_id_db51cbde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "db51cbde",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UploadModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UploadModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/UploadModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UploadModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UploadModal.vue?vue&type=template&id=db51cbde&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/UploadModal.vue?vue&type=template&id=db51cbde&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_template_id_db51cbde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UploadModal.vue?vue&type=template&id=db51cbde&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadModal.vue?vue&type=template&id=db51cbde&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_template_id_db51cbde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_template_id_db51cbde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);