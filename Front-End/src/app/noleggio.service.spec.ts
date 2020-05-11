import { TestBed } from '@angular/core/testing';

import { NoleggioService } from './noleggio.service';

describe('NoleggioService', () => {
  let service: NoleggioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoleggioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
