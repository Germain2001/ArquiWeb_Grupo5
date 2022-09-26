import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PoliceStation } from '../model/policestation';
@Injectable({
  providedIn: 'root'
})
export class PolicestationService {
  url: string = "http://localhost:5000/comisarias";
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<PoliceStation[]>(this.url);
  }
}

