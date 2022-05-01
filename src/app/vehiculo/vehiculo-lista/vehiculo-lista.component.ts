import { Vehiculo } from './../vehiculo';
import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
@Component({
  selector: 'app-vehiculo-lista',
  templateUrl: './vehiculo-lista.component.html',
  styleUrls: ['./vehiculo-lista.component.css']
})
export class VehiculoListaComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  marcas : Array<string> = ["Renault", "Chevrolet", "Nissan"];
  cantidad : Array<number> = [0,0,0];

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getCourseList();
  }

  getCourseList(): void {
   this.vehiculoService.getVehiculos().subscribe( vehiculos => {
    this.vehiculos = vehiculos;
    console.log ("Vehiculos: ", this.vehiculos);
    this.contarVehiculosPorMarca();
   },   err => {
    this.vehiculos = [];
    console.log("Error al consultar o no existen ")
  });
  }

  contarVehiculosPorMarca(): void {
    for (let index = 0; index < this.marcas.length; index++) {
      this.cantidad[index]= this.vehiculos.filter(vehiculo => vehiculo.marca == this.marcas[index] ).length;
      console.log("Cantidad y Marca: ", this.cantidad[index], this.marcas[index]);
    }
  }

}
