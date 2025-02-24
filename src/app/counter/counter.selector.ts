import { createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

// export interface FeatureState {
//   counterState: CounterState
// }

// export interface AppState {
//   feature: FeatureState;
// }

export const selectFeature = (state: any) => state;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: any) => {
    if (state && state.counter && state.counter.counterList.length > 0) {
      return state.counter.counterList;
    }
    return state.counter.counterList;
  }
);