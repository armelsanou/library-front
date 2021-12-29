/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AbonnementService } from './abonnement.service';

describe('Service: Abonnement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbonnementService]
    });
  });

  it('should ...', inject([AbonnementService], (service: AbonnementService) => {
    expect(service).toBeTruthy();
  }));
});
