import { Tarjeta } from "../models/tarjeta.model";

export class TarjetaService{

    private tarjeta: Tarjeta [] =
    [{"id":"4321CBD","nombre":"Juan", "asiento":"2B", "grupo":"3", "hora":"17:35", "puerta":"H47"}];

    constructor(){

    }

    getTarjetas(){
        return this.tarjeta;
    }


}