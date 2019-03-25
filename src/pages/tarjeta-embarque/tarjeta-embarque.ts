import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarjeta } from "../../models/tarjeta.model";
import { TarjetaService } from '../../services/tarjeta.service';


/**
 * Generated class for the TarjetaEmbarquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarjeta-embarque',
  templateUrl: 'tarjeta-embarque.html',
})
export class TarjetaEmbarquePage {

  tarjetas: Tarjeta[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private TarjetaService: TarjetaService) {
  }


  getAllCards(){
    this.tarjetas = this.TarjetaService.getTarjetas();
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetaEmbarquePage');
  }

  ionViewWillEnter(){
    this.tarjetas = this.TarjetaService.getTarjetas();
  }

  

}
