import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GeoCodingService {
  url: string = 'https://geocoding-api.open-meteo.com/v1/search?name='
  params: string = '&count=5&language=de&format=json'

  constructor(private httpClient: HttpClient) { }

  getSuchergebnis(stadt: string): Observable<any> {
    return this.httpClient.get(this.url + stadt + this.params);
  }
}