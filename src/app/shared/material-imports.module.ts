import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule, MatTabsModule, MatTreeModule
} from '@angular/material';

const materialModules: Array<any> = [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatTreeModule
]

@NgModule({
  imports: [
    CommonModule,
    ...materialModules
  ],
  declarations: [
  ],
  exports: [
    ...materialModules
  ]
})

export class MaterialImportsModule {
}
