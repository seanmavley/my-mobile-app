import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {DoctorService} from '../../providers/doctor-service/doctor-service';

@Component({
  templateUrl: 'build/pages/doctors/doctors.html'
})
export class DoctorsPage {
  private doctors: any[];
  constructor(private navCtrl: NavController, public docService: DoctorService) {
    this.doctors = [];

    this.docService.load().subscribe(
      data => {
        this.doctors = data;
      }
    );
  }

  detailPage(doctor) {
    this.navCtrl.push(DetailPage, {
      'doctor': doctor
    });
  }
}
