import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get',
  templateUrl: 'get.html',
})
export class GetPage {

  public username;
  public password;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get("username");
    this.password = navParams.get("password");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetPage');
  }

}
