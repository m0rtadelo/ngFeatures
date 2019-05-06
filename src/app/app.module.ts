import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { PingModule } from './ping/ping.module';
import { PingComponent } from './ping/ping/ping.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
