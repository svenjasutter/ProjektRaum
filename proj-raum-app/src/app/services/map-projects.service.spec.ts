import { TestBed } from '@angular/core/testing';

import { MapProjectsService } from './map-projects.service';

describe('MapProjectsService', () => {
  let service: MapProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
