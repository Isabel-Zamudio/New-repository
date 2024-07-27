import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviromen';

@Injectable({
  providedIn: 'root'
})
export class ObtenerMenuService {


  baseUrl = environment.baseUrl

  constructor( private http: HttpClient  ) { }

  getMenu(){
    return this.http.get<any>(`${this.baseUrl}/menu`)
  }

  guardarSeleccion(seleccion: any) {
    return this.http.post<any>(`${this.baseUrl}/pedidos`, seleccion);
  }
}
