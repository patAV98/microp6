import { Tarjeta } from "../models/tarjeta.model";

export class TarjetaService{

    private tarjeta: Tarjeta [] = [];

    constructor(){

    }

    getTarjetas(){
        return this.tarjeta;
    }

    getTarjetaId(value: string){
        this.tarjeta[0];
      }

    addTarjeta(value: {nombre:string,apellidos:string,movil:string,dni:string}){
        let newTarjeta: Tarjeta = {"id":"0022020", "nombre":value.nombre, "apellidos":value.apellidos, "asiento":"4B", "grupo":"4", "hora":"18:13", "puerta":"H34"};
        this.tarjeta.push(newTarjeta);
    }


}