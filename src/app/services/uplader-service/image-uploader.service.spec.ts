import { TestBed } from '@angular/core/testing';

import { ImageUploaderService } from './image-uploader.service';

describe('ImageUploaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageUploaderService = TestBed.get(ImageUploaderService);
    expect(service).toBeTruthy();
  });
});
