import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {WeatherData} from '../../models/weather.model';
import {FormsModule} from '@angular/forms';

// function Geo(position: any): any {
//    let latUser = position.coords.latitude;
//    let longUser = position.coords.longitude;
// }
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {


  constructor(private weatherService: WeatherService) { }



  cityName = 'Toulouse';
  weatherData!: WeatherData;
  Geo(position: any): any {
    let latUser = position.coords.latitude;
    let longUser = position.coords.longitude;
    localStorage.setItem('latUser', latUser);
    localStorage.setItem('longUser', longUser);
  }
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
          navigator.geolocation.getCurrentPosition(this.Geo);
          const test = this.weatherData.coord.lat =  localStorage.getItem('latUser');
          this.weatherData.coord.lon = localStorage.getItem('longUser');
          console.log(test);
        }
      });
  }

}
