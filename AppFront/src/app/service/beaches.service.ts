import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeachesService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:9000/api/beaches'

 getAll(){
  return firstValueFrom(
    this.httpClient.get<any[]>(this.baseUrl));

 }
   
 // constructor() { }
}
