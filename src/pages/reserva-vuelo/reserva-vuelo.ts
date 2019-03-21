import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Avion } from '../../models/avion.model';
import { AvionService } from '../../services/avion.service';

/**
 * Generated class for the ReservaVueloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva-vuelo',
  templateUrl: 'reserva-vuelo.html',
})
export class ReservaVueloPage {

  aviones: Avion[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private AvionService: AvionService){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservaVueloPage');
  }

  getAllPlanes(){
    this.aviones = this.AvionService.getAviones();
  } 
  
  onAddVuelo(value: Avion){
     this.AvionService.addVuelo(value);
     }
    
}
