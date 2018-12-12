/* Modules */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const modules: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

/* Components */
const components: any[] = [
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
    ...pipes
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
