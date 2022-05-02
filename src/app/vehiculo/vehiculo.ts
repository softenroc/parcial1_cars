export class Vehiculo {
  id: number;
  marca: string;
  linea: string;
  modelo: number;

  constructor(id: number, marca: string, linea: string, modelo: number) {
    this.id = id;
    this.marca = marca;
    this.linea = linea;
    this.modelo = modelo;
  }
}
