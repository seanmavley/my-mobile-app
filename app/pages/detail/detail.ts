import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/detail/detail.html',
})
export class DetailPage {
  private doctor: any[]
  constructor(private navCtrl: NavController, public params: NavParams) {
    this.doctor = this.params.get('doctor');
  }

  openUrl(url) {
    window.open(url);
  };

}
