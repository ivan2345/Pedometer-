import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';

import { ViewController } from 'ionic-angular';

import { SettingsProvider } from '../../providers/settings/settings';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  goal : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public settings: SettingsProvider,public menuCtrl:MenuController) {

      this.goal = this.settings.getGoal();

  }
ionViewDidLoad(){
    this.menuCtrl.enable(true,'sidemenu');
}


}
