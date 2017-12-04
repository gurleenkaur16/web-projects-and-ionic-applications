import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VideoPage} from "../video/video";
import {LoginPage} from "../login/login";
import {ModalPage} from "../modal/modal";
import { ActionSheetController } from 'ionic-angular';
import {ModalController} from "ionic-angular";
import {GetPage} from "../get/get";
import {GetmodeldataPage} from "../getmodeldata/getmodeldata";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

  export class HomePage {
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Share music',
          role: 'Share music',
          handler: () => {
            console.log('Share music clicked');
          }
        }, {
          text: 'Listen Music',
          handler: () => {
            console.log('Listen Music clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  getpage() {
    this.navCtrl.push(VideoPage);
  }

 public u:string;
  sendData() {
    var sendtomodal= this.modalCtrl.create(ModalPage,{
      u:this.u
    });
    sendtomodal.present();
  }
  modalv(){
    let modalv = this.modalCtrl.create(ModalPage, {
      u : this.u
    });
    modalv.present();
  }
}

