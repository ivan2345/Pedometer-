import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})

@Injectable()
export class SettingsProvider {
    goal: number = 2000;

    constructor() {
    }

    setGoal(goal: number) {
        if (goal && goal > 0) {
            this.goal = goal;
        }
    }

    getGoal() {
        return this.goal;
    }

}

