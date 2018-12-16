import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthFeatureStoreEffects } from './effects';
import { AuthFeatureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('authFeature', AuthFeatureReducer),
    EffectsModule.forFeature([AuthFeatureStoreEffects])
  ],
  providers: [AuthFeatureStoreEffects]
})
export class AuthFeatureStoreModule {}