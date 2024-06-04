import { TestBed } from '@angular/core/testing';
import { WetterServiceService } from './wetter-service.service';

describe('WetterServiceService', () => {
  let service: WetterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WetterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});