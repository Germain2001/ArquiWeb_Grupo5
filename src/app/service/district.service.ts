import { District } from './../model/district';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  url: string = "http://localhost:5000/distritos";
  private listaCambio = new Subject<District[]>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<District[]>(this.url);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
