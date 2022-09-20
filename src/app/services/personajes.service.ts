import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  url: string;

  constructor(private HttpClient: HttpClient) {
    this.url = 'https://rickandmortyapi.com/api/character'
  }
  
  getAll(pPage = 1): Promise<any> {
    return this.HttpClient.get<any>(`${this.url}?page=${pPage}`).toPromise()
  }


}
