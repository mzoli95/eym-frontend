import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // zoneless, angular.json remove "zone.js" from polyfills
    provideExperimentalZonelessChangeDetection(),
    // use zone.js
    // provideZoneChangeDetection({ eventCoalescing: true }),
    
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
};