import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InmemorywebapiService } from './inmemorywebapi.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
