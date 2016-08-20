import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/article/article.html',
})
export class ArticlePage {
  private post: any[];
  constructor(private navCtrl: NavController, public params: NavParams) {
    this.post = this.params.get('post');
  }

  openUrl(url) {
      window.open(url);
      // let browser = InAppBrowser.open(url, '_system');
    }
}
