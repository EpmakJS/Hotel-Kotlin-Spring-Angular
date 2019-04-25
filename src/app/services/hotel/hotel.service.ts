import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hotel } from '../../models/Hotel';
import {Client} from '../../models/Client';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotelsUrl = 'http://localhost:8080/hotels';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl);
  }

  getHotel(name: string): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.hotelsUrl}/${name}`);
  }

  createHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.hotelsUrl, hotel, httpOptions);
  }

  updateHotel(name: string, hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.hotelsUrl}/${name}/update`, JSON.stringify(hotel), httpOptions);
  }

  checkinClient(name: string, client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.hotelsUrl}/${name}/checkin`, JSON.stringify(client), httpOptions);
  }

  checkoutClient(name: string, client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.hotelsUrl}/${name}/checkout`, JSON.stringify(client), httpOptions);
  }

  deleteHotel(name: string): Observable<Hotel> {
    return this.http.delete<Hotel>(`${this.hotelsUrl}/${name}`, httpOptions);
  }
}
