import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';

@Component({
  templateUrl: 'build/pages/doctors/doctors.html'
})
export class DoctorsPage {
  constructor(private navCtrl: NavController) {
  }

  doctorDetail() {
    this.navCtrl.push(DetailPage);
  }
}
