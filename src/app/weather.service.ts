import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'https://api.weatherapi.com/v1';
  private apiKey = environment.weatherApiKey; 

  constructor(private http: HttpClient) { }

  getTodaysWeather(location: string) {
    return this.http.get(`${this.baseUrl}/current.json?key=${this.apiKey}&q=${location}`);
  }

  getForecast(location: string, days: number) {
    return this.http.get(`${this.baseUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=${days}`);
  }
}
