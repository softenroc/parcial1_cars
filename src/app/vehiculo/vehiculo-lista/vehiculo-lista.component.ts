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

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getCourseList();
  }

  getCourseList(): void {
   this.vehiculoService.getVehiculos().subscribe( vehiculos => {
    this.vehiculos = vehiculos;
   },   err => {
    this.vehiculos = [];
    console.log("Error al consultar o no existen ")
  });
  }

}
