import { TestBed } from '@angular/core/testing';

import { PhotoGrabberService } from './photo-grabber.service';

describe('PhotoGrabberService', () => {
  let service: PhotoGrabberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGrabberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
