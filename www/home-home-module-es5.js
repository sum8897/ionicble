function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\">\n      Dyfo Bluetooth Lock System\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-button expand=\"full\" (click)=\"scan()\" slot=\"end\">\n  <ion-icon name=\"Bluetooth\"></ion-icon>\n  <p>Scan</p>\n</ion-button>\n\n\n  <ion-list> \n   \n    <ion-button *ngFor=\"let device of devices\" (click)=\"deviceSelected(device)\">\n      <h2>{{device.name || 'Unnamed' }}fghhg</h2>\n      <p>{{device.id}}</p>\n      <p>RSSI: {{device.rssi}}</p>\n    </ion-button>\n  </ion-list>\n\n  <ion-item>\n    <ion-label>Lock/UnLock</ion-label>\n    <ion-toggle [(ngModel)]=\"lockvalue\"  (ionChange)=\"onLockClick($event);\"></ion-toggle>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style=\"text-align: center;\">\n    <p>{{ statusMessage }}</p>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/ble/ngx */
    "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var LIGHTBULB_SERVICE = 'ff10';
    var SWITCH_CHARACTERISTIC = 'ff11';
    var DIMMER_CHARACTERISTIC = 'ff12';

    var HomePage = /*#__PURE__*/function () {
      function HomePage(ble, ngZone, toastCtrl, alertCtrl) {
        _classCallCheck(this, HomePage);

        this.ble = ble;
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.devices = [];
        this.peripheral = {};
      }

      _createClass(HomePage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          console.log('ionviewDidEnter');
          this.scan();
        }
      }, {
        key: "scan",
        value: function scan() {
          var _this = this;

          this.setStatus('Scanning for Bluetooth LE Devices...');
          this.devices = []; // clear list

          this.ble.scan([LIGHTBULB_SERVICE], 5).subscribe(function (device) {
            return _this.onDeviceDiscovered(device);
          }, function (error) {
            return _this.scanError(error.error);
          });
          setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
        }
      }, {
        key: "onDeviceDiscovered",
        value: function onDeviceDiscovered(device) {
          var _this2 = this;

          console.log('Discovered ' + JSON.stringify(device, null, 2));
          this.ngZone.run(function () {
            _this2.devices.push(device);
          });
        } // If location permission is denied, you'll end up here

      }, {
        key: "scanError",
        value: function scanError(error) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.setStatus('Error ' + error);
                    _context.next = 3;
                    return this.toastCtrl.create({
                      message: 'Error scanning for Bluetooth low energy devices',
                      position: 'middle',
                      duration: 5000
                    });

                  case 3:
                    toast = _context.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deviceSelected",
        value: function deviceSelected(device) {
          var _this3 = this;

          this.devicevl = device;
          console.log(JSON.stringify(this.devicevl) + ' selected');
          console.log("getdevice detailsafterclickbt:" + JSON.stringify(this.devicevl));
          this.setStatus('Connecting to ' + device.name || false);
          this.ble.connect(device.id).subscribe(function (peripheral) {
            return _this3.onConnected(peripheral);
          }, function (peripheral) {
            return _this3.showAlert('Disconnected', 'The peripheral unexpectedly disconnected');
          });
        }
      }, {
        key: "onConnected",
        value: function onConnected(peripheral) {
          var _this4 = this;

          this.peripheral = peripheral;
          this.setStatus('Connected to ' + (peripheral.name || peripheral.id)); // Update the UI with the current state of the switch characteristic

          this.ble.read(this.peripheral.id, LIGHTBULB_SERVICE, SWITCH_CHARACTERISTIC).then(function (buffer) {
            var data = new Uint8Array(buffer);
            console.log('switch characteristic ' + data[0]);

            _this4.ngZone.run(function () {
              _this4.lockvalue = data[0] !== 0;
            });
          });
        }
      }, {
        key: "onLockClick",
        value: function onLockClick(event) {
          var _this5 = this;

          console.log('onlockvalueSwitchChange');
          var value = this.lockvalue ? 1 : 0;
          var buffer = new Uint8Array([value]).buffer;
          console.log('lockvalue Switch Property ' + this.lockvalue);
          console.log(buffer);
          this.ble.write(this.peripheral.id, LIGHTBULB_SERVICE, SWITCH_CHARACTERISTIC, buffer).then(function () {
            return _this5.setStatus('Light is ' + (_this5.lockvalue ? 'on' : 'off'));
          }, function (e) {
            return _this5.showAlert('Unexpected Error', 'Error updating lockvalue switch');
          });
        }
      }, {
        key: "setStatus",
        value: function setStatus(message) {
          var _this6 = this;

          console.log(message);
          this.ngZone.run(function () {
            _this6.statusMessage = message;
          });
        }
      }, {
        key: "showAlert",
        value: function showAlert(title, message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__["BLE"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__["BLE"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map