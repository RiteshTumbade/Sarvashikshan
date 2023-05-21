import { TestBed } from '@angular/core/testing';

import { ReleaseSprintBacklogSService } from './release-sprint-backlog-s.service';

describe('ReleaseSprintBacklogSService', () => {
  let service: ReleaseSprintBacklogSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleaseSprintBacklogSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 
});
