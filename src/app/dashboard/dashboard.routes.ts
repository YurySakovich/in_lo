import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Components*/
import { DashboardComponent } from './dashboard/dashboard.component';

export const dashboardRoutes = [
  {
    path: '',
    component: DashboardComponent
  }
  // ...payeeRoutes,
  // ...transactionRoutes,
  // ...referenceRoutes,
  // ...territoryRoutes,
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
