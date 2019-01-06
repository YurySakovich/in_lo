import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule,
  MatTreeModule,
  MatTableModule,
} from '@angular/material';

const materialModules: Array<any> = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule,
  MatTreeModule,
  MatTableModule,
];

@NgModule({
  imports: [CommonModule, ...materialModules],
  declarations: [],
  exports: [...materialModules],
})
export class MaterialImportsModule {}
