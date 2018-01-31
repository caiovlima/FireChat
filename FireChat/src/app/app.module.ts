import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { SalaPage } from './../pages/sala/sala';
import { AdicionarSalaPage } from './../pages/adicionar-sala/adicionar-sala';


@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
    SalaPage,
    AdicionarSalaPage,
    HomePage
  ],
  imports: [

  BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    SalaPage,
    AdicionarSalaPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
