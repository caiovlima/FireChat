import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
 
@IonicPage()
@Component({
  selector: 'page-adicionar-sala',
  templateUrl: 'adicionar-sala.html',
})
export class AdicionarSalaPage {
  /*Agora adicione a seguinte variável diretamente acima do constructor
   para armazenar o nome da sala e acessá-la*/
  data = { nome:'' };
  ref = firebase.database().ref('salas/');
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  adicionarSala() {
    let newData = this.ref.push();
    newData.set({
      nome:this.data.nome
    });
    this.navCtrl.pop();
  }
 
}