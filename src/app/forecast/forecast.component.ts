import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecast: any;
  defaultLocation: string = 'New York';  // Default location

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.fetchForecast(this.defaultLocation);
  }

  fetchForecast(location: string) {
    this.weatherService.getForecast(location, 3)
    .subscribe({
      next: (data) => { this.forecast = data; },
      error: (error) => { console.error('Failed to fetch forecast data:', error); }
    });
  
  }
}
