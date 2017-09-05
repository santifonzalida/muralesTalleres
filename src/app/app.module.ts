import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NguiMapModule} from '@ngui/map';

import { HomeComponent } from './components/home/home.component';
import { MapComponent } from "./components/map/map.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBJdDRRTbXVgAdJfDIwRuLVlFrntMfBfDY' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
