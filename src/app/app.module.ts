import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherPanelComponent } from './weatherpanel/weatherpanel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WeatherPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
