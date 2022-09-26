import { Complaint } from './../model/complaint';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  url: string = "http://localhost:5000/denuncias"
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Complaint[]>(this.url);
  }
}