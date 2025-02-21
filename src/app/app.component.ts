import { Component } from '@angular/core';
import { MyCounterComponent } from './counter/counter.component';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyCounterComponent],
  providers: [Store],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-best-practices';
}
