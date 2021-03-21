import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { BetterRippleModule } from 'better-ripple';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatRippleModule,
    BetterRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
