import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Avion } from '../../models/avion.model';
import { AvionService } from '../../services/avion.service';
import { FacturarVueloPage } from '../facturar-vuelo/facturar-vuelo';
import { Tarjeta } from "../../models/tarjeta.model";
import { TarjetaService } from '../../services/tarjeta.service';
import { TarjetaEmbarquePage } from '../tarjeta-embarque/tarjeta-embarque';

/**
 * Generated class for the ConsultaVueloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta-vuelo',
  templateUrl: 'consulta-vuelo.html',
})
export class ConsultaVueloPage {

  vuelos: Avion[] = [];
  tarjetas: Tarjeta[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private AvionService: AvionService,  private TarjetaService: TarjetaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaVueloPage');
  }

  ionViewWillEnter(){
    this.vuelos = this.AvionService.getVuelos();
  }

  onLoadFacturar(value: String){
    if(value == "Facturar"){
      this.navCtrl.push(FacturarVueloPage);
    }
    else{
      this.navCtrl.push(TarjetaEmbarquePage);
    }
  }

}
