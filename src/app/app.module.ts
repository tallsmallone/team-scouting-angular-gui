import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllPlayersComponent } from './view-all-players/view-all-players.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [AppComponent, ViewAllPlayersComponent],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
