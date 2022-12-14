import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { PoliceStation } from '../model/policestation';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicestationService {
  url: string = "http://localhost:5000/comisarias";
  private listaCambio = new Subject<PoliceStation[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  NPolicestation: any;
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<PoliceStation[]>(this.url);
  }
  insertar(policestation:PoliceStation){
    return this.http.post(this.url,policestation)
  }

  setLista(listaNueva:PoliceStation[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }

  modificar(policestation: PoliceStation) {
    return this.http.put(this.url + "/" + policestation.id, policestation);
  }
  listarId(id: number) {

    return this.http.get<PoliceStation>(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      let token = sessionStorage.getItem("token");
      return this.http.post<PoliceStation[]>(`${this.url}/buscar`, texto.toLowerCase(), {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });

    }
    return EMPTY;
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  eliminar(id: number) {
    return this.http.delete(this.url+"/"+id);
  }
}

