import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Client } from '../../models/Client';
import {Hotel} from '../../models/Hotel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsUrl = 'http://localhost:8080/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.clientsUrl}/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl, JSON.stringify(client), httpOptions);
  }

  deleteClient(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.clientsUrl}/${id}`, httpOptions);
  }
}
