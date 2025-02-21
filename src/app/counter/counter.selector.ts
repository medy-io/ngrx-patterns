import { createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

export interface AppState {
  feature: CounterState;
}

export const selectFeature = (state: AppState) => state.feature;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: any) => {
    if (state && state.counterList && state.counterList.length > 0) {
      return state.counterList;
    }
  }
);