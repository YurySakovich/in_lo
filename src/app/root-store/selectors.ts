import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
    AuthFeatureStoreSelectors
} from './auth-feature-store';

// import {
//   MyOtherFeatureStoreSelectors
// } from './my-other-feature-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    AuthFeatureStoreSelectors.selectAuthFeatureError,
    (authFeature: string) => {
        return authFeature;
    }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
    AuthFeatureStoreSelectors.selectAuthFeatureIsLoading,
    (authFeature: boolean) => {
        return authFeature;
    }
);

// export const selectError: MemoizedSelector<object, string> = createSelector(
//   MyFeatureStoreSelectors.selectMyFeatureError,
//   MyOtherFeatureStoreSelectors.selectMyOtherFeatureError,
//   (myFeatureError: string, myOtherFeatureError: string) => {
//     return myFeature || myOtherFeature;
//   }
// );

// export const selectIsLoading: MemoizedSelector<
//   object,
//   boolean
// > = createSelector(
//   MyFeatureStoreSelectors.selectMyFeatureIsLoading,
//   MyOtherFeatureStoreSelectors.selectMyOtherFeatureIsLoading,
//   (myFeature: boolean, myOtherFeature: boolean) => {
//     return myFeature || myOtherFeature;
//   }
// );