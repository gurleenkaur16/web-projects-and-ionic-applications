import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { GetPage } from '../pages/get/get';
import { VideoPage} from "../pages/video/video";
import {ModalPage} from "../pages/modal/modal";
import {GetmodeldataPage} from "../pages/getmodeldata/getmodeldata";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    GetPage,
    VideoPage,
    ModalPage,
    GetmodeldataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    GetPage,
    VideoPage,
    ModalPage,
    GetmodeldataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
