import { createAction, props } from '@ngrx/store';
import { Counter } from './counter.service';

export const getCountersLoad = createAction(
    '[Counters API] Counters Load',
    props<{
        loadingStatus: string;
    }>()
);
export const getCountersSuccess = createAction(
    '[Counters API] Counters Loaded Success',
    props<{
        loadingStatus: string;
        payload: Counter[];
    }>()
);