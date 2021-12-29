import { TestBed } from '@angular/core/testing';

import { EtatLivreService } from './etat-livre.service';

describe('EtatLivreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtatLivreService = TestBed.get(EtatLivreService);
    expect(service).toBeTruthy();
  });
});
