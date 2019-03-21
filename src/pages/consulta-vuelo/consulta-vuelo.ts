import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Avion } from '../../models/avion.model';
import { AvionService } from '../../services/avion.service';
import { FacturarVueloPage } from '../facturar-vuelo/facturar-vuelo';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private AvionService: AvionService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaVueloPage');
  }

  ionViewWillEnter(){
    this.vuelos = this.AvionService.getVuelos();
  }

  onLoadFacturar(){
    this.navCtrl.push(FacturarVueloPage);
  }
}
