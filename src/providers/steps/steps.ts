import {Injectable} from '@angular/core';
import {SettingsProvider} from "../settings/settings";
import {Pedometer} from "@ionic-native/pedometer";
import {ModalController, Platform} from "ionic-angular";

/*
  Generated class for the StepsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StepsProvider {
    steps: number = 0;
    goal: number;
    percentage: number;
    alert: boolean;
    calories: number;
    height: number;
    distance: number;

    constructor(public platform: Platform,
                public pedometer: Pedometer,
                public modalCtrl: ModalController,
                public settings: SettingsProvider,) {


    }

    starttrack(){
        this.pedometer.startPedometerUpdates()
            .subscribe((data) => {
                this.steps = data.numberOfSteps;
                this.setPercentage();
                this.distance = this.steps * 0.762;
            });

        this.goal = this.settings.getGoal();
        this.setPercentage();
    }

    stoptrack() {
        this.pedometer.stopPedometerUpdates()
    }
    showOptions() {
        let modal = this.modalCtrl.create('SettingsPage');
        modal.onDidDismiss((result) => {
            if (result) {
                this.goal = result;
            }
        })
        modal.present();
    }

    setPercentage() {
        this.percentage = (this.steps / this.goal) * 100;
    }
}
