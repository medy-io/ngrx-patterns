import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { CounterService } from './counter.service';
import { getCountersSuccess } from './counter.actions';

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);
  private counterService = inject(CounterService);

  loadCounters$ = createEffect(() => {
    return this.actions$.pipe(
        ofType('[Counters API] Counters Load'),
        exhaustMap(() => this.counterService.getAllCounters()
          .pipe(
            map((counters) => {
                return getCountersSuccess({
                  loadingStatus: 'LOADED',
                  payload: counters
                })
            }),
            catchError(() => EMPTY)
          ))
    );
  });
}