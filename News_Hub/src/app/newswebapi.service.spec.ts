import { TestBed } from '@angular/core/testing';

import { NewswebapiService } from './newswebapi.service';

describe('NewswebapiService', () => {
  let service: NewswebapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewswebapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
