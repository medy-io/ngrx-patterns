import { Component, inject,  } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { getCountersLoad } from './counter.actions';
import { selectFeatureCount } from './counter.selector';

@Component({
  selector: 'app-my-counter',
  imports: [CommonModule],
  providers: [Store],
  standalone: true,
  templateUrl: './counter.component.html',
})
export class MyCounterComponent {
  store: Store<any> = inject(Store);
  count$!: Observable<any>;
  countList!: any[];

  constructor() {
    this.store.select(selectFeatureCount).subscribe((c) => {
      if (c && c.counterList && c.counterList.length > 0) {
        this.countList = c.counterList;
      }
    });
    this.store.dispatch(getCountersLoad({ loadingStatus: 'LOADING' }));
  }

  // constructor(private store: Store<{ count: number }>) {
  //   this.count$ = store.select('count');
  // }

  // increment() {
  //   this.store.dispatch(increment());
  // }

  // decrement() {
  //   this.store.dispatch(decrement());
  // }

  // reset() {
  //   this.store.dispatch(reset());
  // }
}
