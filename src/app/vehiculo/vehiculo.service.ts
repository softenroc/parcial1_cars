import { Vehiculo } from './vehiculo';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private vehiculosUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<Vehiculo[]> {
    console.log('consumit getVehiculos: ', this.vehiculosUrl);
    return this.http.get<Vehiculo[]>(this.vehiculosUrl);
  }
}
