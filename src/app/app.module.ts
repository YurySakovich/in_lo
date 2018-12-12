import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules: any[] = [
  SharedModule,
  CoreModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
