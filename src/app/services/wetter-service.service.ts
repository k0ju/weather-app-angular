import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WetterServiceService {
  // Weather Forecast API: https://open-meteo.com/en/docs
  url: string = 'https://api.open-meteo.com/v1/forecast?'
  params: string = '&current=temperature_2m,is_day,weather_code&timezone=Europe%2FBerlin&forecast_days=1'

  constructor(private httpClient: HttpClient) { }

  getWetter(lat: string, long: string): Observable<any> {
    return this.httpClient.get(this.url + '&latitude=' + lat + '&longitude=' + long + this.params);
  }

  parseMeteoData(data: any) {
    let wetterCode = data.current.weather_code;
    let temperatur = data.current.temperature_2m;
    let tag = data.current.is_day;

    let wetterDaten = { wetterCode, temperatur, tag };

    return wetterDaten;
  }
}