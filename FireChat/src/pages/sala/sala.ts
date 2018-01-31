import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdicionarSalaPage } from '../adicionar-sala/adicionar-sala';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';
 
@IonicPage()
@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})
export class SalaPage {
  salas = []; 
  ref = firebase.database().ref('salas/');
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
