import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import {APP_CONFIG} from '../../config';
import {environment} from '../../../environments/environment';

@Injectable()
export class WeatherPanelService {

  constructor(private httpClient: HttpClient) {
  }

  getWeatherByCityName(cityName: string) {
    const url = environment.host + cityName + '&appid=' + APP_CONFIG.API_KEY;
    return this.httpClient.get(url).toPromise();
  }

}
