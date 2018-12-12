import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';


const services: any[] = [

];

const modules: any[] = [
  SharedModule,
  HttpClientModule,
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [],
  exports: [],
  providers: [
    ...services
  ]
})
export class CoreModule {
}
