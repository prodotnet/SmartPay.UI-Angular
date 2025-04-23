import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  
import { provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

// The appConfig object provides the necessary configurations for Angular's bootstrapping
export const appConfig: ApplicationConfig = {
  providers: [
    // Enables optimized change detection using zones with event coalescing to improve performance
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Provides the router configuration to handle navigation across the app
    provideRouter(routes),

    // Ensures that any client-side hydration (i.e., Angular re-renders the app if needed) is enabled
    //provideClientHydration(),

    // Configures HTTP client support to use the `fetch` API under the hood for requests
    // This is an alternative to the XMLHttpRequest or default browser methods, which is modern and native.
    provideHttpClient(withFetch()),
  ],
};
