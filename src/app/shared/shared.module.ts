/* Modules */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SvgModule } from '@shared/svg/svg.module';
import { MaterialImportsModule } from '@shared/material-imports.module';

import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { DonutChartComponent } from './components/charts/donut-chart/donut-chart.component';
import { GroupBarChartComponent } from './components/charts/group-bar-chart/group-bar-chart.component';

const modules: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialImportsModule,
  SvgModule
];

/* Components */
const components: any[] = [
  HeaderComponent,
  NavMenuComponent,
  GroupBarChartComponent,
  DonutChartComponent
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

export class SharedModule {
}
