import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {WeatherData} from '../../models/weather.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cityName = 'Toulouse';
  weatherData!: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        }
      });
  }

}
