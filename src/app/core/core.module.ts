import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {ExtendedHttpService} from '@core/services/http.service';
import {AuthService} from '@core/services/auth.service';
import {LocalStorageService} from '@core/services/local-storage.service';


const services: any[] = [
  AuthService,
  ExtendedHttpService,
  LocalStorageService
];

const modules: any[] = [
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
