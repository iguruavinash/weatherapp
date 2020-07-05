import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import {APP_CONFIG} from '../../config';

@Injectable()
export class WeatherPanelService {

  constructor(private httpClient: HttpClient) {
  }

  getWeatherByCityName(cityName: string) {
    const url = 'api.openweathermap.org/data/2.5/weather?units=metric&q=' + cityName + '&appid=' + APP_CONFIG.API_KEY;
    return this.httpClient.get(url).toPromise();
  }

}
