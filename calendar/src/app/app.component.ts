import { Component, OnInit } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';
import { WeatherData } from 'src/app/modules/weather.model';
import { WeatherService } from 'src/app/services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'calendar';

  
}
