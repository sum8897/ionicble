(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\">\n      Dyfo Bluetooth Lock System\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-button expand=\"full\" (click)=\"scan()\" slot=\"end\">\n  <ion-icon name=\"Bluetooth\"></ion-icon>\n  <p>Scan</p>\n</ion-button>\n\n\n  <ion-list> \n   \n    <ion-button *ngFor=\"let device of devices\" (click)=\"deviceSelected(device)\">\n      <h2>{{device.name || 'Unnamed' }}fghhg</h2>\n      <p>{{device.id}}</p>\n      <p>RSSI: {{device.rssi}}</p>\n    </ion-button>\n  </ion-list>\n\n  <ion-item>\n    <ion-label>Lock/UnLock</ion-label>\n    <ion-toggle [(ngModel)]=\"lockvalue\"  (ionChange)=\"onLockClick($event);\"></ion-toggle>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style=\"text-align: center;\">\n    <p>{{ statusMessage }}</p>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




const LIGHTBULB_SERVICE = 'ff10';
const SWITCH_CHARACTERISTIC = 'ff11';
const DIMMER_CHARACTERISTIC = 'ff12';
let HomePage = class HomePage {
    constructor(ble, ngZone, toastCtrl, alertCtrl) {
        this.ble = ble;
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.devices = [];
        this.peripheral = {};
    }
    ionViewDidEnter() {
        console.log('ionviewDidEnter');
        this.scan();
    }
    scan() {
        this.setStatus('Scanning for Bluetooth LE Devices...');
        this.devices = []; // clear list
        this.ble.scan([LIGHTBULB_SERVICE], 5).subscribe(device => this.onDeviceDiscovered(device), error => this.scanError(error.error));
        setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
    }
    onDeviceDiscovered(device) {
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(() => {
            this.devices.push(device);
        });
    }
    // If location permission is denied, you'll end up here
    scanError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.setStatus('Error ' + error);
            let toast = yield this.toastCtrl.create({
                message: 'Error scanning for Bluetooth low energy devices',
                position: 'middle',
                duration: 5000
            });
            toast.present();
        });
    }
    deviceSelected(device) {
        this.devicevl = device;
        console.log(JSON.stringify(this.devicevl) + ' selected');
        console.log("getdevice detailsafterclickbt:" + JSON.stringify(this.devicevl));
        this.setStatus('Connecting to ' + device.name || false);
        this.ble.connect(device.id).subscribe(peripheral => this.onConnected(peripheral), peripheral => this.showAlert('Disconnected', 'The peripheral unexpectedly disconnected'));
    }
    onConnected(peripheral) {
        this.peripheral = peripheral;
        this.setStatus('Connected to ' + (peripheral.name || peripheral.id));
        // Update the UI with the current state of the switch characteristic
        this.ble.read(this.peripheral.id, LIGHTBULB_SERVICE, SWITCH_CHARACTERISTIC).then(buffer => {
            let data = new Uint8Array(buffer);
            console.log('switch characteristic ' + data[0]);
            this.ngZone.run(() => {
                this.lockvalue = data[0] !== 0;
            });
        });
    }
    onLockClick(event) {
        console.log('onlockvalueSwitchChange');
        let value = this.lockvalue ? 1 : 0;
        let buffer = new Uint8Array([value]).buffer;
        console.log('lockvalue Switch Property ' + this.lockvalue);
        console.log(buffer);
        this.ble.write(this.peripheral.id, LIGHTBULB_SERVICE, SWITCH_CHARACTERISTIC, buffer).then(() => this.setStatus('Light is ' + (this.lockvalue ? 'on' : 'off')), e => this.showAlert('Unexpected Error', 'Error updating lockvalue switch'));
    }
    setStatus(message) {
        console.log(message);
        this.ngZone.run(() => {
            this.statusMessage = message;
        });
    }
    showAlert(title, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: title,
                message: message,
                buttons: ['OK']
            });
            alert.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__["BLE"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__["BLE"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map