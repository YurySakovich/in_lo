import { AuthFeatureStoreState } from './auth-feature-store';
// import { MyOtherFeatureStoreState } from './my-other-feature-store';

export interface State {
  authFeature: AuthFeatureStoreState.State;
  // myOtherFeature: MyOtherFeatureStoreState.State;
}