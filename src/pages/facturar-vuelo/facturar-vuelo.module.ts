import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturarVueloPage } from './facturar-vuelo';

@NgModule({
  declarations: [
    FacturarVueloPage,
  ],
  imports: [
    IonicPageModule.forChild(FacturarVueloPage),
  ],
})
export class FacturarVueloPageModule {}
