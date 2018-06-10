import {Component, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
    @ViewChild('username') user;
    @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fire: AngularFireAuth,private toastCtrl:ToastController,public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.menuCtrl.enable(false,'sidemenu');
  }
    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration:2000
        });
        toast.present();
    }
    registerUser() {
        this.fire.auth.createUserWithEmailAndPassword(this.user.value , this.password.value)
            .then(data => {
                console.log('got data ', data);
                this.presentToast('Registered!');
                this.navCtrl.setRoot('LoginPage')
            })
            .catch(error => {
                console.log('got an error ', error);
                this.presentToast(error.message);
            });
        console.log('Would register user with ', this.user.value, this.password.value);
    }

}
