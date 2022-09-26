import { Province } from './../model/province';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  url: string = "http://localhost:5000/provincias";
  private listaCambio = new Subject<Province[]>()
  constructor(private http: HttpClient) {}

  listar(){
    return this.http.get<Province[]>(this.url);
  }
  insertar(department:Province){
    return this.http.post(this.url,department)
  }

  setLista(listaNueva:Province[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
}
