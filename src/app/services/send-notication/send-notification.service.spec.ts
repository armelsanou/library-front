import { TestBed } from '@angular/core/testing';

import { SendNotificationService } from './send-notification.service';

describe('SendNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendNotificationService = TestBed.get(SendNotificationService);
    expect(service).toBeTruthy();
  });
});
