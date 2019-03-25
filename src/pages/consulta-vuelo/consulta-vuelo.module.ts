import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaVueloPage } from './consulta-vuelo';
import { TarjetaService } from '../../services/tarjeta.service';

@NgModule({
  declarations: [
    ConsultaVueloPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaVueloPage),
    TarjetaService,
  ],
  providers: [
    TarjetaService
  ]
})
export class ConsultaVueloPageModule {}
