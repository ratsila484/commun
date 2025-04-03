import { TestBed } from '@angular/core/testing';

import { ListeFileService } from './liste-file.service';

describe('ListeFileService', () => {
  let service: ListeFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
