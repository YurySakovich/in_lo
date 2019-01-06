import {NgModule} from '@angular/core';

/* Modules */
import {SharedModule} from '@shared/shared.module';
import {DashboardRoutingModule} from './dashboard.routes';

/* Components */
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {CompensationPageComponent} from './compensation-page/compensation-page.component';
import {PayCardComponent} from './dashboard-sub-pages/pay-card/pay-card.component';
import {SubPagesWrapperComponent} from './dashboard-sub-pages/sub-pages-wrapper/sub-pages-wrapper.component';
import {PayeePackageComponent} from './compensation-page/payee-package/payee-package.component';

const modules: any[] = [SharedModule, DashboardRoutingModule];

/* Components */
const components: any[] = [
  DashboardPageComponent,
  CompensationPageComponent,
  DashboardComponent,
  PayCardComponent,
  SubPagesWrapperComponent,
  PayeePackageComponent,
];

/* Directives */
const directives: any[] = [];

/* Pipes */
const pipes: any[] = [];

@NgModule({
  imports: [...modules],
  declarations: [...components, ...directives, ...pipes],
  providers: [],
  exports: [...modules, ...components, ...directives, ...pipes],
  entryComponents: [...components],
})
export class DashboardModule {}
