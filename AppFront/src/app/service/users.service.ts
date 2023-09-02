import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:9000/api/users'

 getAll(){
  return firstValueFrom(
    this.httpClient.get<any[]>(this.baseUrl));

 }
  //constructor() { }
}
