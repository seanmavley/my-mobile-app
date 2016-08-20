import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, NavController, ModalController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {HomePage} from './pages/home/home';
import {FeedbackPage} from './pages/feedback/feedback';
import {AboutPage} from './pages/about/about';
import {RssService} from './providers/rss-service/rss-service';

@Component({
  templateUrl: 'build/app.html',
  providers: [NavController, RssService]
})
export class MyApp {
  @ViewChild('nav') nav : NavController;
  private rootPage: any;
  private pages: any[];

  constructor(
    private platform: Platform,
    public menu: MenuController,
    private modal: ModalController
    ) {
    this.menu = menu;
    this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'About App', component: AboutPage }
    ];
    this.rootPage = TabsPage;
    // this.rootPage = FeedbackPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  };

  showFeedback() {
    let modal = this.modal.create(FeedbackPage);
    modal.present();
  };

  openPage(page) {
    this.menu.close()
    this.nav.push(page.component);
  };
}

ionicBootstrap(MyApp);
