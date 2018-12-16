import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootStoreModule } from './root-store';

const modules: any[] = [
  SharedModule,
  CoreModule,
  RootStoreModule
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
