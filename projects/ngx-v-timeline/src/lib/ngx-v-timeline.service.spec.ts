import { TestBed } from '@angular/core/testing';

import { NgxVTimelineService } from './ngx-v-timeline.service';

describe('NgxVTimelineService', () => {
  let service: NgxVTimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxVTimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
