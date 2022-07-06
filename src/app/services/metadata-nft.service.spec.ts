import { TestBed } from '@angular/core/testing';

import { MetadataNftService } from './metadata-nft.service';

describe('MetadataNftService', () => {
  let service: MetadataNftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetadataNftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
