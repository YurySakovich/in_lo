import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

/**Services */
import {AuthService} from '@core/services/auth.service';
import {LocalStorageService} from '@core/services/local-storage.service';
import {UserService} from '@core/services/user.service';
import {ApiService} from '@core/services/api.service';
import {DashboardService} from '@core/services/dashboard.service';

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
  LocalStorageService,
  UserService,
  ApiService,
  DashboardService
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
