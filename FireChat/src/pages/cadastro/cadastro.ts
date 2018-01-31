import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SalaPage } from  '../sala/sala';

// npm install --save ng-lottie

// importe 
import { LottieAnimationViewModule } from 'ng-lottie';



@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  // variavel any para utilizar o lottie
  lottieConfig: any;

  /*Agora adicione a seguinte variável diretamente acima do constructor para armazenar o nickname do usuário*/
  data = { nickname:"" };
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // configuração
    LottieAnimationViewModule.forRoot();
    this.lottieConfig = {
      // caminho onde você baixa e armazena o arquivo json de animação do site lottiefiles.com
      path: 'assets/progress_bar.json',
      // autoplay para tocar automaticamente e o loop
      autoplay: true,
      loop: true
    }
  }

  acessarNickname() {
    this.navCtrl.setRoot(SalaPage, {
      nickname: this.data.nickname
    });
  }
}
