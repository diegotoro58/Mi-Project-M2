import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:9000/api/reservas';


  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl, this.
        createHeaders())
    );

  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem
          ('token_reservas')!
      })
    }
  }

  reservar(formValue:any){
    return firstValueFrom(this.httpClient.post<any>(`${this.baseUrl}`, formValue))
  }
}


// constructor() { }


