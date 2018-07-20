import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EachHotelComponent } from './each-hotel/each-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    EachHotelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
