import { TestBed } from '@angular/core/testing';

import { RayonService } from './rayon.service';

describe('RayonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RayonService = TestBed.get(RayonService);
    expect(service).toBeTruthy();
  });
});
