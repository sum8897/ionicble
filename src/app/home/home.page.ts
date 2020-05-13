import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { ToastController, NavParams, AlertController } from '@ionic/angular';



const LIGHTBULB_SERVICE = 'ff10';
const SWITCH_CHARACTERISTIC = 'ff11';
const DIMMER_CHARACTERISTIC = 'ff12';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  devices: any[] = [];
  devicevl;
  statusMessage: string;

  peripheral: any = {};
  lockvalue: boolean;
  
  constructor(private ble: BLE,
             private ngZone: NgZone,              
             private toastCtrl: ToastController,
             private alertCtrl: AlertController
             ) {}

             ionViewDidEnter(){
               console.log('ionviewDidEnter');
               this.scan();
             }
             scan(){
              this.setStatus('Scanning for Bluetooth LE Devices...');
              this.devices = [];  // clear list
              this.ble.scan([LIGHTBULB_SERVICE],5).subscribe(
                device => this.onDeviceDiscovered(device), 
                error => this.scanError(error.error)
              );
              setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
             }

             onDeviceDiscovered(device) {
              console.log('Discovered ' + JSON.stringify(device, null, 2));
              this.ngZone.run(() => {
                this.devices.push(device);
              });
            }

            // If location permission is denied, you'll end up here
 async scanError(error) {
    this.setStatus('Error ' + error);
    let toast =await this.toastCtrl.create({
      message: 'Error scanning for Bluetooth low energy devices',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }
  deviceSelected(device) {
    this.devicevl=device;
    console.log(JSON.stringify(this.devicevl) + ' selected');
    console.log("getdevice detailsafterclickbt:"+ JSON.stringify(this.devicevl))
   
    this.setStatus('Connecting to ' + device.name || device.id);
    this.ble.connect(device.id).subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.showAlert('Disconnected', 'The peripheral unexpectedly disconnected')
    );
  }
  onConnected(peripheral) {

    this.peripheral = peripheral;
    this.setStatus('Connected to ' + (peripheral.name || peripheral.id));

    // Update the UI with the current state of the switch characteristic
    this.ble.read(this.peripheral.id, LIGHTBULB_SERVICE, SWITCH_CHARACTERISTIC).then(
      buffer => {
        let data = new Uint8Array(buffer);
        console.log('switch characteristic ' + data[0]);
        this.ngZone.run(() => {
            this.lockvalue = data[0] !== 0;
        });
      }
    )    
  }

  onLockClick(event) {
    console.log('onlockvalueSwitchChange');
    let value = this.lockvalue ? 1 : 0;
    let buffer = new Uint8Array([value]).buffer;
    console.log('lockvalue Switch Property ' + this.lockvalue);
    console.log(buffer)
    this.ble.write(this.peripheral.id, LIGHTBULB_SERVICE, SWITCH_CHARACTERISTIC, buffer).then(
      () => this.setStatus('Light is ' + (this.lockvalue ? 'on' : 'off')),
      e => this.showAlert('Unexpected Error', 'Error updating lockvalue switch')
    );
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

 async showAlert(title, message) {
    let alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
