import { Component,ViewChild } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {Screenshot} from "@ionic-native/screenshot";
import {AngularFireAuth} from "angularfire2/auth";
import {Storage} from "@ionic/storage";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    @ViewChild('username') user;
    @ViewChild('password') password;

    myphoto:any;
    screens:any;
    state: boolean = false;

    constructor(public navCtrl: NavController,private fire:AngularFireAuth, private camera:Camera,  screenshot:Screenshot,private toastCtrl:ToastController,
                private storage:Storage,public menuCtrl:MenuController) {

    }
    ionViewDidLoad(){
        this.menuCtrl.enable(false,'sidemenu')
    }
    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration:2000
        });
        toast.present();
    }
    gotoRegister(){
        this.navCtrl.push('RegisterPage');
    }
    gotoHome(){
        this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
            .then( data => {
                console.log('got some data', this.fire.auth.currentUser);
                this.presentToast('Success');
                this.navCtrl.setRoot( 'HomePage' );
                this.storage.set('user.ID',99);
                // user is logged in
            })
            .catch( error => {
                console.log('got an error', error);
                this.presentToast(error.message);
            })
        console.log('Would sign in with ', this.user.value, this.password.value);
    }
}
