import { BrowserModule } from '@angular/platform-browser';
import {ChangeDetectorRef, ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Screenshot } from '@ionic-native/screenshot';

import { Camera } from '@ionic-native/camera';
import { Pedometer } from '@ionic-native/pedometer';
import { SettingsProvider } from '../providers/settings/settings';
import {HttpClient} from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';
import {StepsProvider} from "../providers/steps/steps";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


const firebaseAuth = {
    apiKey: "AIzaSyATMiAPWCpysJ3ZZyUpPKjC6ySZaEGUdrg",
        authDomain: "pedometer-89dfc.firebaseapp.com",
        databaseURL: "https://pedometer-89dfc.firebaseio.com",
        projectId: "pedometer-89dfc",
        storageBucket: "pedometer-89dfc.appspot.com",
        messagingSenderId: "172676926137"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot(),
      AngularFireModule.initializeApp(firebaseAuth),
      AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,Screenshot,Pedometer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    HttpClient,
      StepsProvider
  ]
})
export class AppModule {}
