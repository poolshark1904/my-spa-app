import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeatherComponent } from '../current-weather/current-weather.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrentWeatherComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weatherData: any;
  defaultLocation: string = 'Lisbon';  // Default location

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.fetchWeather(this.defaultLocation);
  }

  fetchWeather(location: string) {
    this.weatherService.getTodaysWeather(location)
    .subscribe({
      next: (data) => { this.weatherData = data; },
      error: (error) => { console.error('Failed to fetch weather data:', error); }
    });
  
  }
}
