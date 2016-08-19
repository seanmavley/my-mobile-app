import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/feedback/feedback.html',
})

export class FeedbackPage {

  constructor(private navCtrl: NavController, private menu: MenuController) {

  }

  dismiss() {
    this.menu.close();
    this.navCtrl.pop();
  }
}
