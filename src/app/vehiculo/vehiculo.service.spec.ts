import { Vehiculo } from './vehiculo';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VehiculoService } from './vehiculo.service';
import { faker } from '@faker-js/faker';

let httpTestingController: HttpTestingController;
let service: VehiculoService;
var vehiculos: Array<Vehiculo> = [];
const baseUrl ='https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json'

describe('Service: Vehiculo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculoService]
    });

    vehiculos = [];

    for (let i = 0; i < 10; i++) {
      vehiculos.push(
        new Vehiculo(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number()
        )
      );
    }


    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(VehiculoService);

  });

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));


  it('if consume getVehiculos returned Observable should match the right data', () => {
    service.getVehiculos().subscribe((vehiculos) => {
      expect(vehiculos.length).toEqual(10);
    });

    const req = httpTestingController.expectOne(baseUrl);

    expect(req.request.method).toEqual('GET');
    req.flush(vehiculos);

  });

afterEach(() => {
  httpTestingController.verify();
});

});
