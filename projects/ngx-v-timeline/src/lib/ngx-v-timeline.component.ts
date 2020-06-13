import { Component, OnInit, Input } from '@angular/core';
import { TimelineItem } from '../public-api';

@Component({
  selector: 'lib-ngx-v-timeline',
  templateUrl: './ngx-v-timeline.component.html',
  styleUrls: ['./ngx-v-timeline.component.css'],
})
export class NgxVTimelineComponent implements OnInit {
  list: TimelineItem[] = [];
  constructor() {}

  @Input()
  set items(list: TimelineItem[]) {
    this.list = list;
  }

  ngOnInit() {}

  action(item: TimelineItem) {
    if (item.command) {
      item.command();
    }
  }
}
