import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Componente } from '../app/interfaces/interfaces-menu';
@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http: HttpClient) {
    console.log('hola');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
