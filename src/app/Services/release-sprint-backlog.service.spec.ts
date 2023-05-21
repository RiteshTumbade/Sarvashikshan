import { TestBed } from '@angular/core/testing';

import { ReleaseSprintBacklogService } from './release-sprint-backlog.service';

describe('ReleaseSprintBacklogService', () => {
  let service: ReleaseSprintBacklogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleaseSprintBacklogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
