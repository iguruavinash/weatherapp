import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherPanelService } from './weatherpanel.service';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weatherpanel.component.html',
  styleUrls: ['./weatherpanel.component.scss'],
  providers: [WeatherPanelService],
})
export class WeatherPanelComponent implements OnInit, OnDestroy {
  cityName = '';
  weatherData: any = {
    main: {
      temp: 0,
    },
    weather: {},
    isCityEditable: false,
  };
  private intervalID: NodeJS.Timeout;

  constructor(private weatherPanelService: WeatherPanelService) {}
  ngOnInit() {}

  onCityNameChange() {
    if (this.cityName) {
      this.weatherData.errorMsg = '';
      this.weatherPanelService.getWeatherByCityName(this.cityName).then(
        (response: any) => {
          this.weatherData = {
            main: response.main,
            weather: response.weather[0]
              ? response.weather[0]
              : { },
          };

          // add interval to refresh data
          this.refreshData();
        },
        (reason) => {
          this.weatherData.errorMsg = 'Error:' + reason.error.message;
        }
      );
    }
  }

  editCityName() {
    this.weatherData.isCityEditable = true;
  }

  onKeyUp(event) {
    this.weatherData.errorMsg = '';
    // to capture 'Enter'
    if (event.keyCode === 13) {
      // Cancel the default action
      event.preventDefault();
      // invoke city name change
      this.onCityNameChange();
    }
  }

  private refreshData() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }

    // invokes for ever 30 seconds
    this.intervalID = setInterval(() => {
      this.onCityNameChange();
    }, 30000);
  }

  ngOnDestroy() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }
}
