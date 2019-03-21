import { Avion } from "../models/avion.model";

export class AvionService{

    private aviones: Avion [] =
    [{"id":"4321CBD","destino":"Londres", "origen":"Madrid", "fechaida":"28/03/2019", "fechavuelta":"30/03/2019", "horaida":"10:34", "horavuelta":"20:50", "precio":100.34},
    {"id":"1234ABC","destino":"Londres", "origen":"Madrid", "fechaida":"28/03/2019", "fechavuelta":"30/03/2019", "horaida":"10:34", "horavuelta":"20:50", "precio":100.34}];

    private vuelos: Avion[] =
    [{"id":"0000AAA","destino":"Paris", "origen":"Madrid", "fechaida":"28/03/2019", "fechavuelta":"30/03/2019", "horaida":"10:34", "horavuelta":"20:50", "precio":100.34}];

    constructor(){

    }

    getAviones(){
        return this.aviones;
    }

    addVuelo(value: Avion){
        this.vuelos.push(value);
    }

    getVuelos(){
        return this.vuelos;
    }

}