import { Component, OnInit } from '@angular/core';

import {WeatherPanelService} from './weatherpanel.service';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weatherpanel.component.html',
  styleUrls: ['./weatherpanel.component.scss'],
  providers: [WeatherPanelService]
})

export class WeatherPanelComponent implements OnInit {
  cityName = 'London';
  weatherData: any = {
    main: {
    "temp": 290.57,
    "feels_like": 285.87,
    "temp_min": 289.82,
    "temp_max": 291.15,
    "pressure": 1008,
    "humidity": 77
  },
    weather: {}
  };

  constructor(
    private weatherPanelService: WeatherPanelService) {

    }
  ngOnInit() {

  }

  onCityNameChange() {
    if(this.cityName) {
      this.weatherPanelService.getWeatherByCityName(this.cityName).then((response: any) => {
        this.weatherData = response || {};
      });
    }
  }

}