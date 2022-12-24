import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import OpenWeatherMap from 'openweathermap-ts';
import { WeatherData } from '../modules/weather.model';
import { WeatherService } from '../services/weather.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {


  constructor(private weatherService: WeatherService) {
      
   }

  
  cityName: string = "Dallas";
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.cityName = "";
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = "";

  }

  
  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  }


}
