import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { delay } from 'rxjs';

export interface Counter {
  count: number
  type: string;
  name: string;
  counterId: string;
}

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counters: Counter[] = [];

  constructor() {
    this.counters = [
      {
        count: 300,
        name: 'HIIT Intervals',
        type: 'HIIT',
        counterId: window.crypto.randomUUID()
      },
      {
        count: 200,
        name: 'Sprint Timer',
        type: 'Sprint',
        counterId: window.crypto.randomUUID()
      },
      {
        count: 30,
        name: 'All the Pull Ups',
        type: 'Back',
        counterId: window.crypto.randomUUID()
      },
      {
        count: 10,
        name: 'Jump Rope Intervals',
        type: 'HIIT',
        counterId: window.crypto.randomUUID()
      },
      {
        count: 25000,
        name: 'Long Run',
        type: 'Cardio',
        counterId: window.crypto.randomUUID()
      }
    ]
  }



  getAllCounters() {
    console.log('BEFORE: getAllCounters');
    return of(this.counters).pipe(
      delay(3000),
      switchMap((res: Counter[]) => {
        console.log('AFTER: getAllCounters');
        return of(res)
      })
    )
  }

  postCounter(): Observable<any>  {
    return of();
  }

  putCounter(): Observable<any> {
    return of();
  }

  deleteCounter(): Observable<any> {
    return of();
  }
}
