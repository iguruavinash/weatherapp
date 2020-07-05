import { Component, OnInit } from '@angular/core';

import { WeatherPanelService } from './weatherpanel.service';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weatherpanel.component.html',
  styleUrls: ['./weatherpanel.component.scss'],
  providers: [WeatherPanelService],
})
export class WeatherPanelComponent implements OnInit {
  cityName = '';
  weatherData: any = {
    main: {
      temp: 0,
    },
    weather: {  },
    isCityEditable: false,
  };

  constructor(private weatherPanelService: WeatherPanelService) {}
  ngOnInit() {}

  onCityNameChange() {
    if (this.cityName) {
      this.weatherPanelService
        .getWeatherByCityName(this.cityName)
        .then((response: any) => {
          this.weatherData = {
            main: response.main,
            weather: response.weather[0]
              ? response.weather[0]
              : { id: 800, description: 'clear sky' },
          };
        });
    }
  }

  editCityName() {
    this.weatherData.isCityEditable = true;
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      console.log(event, this.cityName);
      // alert('Hi');
      this.onCityNameChange();
    }
  }
}
