import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

/**Services */
import {AuthService} from '@core/services/auth.service';
import {LocalStorageService} from '@core/services/local-storage.service';

/*guards*/
import { LoginGuard } from '@core/guards/login.guard';
import { AuthGuard } from '@core/guards/auth.guard';

/*interceptors*/
import {AuthInterceptor} from '@core/interceptors/auth-interceptor';

const guards = [
  AuthGuard,
  LoginGuard
];

const services: any[] = [
  AuthService,
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
    ...services,
    ...guards,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ]
})
export class CoreModule {
}
