import { createReducer, on } from '@ngrx/store';
import { getCountersLoad, getCountersSuccess } from './counter.actions';
import { Counter } from './counter.service';

export type LoadingStatus = 'NOT_LOADED' | 'LOADING' | 'LOADED';
export interface CounterState {
  counterList: Counter[],
  loadingStatus: LoadingStatus,
}


export const initialState: CounterState = {
  counterList: [],
  loadingStatus: 'NOT_LOADED',
};

export const counterReducer = createReducer(
  initialState,
  on(
    getCountersLoad,
    (state: any) => ({
        ...state,
        loadingStatus: 'LOADING'
    })
  ),
  on(
    getCountersSuccess,
    (state: any, {payload}) => ({
        ...state,
        loadingStatus: 'LOADED',
        counterList: payload,
      })
  ),
  // on(increment, (state) => state + 1),
  // on(decrement, (state) => state - 1),
  // on(reset, (state) => 0)
);