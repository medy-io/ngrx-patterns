import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap, withLatestFrom, concatMap, filter } from 'rxjs/operators';
import { CounterService } from './counter.service';
import { getCountersLoad, getCountersSuccess } from './counter.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);
  private store$ = inject(Store);
  private counterService = inject(CounterService);

  loadCounters$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(getCountersLoad),
        exhaustMap(() => this.counterService.getAllCounters()
          .pipe(
            concatMap((counters: any) => {
              of(action).pipe(
                withLatestFrom(this.store$.select(fromCustomer.selectLoadStatus))
              )
                return getCountersSuccess({
                  loadingStatus: 'LOADED',
                  payload: counters
                })
            }),
            filter(([action, loadStatus]) => loadStatus === 'NOT_LOADED'),
            map(() => CustomerActions.load())
            catchError(() => EMPTY)
          ))
    );
  });
  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.load),
      switchMap(() => this.http.get<Customer[]>(this.baseUrl)),
      map((customers) => CustomerActions.loaded({ customers }))
    )
  );
}