import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:5000/usuarios"
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<User[]>(this.url);
  }
}
