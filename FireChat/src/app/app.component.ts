import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';

const config = {
    apiKey: "AIzaSyAuRsTLKZJE_q1kCyQL-UKvfxxyvmUq5wk",
    authDomain: "firechat-a3e66.firebaseapp.com",
    databaseURL: "https://firechat-a3e66.firebaseio.com",
    projectId: "firechat-a3e66",
    storageBucket: "firechat-a3e66.appspot.com",
    messagingSenderId: "511435653761"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CadastroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

