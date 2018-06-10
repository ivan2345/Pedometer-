import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, ViewController} from 'ionic-angular';
import { Pedometer } from '@ionic-native/pedometer';

import { Platform, ModalController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

import { SettingsPage } from '../settings/settings';
import { Storage } from '@ionic/storage';
import {StepsProvider} from "../../providers/steps/steps";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
    steps: number = 0;
    goal: number;
    percentage: number;
    alert: boolean;
    calories: number;
    height: number;
    distance: number;



    constructor(
                public platform: Platform,
                public pedometer: Pedometer,
                public modalCtrl: ModalController,
                public settings: SettingsProvider,
                private storage:Storage,
                public stepProvider:StepsProvider,
                public menuCtrl:MenuController) {


    }
    ionViewDidLoad(){
        this.menuCtrl.enable(true,'sidemenu');
        ;
    }
start(){
    this.stepProvider.starttrack();
    this.distance=this.stepProvider.distance;
    this.goal=this.stepProvider.goal;
    this.percentage=this.stepProvider.percentage;
    this.steps=this.stepProvider.steps;
}

stop(){
        this.stepProvider.stoptrack();
}

    setPercentage() {
        this.percentage = (this.steps / this.goal) * 100;
    }

    showOptions() {
        let modal = this.modalCtrl.create(SettingsPage);
        modal.onDidDismiss((result) => {
            if (result) {
                this.goal = result;
            }
        })
        modal.present();
    }




}