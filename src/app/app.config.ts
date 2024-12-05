import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { wareHouseReducer } from './state/warehouse-reducer';
import { provideEffects } from '@ngrx/effects';
import { WareHouseRecordsEffeccts } from './state/warehouse-recors.effects';

export const appConfig: ApplicationConfig = {
  providers: [
      provideHttpClient(), 
      provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(routes), 
      provideClientHydration(), 
      provideAnimationsAsync(), 
      provideEffects(WareHouseRecordsEffeccts),
      provideStore(),
      provideState({
        name:"warehouseRecords",
        reducer : wareHouseReducer 
      }),
      provideStoreDevtools({maxAge: 25, logOnly:false})
    ]
};
