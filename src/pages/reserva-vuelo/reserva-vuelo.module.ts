import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservaVueloPage } from './reserva-vuelo';

@NgModule({
  declarations: [
    ReservaVueloPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservaVueloPage),
  ],
})
export class ReservaVueloPageModule {}
