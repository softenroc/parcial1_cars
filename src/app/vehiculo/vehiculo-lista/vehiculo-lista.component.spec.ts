import { Vehiculo } from './../vehiculo';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiculoListaComponent } from './vehiculo-lista.component';
import { RouterTestingModule } from '@angular/router/testing';
import { faker } from '@faker-js/faker';

describe('VehiculoListaComponent', () => {
  let component: VehiculoListaComponent;
  let fixture: ComponentFixture<VehiculoListaComponent>;
  var vehiculos: Array<Vehiculo> = [];
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [VehiculoListaComponent],
    }).compileComponents();

    vehiculos = [];

    for (let i = 0; i < 3; i++) {
      vehiculos.push(
        new Vehiculo(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number()
        )
      );
    }

    fixture = TestBed.createComponent(VehiculoListaComponent);
    component = fixture.componentInstance;
    component.vehiculos = vehiculos;
    fixture.detectChanges();
    debug = fixture.debugElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if getVehiculos returned 3 vehicles, then create a table with head and 3 rows ', () => {
    expect(component.vehiculos.length).toEqual(3);

    let filasTabla = fixture.nativeElement.querySelectorAll('tr');

    // Validar la cantidad de filas de la tabla (encabezado + 3 filas de datos)

    expect(filasTabla.length).toBe(4);

    // Validar el encabezado de la tabla

    let filaEncabezado = filasTabla[0];
    expect(filaEncabezado.cells[0].innerHTML).toBe('#');
    expect(filaEncabezado.cells[1].innerHTML).toBe('Marca');
    expect(filaEncabezado.cells[2].innerHTML).toBe('Linea');
    expect(filaEncabezado.cells[3].innerHTML).toBe('Modelo');

    // Validar cada uno de los datos de las filas

    for (let index = 0; index < vehiculos.length; index++) {
      let filaIndex = filasTabla[index + 1];
      expect(filaIndex.cells[0].innerHTML).toContain(vehiculos[index].id);
      expect(filaIndex.cells[1].innerHTML).toContain(vehiculos[index].marca);
      expect(filaIndex.cells[2].innerHTML).toContain(vehiculos[index].linea);
      expect(filaIndex.cells[3].innerHTML).toContain(vehiculos[index].modelo);
    }
  });
});
