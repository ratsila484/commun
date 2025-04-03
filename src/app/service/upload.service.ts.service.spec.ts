import { TestBed } from '@angular/core/testing';

import { UploadServiceTsService } from './upload.service.ts.service';

describe('UploadServiceTsService', () => {
  let service: UploadServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
