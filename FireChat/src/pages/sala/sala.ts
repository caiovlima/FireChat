import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdicionarSalaPage } from '../adicionar-sala/adicionar-sala';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';
import { LottieAnimationViewModule } from 'ng-lottie';
 
@IonicPage()
@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})
export class SalaPage {
  /*Declare as viriáveis para armazenar a 
  lista de salas e referenciar o banco de dados firebase antes do cosntrutor da classe.*/

  salas = []; 
  ref = firebase.database().ref('salas/');

  lottieConfig: any;
 
  /*Adicione a seguinte função para receber 
  notificação de qualquer mudança no banco de dados firebase.*/
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    LottieAnimationViewModule.forRoot();
    this. lottieConfig={
      path: 'assets/smiley_stack.json',
      autoplay: true,
      loop: true
    }

    this.ref.on('value', resp => {
      this.salas = [];
      this.salas = snapshotToArray(resp);
    });
  }
 
  adicionarSala() {
    this.navCtrl.push(AdicionarSalaPage);
  }
 
  acessarSala(key) {
    this.navCtrl.setRoot(HomePage, {
      key:key,
      nickname: this.navParams.get('nickname')
    });
  }
 
}
 
export const snapshotToArray = snapshot => {
  let returnArr = [];
 
  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
 
  return returnArr;
};
