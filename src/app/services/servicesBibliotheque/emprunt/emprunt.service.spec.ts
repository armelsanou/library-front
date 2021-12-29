import { TestBed } from '@angular/core/testing';

import { EmpruntService } from './emprunt.service';

describe('EmpruntService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpruntService = TestBed.get(EmpruntService);
    expect(service).toBeTruthy();
  });
});
