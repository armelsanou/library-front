/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LecteurService } from './lecteur.service';

describe('Service: Classe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LecteurService]
    });
  });

  it('should ...', inject([LecteurService], (service: LecteurService) => {
    expect(service).toBeTruthy();
  }));
});
