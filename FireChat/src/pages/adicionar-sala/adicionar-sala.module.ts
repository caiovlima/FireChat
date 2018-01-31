import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarSalaPage } from './adicionar-sala';

@NgModule({
  declarations: [
    AdicionarSalaPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarSalaPage),
  ],
})
export class AdicionarSalaPageModule {}
