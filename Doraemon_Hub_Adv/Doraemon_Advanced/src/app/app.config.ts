import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WebapiService } from './inmemorywebapi.service';
export const appConfig: ApplicationConfig = {
  
  
  providers: [
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(WebapiService,{dataEncapsulation:false})),
    provideRouter(routes)]


  };
