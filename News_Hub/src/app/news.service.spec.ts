import { TestBed } from '@angular/core/testing';
import { NewsdataService } from './news.service';

describe('NewsService', () => {
  let service: NewsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
