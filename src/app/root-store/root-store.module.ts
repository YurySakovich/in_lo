import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthFeatureStoreModule } from './auth-feature-store/';
// import { MyOtherFeatureStoreModule } from './user-other-feature-store/';

@NgModule({
  imports: [
    CommonModule,
    AuthFeatureStoreModule,
    // MyOtherFeatureStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule {}