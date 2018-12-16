import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeatureStoreModule } from './user-feature-store/user-feature-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserFeatureStoreModule
  ]
})
export class RootStoreModule { }
