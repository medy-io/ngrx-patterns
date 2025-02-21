import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore, StoreModule } from '@ngrx/store';
import { routes } from './app.routes';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { counterReducer } from './counter/counter.reducer';
import { CounterEffects } from './counter/counter.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot({
        counter: counterReducer
      }),
      EffectsModule.forRoot([CounterEffects])
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
]
};
