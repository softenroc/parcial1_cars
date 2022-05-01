import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './vehiculo.component';
import { VehiculoListaComponent } from './vehiculo-lista/vehiculo-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [VehiculoListaComponent],
  declarations: [VehiculoComponent, VehiculoListaComponent]
})
export class VehiculoModule { }
