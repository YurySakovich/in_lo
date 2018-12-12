import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Routes
 */
export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
