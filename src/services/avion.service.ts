import { Avion } from "../models/avion.model";

export class AvionService{

    private aviones: Avion [] =
    [{"id":"4321CBD","destino":"Londres", "origen":"Madrid", "fechaida":"28/03/2019", "fechavuelta":"30/03/2019", "horaida":"10:34", "horavuelta":"20:50", "precio":100.34, "facturar":"Falso"},
    {"id":"1234ABC","destino":"Londres", "origen":"Madrid", "fechaida":"28/03/2019", "fechavuelta":"30/03/2019", "horaida":"10:34", "horavuelta":"20:50", "precio":100.34, "facturar":"Falso"}];

    private vuelos: Avion[] =
    [{"id":"0000AAA","destino":"Londres", "origen":"Madrid", "fechaida":"28/03/2019", "fechavuelta":"30/03/2019", "horaida":"10:34", "horavuelta":"20:50", "precio":100.34, "facturar":"Facturar"},
    {"id":"0000BBB","destino":"Madrid", "origen":"Londres", "fechaida":"28/03/2019", "fechavuelta":"30/03/2019", "horaida":"20:50", "horavuelta":"10:50", "precio":100.34, "facturar":"Tarjeta de Embarque"}];

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

    getFacturar(value: Avion){
        if(value.horaida == "20.00"){
            return "Facturar";
        }
        else{
            return "Tarjeta de Embarque";
        }
        
    }

}