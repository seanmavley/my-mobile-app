import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {HomePage} from './pages/home/home';
import {ContactPage} from './pages/contact/contact';
import {AboutPage} from './pages/about/about';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  private rootPage: any;
  private pages: any[];

  constructor(private platform: Platform, public menu: MenuController) {
    this.menu = menu;

    this.rootPage = TabsPage;

    this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Contact', component: ContactPage },
        { title: 'About', component: AboutPage }
    ];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  };

  openPage(page) {
    this.menu.close()
    // let nav = this.app.getComponent('nav');
    // nav.setRoot(page.component);
  };
}

ionicBootstrap(MyApp);
