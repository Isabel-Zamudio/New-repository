import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviromen';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  obtenerCafe(){
 
    return this.http.get(`${this.baseUrl}/api/cafe`)

  }

  getCafeById( id: any ) {
    return this.http.get(`${this.baseUrl}/api/cafe/${ id }`)
  }

  enviarPedidoCafe(pedido:any){
    return this.http.post<any>(`${this.baseUrl}/api/pedidocafe/`,pedido)

  }

}
