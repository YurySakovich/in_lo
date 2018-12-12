import { NgModule } from '@angular/core';

/**
 * Modules
 */
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth.routes';

/**
 * Components
 */
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const components = [
  AuthComponent,
  LoginComponent
];

const modules = [
  SharedModule,
  AuthRoutingModule,
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components,
  ]
})

export class AuthModule {
}
