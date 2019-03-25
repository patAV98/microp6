import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarjetaService } from '../../services/tarjeta.service';
import { TarjetaEmbarquePage } from '../tarjeta-embarque/tarjeta-embarque';

/**
 * Generated class for the FacturarVueloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facturar-vuelo',
  templateUrl: 'facturar-vuelo.html',
})
export class FacturarVueloPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private TarjetaService: TarjetaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturarVueloPage');
  }

  onAddTarjeta(value:
    {nombre:string,apellidos:string,movil:string,dni:string}){
      this.TarjetaService.addTarjeta(value);
      this.navCtrl.push(TarjetaEmbarquePage);
  }

}
