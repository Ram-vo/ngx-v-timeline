import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVTimelineComponent } from './ngx-v-timeline.component';

describe('NgxVTimelineComponent', () => {
  let component: NgxVTimelineComponent;
  let fixture: ComponentFixture<NgxVTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxVTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxVTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
