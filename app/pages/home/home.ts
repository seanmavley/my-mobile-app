import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {ArticlePage} from '../article/article';
import {RssService} from '../../providers/rss-service/rss-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  private posts: any[];
  constructor(private navCtrl: NavController, public rssService: RssService) {

    this.posts = [];

    this.rssService.load().subscribe(
      data => {
        this.posts = data;
      }
    );
  }
  detailPage(post) {
    this.navCtrl.push(ArticlePage, {
      'post': post
    });
  }
}
