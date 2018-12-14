import { NgModule } from '@angular/core';

/* Modules */
import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routes';

const modules: any[] = [
  SharedModule,
  DashboardRoutingModule
];

/* Components */
const components: any[] = [
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
