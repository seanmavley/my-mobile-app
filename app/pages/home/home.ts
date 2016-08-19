import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {ArticlePage} from '../article/article';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
  }
  detailPage() {
    this.navCtrl.push(ArticlePage);
  }
}
