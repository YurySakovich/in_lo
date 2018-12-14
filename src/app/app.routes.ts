import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*guards*/
import { LoginGuard } from '@core/guards/login.guard';
import { AuthGuard } from '@core/guards/auth.guard';

/**
 * Routes
 */
export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard]
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
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
