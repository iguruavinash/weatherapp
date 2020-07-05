import { Component, OnInit } from '@angular/core';

import WeatherPanelService from './weatherpanel.service';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weatherpanel.component.html',
  styleUrls: ['./weatherpanel.component.scss'],
  providers: [WeatherPanelService]
})

export class WeatherPanelComponent implements OnInit {
  cityName = '';
  weatherData = {};

  constructor(
    private weatherPanelService: WeatherPanelService) {

    }
  ngOnInit() {

  }

  onCityNameChange() {
    if(this.cityName) {
      this.weatherPanelService.getWeatherByCityName(this.cityName).then((response: any) => {
        this.weatherData = response;
      });
    }
  }

}