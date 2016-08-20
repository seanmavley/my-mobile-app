import { Component } from '@angular/core';
import { NavController, MenuController, ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/feedback/feedback.html',
})

export class FeedbackPage {

  constructor(private navCtrl: NavController, private menu: MenuController, private toast: ToastController) {
    this.toast = toast;
  }

  displayToast() { // shall we?
    let toast = this.toast.create({
      message: 'Thank you! Feedback sent',
      duration: 5000
    })

    toast.present();
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.displayToast();
      this.dismiss();
    }
  }

  dismiss() {
    this.menu.close();
    this.navCtrl.pop();
  }
}
