import { NgModule } from '@angular/core';

/* Modules */
import { SharedModule } from '@shared/shared.module';

/* Components */
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routes';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CompensationPageComponent } from './compensation-page/compensation-page.component';

const modules: any[] = [
  SharedModule,
  DashboardRoutingModule
];

/* Components */
const components: any[] = [
  DashboardPageComponent,
  CompensationPageComponent,
  DashboardComponent
];

/* Directives */
const directives: any[] = [
];

/* Pipes */
const pipes: any[] = [
];


@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components,
    ...directives,
    ...pipes,
  ],
  providers: [
  ],
  exports: [
    ...modules,
    ...components,
    ...directives,
    ...pipes
  ],
  entryComponents: [
    ...components
  ]
})

export class DashboardModule {
}
